import React from "react";
import ButtonModal from "./btn-modal";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";
import ListCostos from "../list-costos";
import { BiEdit } from "react-icons/bi";
import FormUpdateJob from "./form-updte-budgetjob";
import DeleteJob from "./button-delete";
import CardJob from "./card-job";

const Presupuesto = async ({ id_obra }: { id_obra: string }) => {
  const supabase = createClient(cookies());

  const { data } = await supabase
    .from("budget")
    .select()
    .eq("id_obra", id_obra)
    .single();
  const { data: budget_job } = await supabase
    .from("budget_job")
    .select()
    .eq("id_budget", data?.id!);

  return (
    <section className=" flex flex-col min-h-[200px] rounded-xl p-2 md:p-4 bg-white">
      <header className=" flex w-full justify-between mb-2">
        <h3 className=" font-semibold">Presupuesto</h3>

        {true && (
          <ButtonModal
            style="px-2 py-1 bg-red-500 text-white text-sm rounded-md font-semibold"
            content="Añadir"
          >
            <ListCostos id_budget={data?.id!} />
          </ButtonModal>
        )}
      </header>

      <section className=" sm:hidden flex flex-col gap-2">
        {budget_job?.map((p) => (
          <CardJob key={p.id} job={p} id_obra={id_obra} />
        ))}
      </section>

      <table className="w-full hidden sm:table">
        <thead>
          <tr className="text-xs md:text-sm font-thin ">
            <th className="w-[50%] p-2 text-start">Nombre</th>
            <th className="w-[20%] p-2 text-start">Metro*Precio</th>
            <th className="w-[20%] p-2 text-end">Total</th>
            <th className=" w-[10] p-2 text-end">Edit</th>
          </tr>
        </thead>

        <tbody>
          {budget_job?.map((l) => (
            <tr key={l.id} className="  rounded-md shadow-md text-xs font-thin">
              <td className="p-2 text-start">{l.name}</td>
              <td className="p-2 text-start">
                {l.meter}
                {l.measurement} * ${l.price_labour}
              </td>
              <td className="p-2 text-end">${l?.meter! * l?.price_labour!}</td>
              <td className="p-2 text-end flex items-center">
                <ButtonModal
                  style="border-none p-1 w-fit h-fit text-md"
                  content={<BiEdit />}
                >
                  <FormUpdateJob budget_job={l} id_obra={id_obra} />
                </ButtonModal>

                <DeleteJob id_job={l.id} id_obra={id_obra} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Presupuesto;
