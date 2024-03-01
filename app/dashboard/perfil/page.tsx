"use server";
import { signOut } from "@/app/libs/actions";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

const PagePerfil = async () => {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="bg-neutral-100 min-h-screen md:min-h-full md:rounded-xl p-2 md:p-3">
      <section className="flex flex-col px-2 mx-auto md:w-[70%]  lg:w-[50%] flex-1 w-full">
        <div className="flex flex-col items-center mb-2 bg-neutral-800 p-3 rounded-lg">
          <Image
            className=" w-28 h-28 rounded-full"
            src="/construccion.png"
            alt="Imagen de perfil"
            width={100}
            height={100}
          />
          <h5 className=" font-semibold text-white mt-2">
            {user?.user_metadata.full_name}
          </h5>
        </div>

        <div className="flex justify-center">
          <form action={signOut}>
            <button
              type="submit"
              className=" text-sm text-red-500 hover:bg-neutral-200 border-[1px] border-red-400 rounded-lg font-normal p-2 w-full max-w-[200px]"
            >
              Cerrar Sesion
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PagePerfil;
