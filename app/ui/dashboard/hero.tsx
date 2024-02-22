import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col  w-full  ">
      <h2 className={`  text-xl md:text-4xl   font-medium mb-1`}>
        Hola, Ruben Sierra! Bienvenido.
      </h2>
      <p className="text-neutral-700 text-sm md:text-md ">
        Aqui podras crear tus presupuestos
      </p>
    </section>
  );
};

export default Hero;
