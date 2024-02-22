"use client";
import Link from "next/link";
import React from "react";

const ButtonCreate = () => {
  return (
    <Link
      className=" px-2 py-1 bg-red-500 rounded-md text-white text-sm font-semibold"
      href={`/dashboard/obras/create`}
    >
      Crear
    </Link>
  );
};

export default ButtonCreate;
