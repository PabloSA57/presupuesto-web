import HeroObra from "@/app/ui/obras/hero";
import Presupuesto from "@/app/ui/obras/presupuesto";
import React, { Suspense } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  console.log(params.id, "param");
  return (
    <main className="flex bg-neutral-100 min-h-screen md:min-h-full md:rounded-xl p-1 md:p-3">
      <div className="flex gap-5 flex-col flex-1">
        <section className="w-full flex flex-col   md:min-h-[200px] gap-5 md:flex-row">
          <div className=" w-full md:w-1/2 min-h-[100px] ">
            <Suspense fallback={<div>LOading</div>}>
              <HeroObra obra_id={params.id} />
            </Suspense>
          </div>
          <div className=" w-full md:w-1/2 min-h-[100px] bg-slate-600"></div>
        </section>

        <section className="w-full ">
          <div className="w-full md:w-[60%]">
            <Presupuesto id_obra={params.id} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
