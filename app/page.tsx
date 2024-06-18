import Image from "next/image";
import Link from "next/link";
import { BiBarChartSquare, BiSpreadsheet } from "react-icons/bi";
import { TbShovel } from "react-icons/tb";

import logo from "@/app/assets/logo.png";

export default function Home() {
  return (
    <div className=" w-full h-full bg-neutral-900 flex flex-col">
      <div className="min-h-screen flex flex-col">
        <header className="w-full  py-3 text-white  flex justify-between px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
          <Image
            src={logo}
            alt="presupuesto para la construccion"
            width={100}
            height={50}
          />
          <nav className="flex items-center gap-2">
            <Link href={"/register"} className=" text-sm lg:font-semibold">
              Registrar
            </Link>
            <Link
              href={"/login"}
              className="text-sm h-fit  bg-red-500 py-1 px-2 md:py-2 md:px-3 lg:font-semibold rounded-md"
            >
              Login
            </Link>
          </nav>
        </header>
        <main className="flex flex-col flex-1  justify-center  ">
          <section className=" flex flex-col items-center gap-2  flex-1 px-2 sm:px-4 lg:px-20 xl:24">
            <div className="flex flex-col justify-center items-center py-8 md:py-10 lg:py-20 text-white w-full">
              <h1 className="text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                Gestiona tus Proyectos de Construcción de Forma Eficiente
              </h1>
              <p className="text-sm md:text-base  text-center text-neutral-400">
                Facilita la gestión de tus proyectos de construcción con
                precisión y eficiencia
              </p>

              <Link
                href="/dashboard"
                className="text-sm h-fit mt-4  bg-red-500 py-1 px-2 md:py-2 md:px-3 lg:font-semibold rounded-md"
              >
                Comenzar
              </Link>
            </div>

            <div className="w-full md:w-[80%] lg:w-[70%]">
              <Image
                src={"/hero-phone.png"}
                alt="Hero desk"
                width={700}
                height={700}
                className="w-full h-auto  md:hidden"
              />
              <Image
                src={"/hero-desk.png"}
                alt="Hero desk"
                width={700}
                height={700}
                className="w-full h-auto hidden md:block"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4 md:gap-6 lg:gap-14 px-2 py-8 md:py-10 lg:py-20  sm:px-4 lg:px-20">
            <h3 className="text-white text-center font-bold text-lg lg:text-xl">
              Nuestros servicios
            </h3>

            <div className="flex flex-col md:flex-row gap-3 md:gap-10 lg:gap-16">
              <div className=" w-full flex flex-col items-center gap-2 md:gap-4 md:w-[33%] p-1">
                <div className=" bg-red-500 w-fit h-fi p-2 rounded-md text-xl text-white">
                  <span>
                    <TbShovel />
                  </span>
                </div>
                <div className=" flex flex-col gap-1 md:gap-3">
                  <h5 className=" font-semibold text-center text-base text-white">
                    Gestiona tus Proyectos de Construcción
                  </h5>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    Crea y administra tus proyectos de construcción con
                    facilidad. Define todos los detalles importantes de la obra
                    y mantén toda la información centralizada y accesible.
                  </p>
                </div>
              </div>
              <div className=" w-full flex flex-col items-center gap-2 md:gap-4 md:w-[33%] p-1">
                <div className=" bg-red-500 w-fit h-fi p-2 rounded-md text-xl text-white">
                  <span>
                    <BiBarChartSquare />
                  </span>
                </div>
                <div className=" flex flex-col gap-1 md:gap-3">
                  <h5 className=" font-semibold text-center text-base text-white">
                    Controla tus Ingresos y Gastos
                  </h5>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    Registra y monitorea todos los movimientos financieros de tu
                    obra. Conoce cuánto dinero se ha cobrado, cuánto queda por
                    cobrar, y mantén un seguimiento detallado de tus ingresos y
                    gastos.
                  </p>
                </div>
              </div>
              <div className=" w-full flex flex-col items-center gap-2 md:gap-4 md:w-[33%] p-1">
                <div className=" bg-red-500 w-fit h-fi p-2 rounded-md text-xl text-white">
                  <span>
                    <BiSpreadsheet />
                  </span>
                </div>
                <div className=" flex flex-col gap-1 md:gap-3">
                  <h5 className=" font-semibold text-center text-base text-white">
                    Presupuestos Precisos y Actualizados
                  </h5>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    Genera presupuestos detallados con información actualizada.
                    Nuestra app te permite crear y ajustar presupuestos según
                    los datos más recientes, asegurando precisión y eficiencia
                    en cada proyecto.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="  w-full py-3 flex justify-center px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
        <Image
          src={logo}
          alt="presupuesto para la construccion"
          width={100}
          height={50}
        />
      </footer>
    </div>
  );
}
