import { deleteJob } from "@/app/libs/actions";
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteJob = ({
  id_job,
  id_obra,
}: {
  id_job: number;
  id_obra: string;
}) => {
  const actionDelete = deleteJob.bind(null, id_job, id_obra);
  return (
    <form action={actionDelete} className="flex">
      <button className="text-sm text-red-500" type="submit">
        <MdDelete />
      </button>
    </form>
  );
};

export default DeleteJob;
