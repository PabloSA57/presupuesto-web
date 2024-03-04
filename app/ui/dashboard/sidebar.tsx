"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiBuilding, BiHomeAlt, BiUser } from "react-icons/bi";
import { MdOutlineHardware } from "react-icons/md";

const links = [
  { name: "Home", href: "/dashboard", icon: <BiHomeAlt /> },
  {
    name: "Obras",
    href: "/dashboard/obras",
    icon: <BiBuilding />,
  },
  { name: "Perfil", href: "/dashboard/perfil", icon: <BiUser /> },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="md:py-6  w-full fixed bottom-0 md:fixed md:h-screen md:w-fit">
      <div className="p-2 hidden md:flex items-center gap-1">
        <span className=" text-red-600 text-lg">
          <MdOutlineHardware />
        </span>

        <h2 className=" text-white hidden lg:block">Presupuesto</h2>
      </div>
      <nav className=" bg-neutral-900 w-full md:h-full  p-2 lg:w-[200px] md:rounded-xl ">
        <ul className=" flex justify-between md:flex-col gap-4   ">
          {links.map((l) => (
            <li key={l.name}>
              <Link href={l.href} className="flex items-center gap-1 ">
                <div
                  className={clsx(
                    "  p-2 rounded-lg text-white text-base ",
                    pathname === l.href ? "bg-red-600" : "bg-neutral-800"
                  )}
                >
                  {l.icon}
                </div>
                <span className=" hidden lg:block text-sm text-neutral-400">
                  {l.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
