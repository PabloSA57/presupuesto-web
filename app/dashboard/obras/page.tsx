import Search from "@/app/ui/obras/search";
import Tabla from "@/app/ui/tabla-obras";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const supabase = createClient(cookies());
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="flex flex-col bg-neutral-100 h-full overflow-x-hidden md:min-h-full md:rounded-xl p-1 md:p-3">
      <div className="flex  flex-col flex-1">
        <div className="flex  justify-between p-2">
          <h1 className=" text-lg font-semibold">Obras</h1>
          <Link
            className=" px-2 py-1 bg-red-500 rounded-md text-white text-sm font-semibold"
            href={`/dashboard/obras/create`}
          >
            Crear
          </Link>
        </div>
        <div>
          <Search />
        </div>

        <Tabla isSign={false} query={query} currentPage={currentPage} />
      </div>
    </main>
  );
};

export default Page;
