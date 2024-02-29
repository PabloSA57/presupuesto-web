import { cookies } from "next/headers";

import { createClient } from "@/app/utils/supabase/server";

import { BiDownload } from "react-icons/bi";

import ListCostos from "@/app/ui/list-costos";
import ButtonModal from "@/app/ui/obras/btn-modal";
import BudgetList from "@/app/ui/obras/list-budget";
import Link from "next/link";
import { ButtonBack } from "@/app/ui/button";

const Page = async ({ params }: { params: { id: string } }) => {
  const supabase = createClient(cookies());

  const { data: budget, error } = await supabase
    .from("budget")
    .select("*, budget_job(*)")
    .eq("id_obra", params.id)
    .order("meter", { referencedTable: "budget_job", ascending: false })
    .single();

  return (
    <main className="flex bg-neutral-100 h-full overflow-auto md:min-h-full md:rounded-xl p-1 md:p-3">
      <div className="flex-1 flex flex-col">
        <ButtonBack />

        <div className=" flex flex-col w-full  p-2 rounded-md border-b-[1px] border-neutral-400 ">
          <div className="flex justify-between w-full">
            <div>
              <h4 className=" text-base font-semibold ">Presupuesto</h4>
              <p className="text-xs font-normal text-center text-neutral-700">
                Aqui podras editar tu presupuesto
              </p>
            </div>

            <div className=" flex gap-2 items-center">
              <ButtonModal
                style="px-2 py-1 bg-red-500 text-white text-sm rounded-md font-semibold"
                content="Añadir"
              >
                <ListCostos id_budget={budget?.id!} />
              </ButtonModal>
              <BiDownload />
            </div>
          </div>

          {budget?.total && (
            <p className=" text-base font-semibold  text-center text-red-500">
              ${budget?.total}
            </p>
          )}
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
