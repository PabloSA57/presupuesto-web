import React, { Suspense } from "react";

import Hero from "@/app/ui/dashboard/hero";
import CardWrapper from "../ui/dashboard/card";
import RevenueChart from "../ui/dashboard/revenue-chart";

import Tabla from "@/app/ui/tabla-obras";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";

export const revalidate = 0;

const Page = async () => {
  const supabase = createClient(cookies());

  //const { data, error } = await supabase.auth.getUser();
  //console.log(data.user, "data");
  /*if (error || !data?.user) {
    redirect("/");
  }*/

  return (
    <main className="bg-neutral-100 min-h-screen md:min-h-full md:rounded-xl p-1 md:p-3">
      <Hero />
      <div className="grid gap-2 mt-2 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>

      <Tabla isSign={true} query="" currentPage={1} />
    </main>
  );
};

export default Page;
