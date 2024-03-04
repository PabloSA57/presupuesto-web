"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useFormStatus } from "react-dom";
import { FiLoader } from "react-icons/fi";
import { MdArrowBack, MdDelete } from "react-icons/md";
import { deleteJob } from "../libs/actions";
import Link from "next/link";

export const ButtonBack = () => {
  const router = useRouter();

  return (
    <button
      className=" text-lg w-fit h-fit p-1"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        router.back();
      }}
    >
      <MdArrowBack />
    </button>
  );
};

export const ButtonCreate = () => {
  return (
    <Link
      className=" px-2 py-1 bg-red-500 rounded-md text-white text-sm font-semibold"
      href={`/dashboard/obras/create`}
    >
      Crear
    </Link>
  );
};

export const Submit = ({
  text,
  isDisabled,
}: {
  text: string;
  isDisabled?: boolean;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || isDisabled}
      className=" bg-red-500 min-h-9 mt-1  hover:bg-red-600 px-3 py-2 text-sm font-semibold rounded-lg text-white disabled:bg-red-400 flex justify-center items-center disabled:cursor-not-allowed"
      type="submit"
    >
      {pending ? (
        <span className="text-center text-sm font-semibold animate-spin">
          <FiLoader />
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export const DeleteJob = ({
  id_job,
  id_obra,
}: {
  id_job: number;
  id_obra: string;
}) => {
  const actionDelete = deleteJob.bind(null, id_job, id_obra);
  return (
    <form action={actionDelete} className="flex">
      <button className="text-lg text-red-500" type="submit">
        <MdDelete />
      </button>
    </form>
  );
};
