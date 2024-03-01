import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-full bg-neutral-900 flex flex-col">
      <header className="w-full  py-3 text-white  flex justify-between px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
        <h1 className="text-base font-semibold md:text-lg">Presupuesto</h1>
        <nav className="flex items-center gap-2">
          <Link href={"/register"} className=" text-sm md:text-base">
            Registrar
          </Link>
          <Link
            href={"/login"}
            className="text-sm md:text-base bg-red-500 py-2 px-3 rounded-md"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="min-h-screen flex flex-col justify-center flex-1">
        <section className=" flex items-center  flex-wrap flex-1 px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
          <div className="flex flex-col items-center mb-4 md:items-start text-white w-full md:w-1/2">
            <h2 className=" text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              Presupuesto para la construcción
            </h2>
            <p className="text-sm md:text-base text-neutral-400">
              Podrás llevar los números de tus obras.
            </p>

            <button className=" w-fit bg-red-500 text-sm md:text-base py-2 px-3 mt-2 rounded-md">
              Dashboard
            </button>
          </div>

          <div className="w-full md:w-1/2">
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
      </main>

      <footer className="  w-full py-3 text-white  flex justify-between px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
        <h2 className="text-base font-semibold md:text-lg">Presupuesto</h2>
      </footer>
    </div>
  );
}
