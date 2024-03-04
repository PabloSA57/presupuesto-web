export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="w-[30%] h-fit  p-2 md:p-3 ">
        <div className="flex items-center gap-3">
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      <td className="w-[30%] h-fit  p-2 md:p-3 ">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>

      <td className="w-[30%] h-fit  p-2 md:p-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>

      <td className="w-[30%] h-fit p-2  md:p-3 text-end">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}

export function ObrasTableSkeleton() {
  return (
    <div className=" p-2 flex-1 max-w-screen-[100vw] flex flex-col md:p-3 bg-white rounded-lg mt-3">
      <div className=" w-full flex justify-between p-1 md:p-3">
        <div className="">
          <h2 className=" font-semibold text-sm md:text-lg">Obras</h2>
          <p className=" text-xs md:text-sm font-thin text-neutral-600">
            Aqui veras tus obras
          </p>
        </div>
      </div>

      <div className="overflow-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[30%] p-2 md:p-3 text-start text-xs md:text-sm"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="w-[30%] p-2 md:p-3 text-start text-xs md:text-sm"
              >
                Estado
              </th>
              <th
                scope="col"
                className="w-[30%] p-2 md:p-3 text-start text-xs md:text-sm"
              >
                Fecha
              </th>
              <th
                scope="col"
                className="w-[30%] p-2 md:p-3 text-end text-xs md:text-sm"
              >
                Direccion
              </th>
            </tr>
          </thead>
          <tbody className=" min-h-[200px]  ">
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  );
}
