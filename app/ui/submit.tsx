"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { FiLoader } from "react-icons/fi";

const Submit = ({
  text,
  isDisabled,
}: {
  text: string;
  isDisabled?: boolean;
}) => {
  const { pending } = useFormStatus();

  console.log(pending);
  return (
    <button
      disabled={pending || isDisabled}
      className=" bg-red-600 px-3 py-2 text-sm font-semibold rounded-lg text-white disabled:bg-red-400 flex justify-center disabled:cursor-not-allowed"
      type="submit"
    >
      {pending ? (
        <span className="text-center animate-spin">
          <FiLoader />
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Submit;
