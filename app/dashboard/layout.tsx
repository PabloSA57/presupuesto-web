import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" min-h-screen w-full md:px-20 lg:px-40 relative md:flex md:gap-4">
      <div className="md:py-6 bg-slate-600 w-full absolute bottom-0 md:fixed md:h-screen md:w-fit">
        <nav className=" bg-slate-100 w-full md:h-full  p-2 md:w-[100px] md:rounded-xl flex justify-center items-center">
          <ul className=" flex flex-col gap-3   ">
            <li>l</li>
          </ul>
        </nav>
      </div>

      <main className="min-h-screen w-full md:ml-[110px] bg-red-700">
        {children}
      </main>
    </div>
  );
};

export default layout;
