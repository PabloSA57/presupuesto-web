import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-neutral-900  min-w-screen min-h-screen">
      <header className="w-full  py-3 text-white  flex justify-between px-1 sm:px-4 md:px-5  lg:px-20 xl:24">
        <h1 className="text-base font-semibold md:text-lg">Presupuesto</h1>
      </header>
      <main className="flex-1 flex justify-center items-center   ">
        {children}
      </main>
    </div>
  );
}
