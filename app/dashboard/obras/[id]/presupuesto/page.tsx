import { cookies } from "next/headers";

import { createClient } from "@/app/utils/supabase/server";
import ListCostos from "@/app/ui/list-costos";
import ButtonModal from "@/app/ui/obras/btn-modal";
import BudgetList from "@/app/ui/obras/list-budget";

import { redirect } from "next/navigation";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const Page = async ({ params }: { params: { id: string } }) => {
  const supabase = createClient(cookies());

  const {
    data: { user },
    error: errorAuth,
  } = await supabase.auth.getUser();

  if (errorAuth || !user) {
    redirect("/");
  }

  const { data: budget, error } = await supabase
    .from("budget")
    .select("*, budget_job(*)")
    .eq("id_obra", params.id)
    .order("meter", { referencedTable: "budget_job", ascending: false })
    .single();

  return (
    <main className="flex bg-neutral-100 h-full overflow-auto md:min-h-full md:rounded-xl p-1 md:p-3">
      <div className="flex-1 flex flex-col">
        <Link
          className="text-lg w-fit h-fit p-1"
          href={`/dashboard/obras/${params.id}`}
        >
          <MdArrowBack />
        </Link>

        <div className=" flex flex-col w-full  p-2 rounded-md border-b-[1px] border-neutral-400 ">
          <div className="flex justify-between w-full">
            <div>
              <h4 className=" text-base font-semibold ">Presupuesto</h4>
              <p className="text-xs font-normal text-center text-neutral-700">
                Aqui podras editar tu presupuesto
              </p>
            </div>

            <ButtonModal
              style="px-2 py-1 h-fit bg-red-400 hover:bg-red-500 text-white text-sm rounded-md font-semibold"
              content="Añadir"
            >
              <ListCostos id_budget={budget?.id!} />
            </ButtonModal>
          </div>

          <p className=" text-base font-semibold  text-center text-red-500">
            {budget?.total ? `$${budget?.total}` : "$0"}
          </p>
        </div>

        {budget?.budget_job.length! > 0 ? (
          <BudgetList
            budget_job={budget?.budget_job}
            id_obra={params.id}
            is_edit
          />
        ) : (
          <p className=" text-sm mt-2 font-normal text-center text-neutral-700">
            Agregue trabajos a la lista
          </p>
        )}
      </div>
    </main>
  );
};

export default Page;
