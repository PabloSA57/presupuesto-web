import React, { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";

import Hero from "@/app/ui/dashboard/hero";
import CardWrapper from "../ui/dashboard/card";
import Tabla from "@/app/ui/tabla-obras";

export const revalidate = 0;

const Page = async () => {
  const supabase = createClient(cookies());

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  //console.log(data.user, "data");
  /*if (error || !data?.user) {
    redirect("/");
  }*/

  return (
    <main className="bg-neutral-100 min-h-screen md:min-h-full md:rounded-xl p-1 md:p-3">
      <Hero full_name={user?.user_metadata.full_name} />

      <CardWrapper user_id={user?.id!} />

      <Tabla isSign={true} query="" currentPage={1} />
    </main>
  );
};

export default Page;
