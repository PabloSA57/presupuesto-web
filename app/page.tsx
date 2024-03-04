import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-full bg-neutral-900 flex flex-col">
      <div className="min-h-screen flex flex-col">
        <header className="w-full  py-3 text-white  flex justify-between px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
          <h1 className="text-base font-semibold md:text-lg">Presupuesto</h1>
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
          <section className=" flex items-center  flex-wrap flex-1 px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
            <div className="flex flex-col items-center mb-4 lg:items-start text-white w-full lg:w-1/2">
              <h2 className=" text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                Presupuesto para la construcción
              </h2>
              <p className="text-sm md:text-base text-neutral-400">
                Podrás llevar los números de tus obras.
              </p>

              <Link
                href="/dashboard"
                className="text-sm h-fit mt-4  bg-red-500 py-1 px-2 md:py-2 md:px-3 lg:font-semibold rounded-md"
              >
                Dashboard
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
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
      </div>

      <footer className="  w-full py-3   flex justify-between px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
        <small className="text-neutral-200 text-center">Pablo Sierra</small>
      </footer>
    </div>
  );
}
