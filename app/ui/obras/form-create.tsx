"use client";
import React from "react";
import Input from "../input";
import ImageLoad from "../image-load";
import { useFormState, useFormStatus } from "react-dom";
import { createObra } from "@/app/libs/actions";

const FormCreate = () => {
  const initialState = { message: "", errors: {} };
  const [state, formAction] = useFormState(createObra, initialState);
  const { pending } = useFormStatus();

  console.log(state, "state");
  console.log(pending, "pending");
  return (
    <form action={formAction} className="flex flex-col gap-3 w-full">
      <Input
        type="text"
        name="name"
        placeholder="Nombre de la Obra"
        label="Nombre"
        required
      />
      <Input
        type="text"
        name="direction"
        placeholder="Direccion"
        label="Direccion"
        required
      />

      <ImageLoad />

      <Input type="date" name="start_date" label="Fecha de inicio" />
      <Input type="date" name="end_date" label="Fecha de fin" />
      {state?.message && (
        <p className=" text-xs text-neutral-500 font-thin">{state.message}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className=" bg-red-600 px-3 py-2 text-sm font-semibold rounded-lg text-white"
      >
        Crear
      </button>
    </form>
  );
};

export default FormCreate;
