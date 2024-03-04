import React, { Suspense } from "react";
import { cookies } from "next/headers";
import Link from "next/link";

import { createClient } from "@/app/utils/supabase/server";

import HeroObra from "@/app/ui/obras/hero";
import BudgetList from "@/app/ui/obras/list-budget";
import PaymentStatistics from "@/app/ui/obras/payment-statistics";
import { redirect } from "next/navigation";

import PdfCointainer from "@/app/ui/mydocument";

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
    .gt("budget_job.meter", 0)
    .order("meter", { referencedTable: "budget_job", ascending: false })
    .single();

  if (error) {
    redirect("/dashboard/obras");
  }
  return (
    <main className="flex bg-neutral-100 h-full overflow-auto md:min-h-full md:rounded-xl p-1 md:p-3">
      <div className="flex gap-5 flex-col flex-1">
        <section className="w-full flex flex-col   md:min-h-[200px] gap-5 md:flex-row">
          <div className=" w-full md:w-1/2 min-h-[100px] ">
            <HeroObra obra_id={params.id} />
          </div>
          <div className=" w-full md:w-1/2 min-h-[100px] ">
            <PaymentStatistics
              total={budget?.total!}
              charged={budget?.charged!}
              id_budget={budget?.id!}
              id_obra={params.id}
            />
          </div>
        </section>

        <section className="w-full flex-1 flex flex-col">
          <div className=" flex  flex-1 flex-col min-h-[200px] rounded-xl p-2 md:p-4 bg-white">
            <header className=" flex w-full justify-between mb-2">
              <h3 className=" font-semibold">Presupuesto</h3>

              <div className="flex gap-2 items-center">
                <Link
                  className=" bg-red-400 hover:bg-red-500 rounded-md text-sm font-semibold px-2 py-1 text-white"
                  href={`/dashboard/obras/${params.id}/presupuesto`}
                >
                  Editar
                </Link>

                <PdfCointainer
                  data={{
                    total: budget?.total!,
                    budget_job: budget.budget_job.map((d) => {
                      return {
                        name: d.name!,
                        total_labour: d.meter! * d.price_labour!,
                      };
                    }),
                  }}
                />
              </div>
            </header>
            <Suspense fallback={<div>Loading</div>}>
              {budget?.budget_job.length! > 0 ? (
                <BudgetList
                  budget_job={budget?.budget_job}
                  id_obra={params.id}
                />
              ) : (
                <p className=" text-sm font-normal text-center text-neutral-700">
                  Agregue trabajos a la lista
                </p>
              )}
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
