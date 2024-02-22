import React from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import Statu from "./statu";
import Pagination from "@/app/ui/pagination";
import { ObraService } from "../services/obras";
import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";

import { Status } from "../libs/definitions";
import { redirect } from "next/navigation";
import Link from "next/link";

const Tabla = async ({
  isSign,
  query,
  currentPage,
}: {
  isSign: boolean;
  query: string;
  currentPage: number;
}) => {
  const supabase = createClient(cookies());

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/");
  }
  const obraService = new ObraService(supabase);
  const { data: count_obras } = await supabase.rpc("count_obras");

  const { data: obras } = await obraService.getObras(
    data.user?.id!,
    query,
    currentPage
  );

  return (
    <section className=" p-2 md:p-3 bg-white rounded-lg mt-3">
      <div className=" w-full flex justify-between p-1 md:p-3">
        <div className="">
          <h2 className=" font-semibold text-sm md:text-lg">Mis Obras</h2>
          <p className=" text-xs md:text-sm font-thin text-neutral-600">
            Aqui veras tus obras
          </p>
        </div>

        {!isSign && (
          <button className=" flex gap-1 items-center rounded-lg px-2 shadow-lg p-1 h-fit text-sm font-normal">
            <span>
              <MdOutlineFilterAlt />
            </span>
            Filtro
          </button>
        )}
      </div>

      <div className=" overflow-auto">
        <table className="w-full min-w-[600px]">
          <thead className=" ">
            <tr className=" border-b-2 border-b-neutral-200">
              <th className="w-[30%] p-2 md:p-3 text-start text-xs md:text-sm">
                Nombre
              </th>
              <th className="w-[10%] p-2 md:p-3 text-start text-xs md:text-sm">
                Estado
              </th>
              <th className="w-[30%] p-2 md:p-3 text-start text-xs md:text-sm">
                Progreso
              </th>
              <th className="w-[30%] p-2 md:p-3 text-end text-xs md:text-sm">
                Direccion
              </th>
            </tr>
          </thead>
          <tbody className=" min-h-[200px]  ">
            {obras?.map((d) => (
              <tr className="border-b-2  border-b-neutral-200" key={d?.id}>
                <td className="w-[30%] h-fit  p-2 md:p-3 text-start text-xs md:text-sm">
                  <Link href={`/dashboard/obras/${d?.id}`}>{d?.name}</Link>
                </td>
                <td className="w-[20%] h-fit  p-2  md:p-3 text-start">
                  <Statu statu={d?.state as Status} />
                </td>
                <td className="w-[20%] h-fit  p-2  md:p-3 text-start">
                  <div className=" h-1 rounded-md w-full  bg-green-400">
                    <span className=" md:text-xs text-neutral-500">100%</span>
                  </div>
                </td>
                <td className="w-[30%] h-fit p-2  md:p-3 text-end text-xs md:text-sm font-thin text-neutral-700">
                  {d?.direction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isSign && (
        <Pagination
          totalItems={count_obras!}
          itemsForPage={5}
          currentItmesCount={obras?.length!}
          currentPage={currentPage}
        />
      )}
    </section>
  );
};

export default Tabla;
