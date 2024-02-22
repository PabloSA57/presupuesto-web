import ButtonCreate from "@/app/ui/obras/btn-create";
import Search from "@/app/ui/obras/search";
import Tabla from "@/app/ui/tabla-obras";
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

  //const { data, error } = await supabase.auth.getUser();

  /* if (error || !data?.user) {
    redirect("/");
  }*/

  return (
    <main className="bg-neutral-100 min-h-screen md:min-h-full md:rounded-xl p-2 md:p-3">
      <div className="flex flex-1 justify-between p-2">
        <h1 className=" text-md font-semibold">Obras</h1>
        <ButtonCreate />
      </div>
      <div>
        <Search />
      </div>
      <Tabla isSign={false} query={query} currentPage={currentPage} />
    </main>
  );
};

export default Page;
