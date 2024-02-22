"use client";
import React, { useCallback, useState } from "react";
import list from "@/app/libs/costo/Enero24.json";
import { createClient } from "../utils/supabase/client";

const categories = Array.from(new Set(list.map((l) => l.category)));

const ListCostos = ({ id_budget }: { id_budget: number }) => {
  const [filter, setFilter] = useState("MOVIMIENTOS DE SUELOS:");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any[]>([]);

  const supabase = createClient();

  const listFiltered = useCallback(
    () =>
      list
        .filter((l) => l.category === filter)
        .filter((l) => {
          return search.length > 0
            ? l.name.toLowerCase().startsWith(search.toLocaleLowerCase())
            : true;
        }),
    [filter, search]
  );

  const addToBudget = async () => {
    const new_data = selected.map((d) => {
      return {
        price_labour: d.price_labour,
        measurement: d.measurement,
        id_budget,
        name: d.name,
      };
    });
    console.log(new_data, "new_data");
    const { data, error } = await supabase.from("budget_job").insert(new_data);
    console.log(data, error);
  };

  return (
    <div className=" flex flex-col h-full max-h-[500px] w-full max-w-[600px] p-2 rounded-lg bg-white ">
      <header className=" mb-2 bg-neutral-800 py-1 rounded-md text-white">
        <h5 className=" text-md font-semibold">Lista de costo</h5>
        <p className=" text-sm font-thin">Marzo 2025</p>
      </header>

      <div className=" w-full flex flex-wrap gap-2 justify-between">
        <input
          type="text"
          placeholder="Bucar producto"
          className=" w-1/2 bg-transparent border-[1px] outline-none focus:border-gray-400 rounded-lg text-sm mt-2 font-thin py-1 px-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          onChange={(e) => setFilter(e.target.value)}
          name=""
          id=""
          className=" w-fit text-neutral-900 bg-transparent border-[1px] outline-none focus:border-gray-400 rounded-lg text-xs mt-2 font-thin py-1 px-2"
        >
          {categories.map((c, index) => (
            <option className=" text-neutral-900" key={index}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 min-h-[300px] overflow-auto mt-2 w-full">
        <table className="w-full">
          <thead>
            <tr className=" text-xs font-medium">
              <th className=" text-start p-2">Nombre</th>
              <th className=" text-start p-2">Categoria</th>
              <th className=" text-end p-2">Precio/m2|m3</th>
            </tr>
          </thead>

          <tbody>
            {listFiltered().map((l) => (
              <tr
                key={l.name}
                className="  rounded-md shadow-md text-xs font-thin"
                onClick={() => setSelected([...selected, l])}
              >
                <td className="p-2 text-start">{l.name}</td>
                <td className="p-2 text-start">{l.category}</td>
                <td className="p-2 text-end">
                  {l.price_labour}/{l.measurement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full p-2 flex items-center justify-between rounded-md bg-neutral-800">
        <ul className="flex overflow-auto gap-1 flex-1 text-white">
          {selected?.map((d) => (
            <li key={d.name}>
              <div className="text-[11px] w-max p-1 ">{d?.name}</div>
            </li>
          ))}
        </ul>
        <button
          onClick={addToBudget}
          className=" px-2 h-fit py-1 rounded-md text-sm bg-red-500 ml-2  text-white"
        >
          add
        </button>
      </div>
    </div>
  );
};

export default ListCostos;
