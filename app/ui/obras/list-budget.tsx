import React from "react";
import TableJob from "./table-job";
import CardJob from "./card-job";

const BudgetList = ({
  budget_job,
  id_obra,
  is_edit = false,
}: {
  budget_job: any;
  id_obra: string;
  is_edit?: boolean;
}) => {
  return (
    <>
      <section className=" sm:hidden flex flex-col gap-2">
        {budget_job?.map((p: any) => (
          <CardJob key={p.id} job={p} id_obra={id_obra} isEdit={is_edit} />
        ))}
      </section>

      <TableJob budget_job={budget_job} id_obra={id_obra} is_edit={is_edit} />
    </>
  );
};

export default BudgetList;
