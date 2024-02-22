import React from "react";
import {
  MdIncompleteCircle,
  MdMonetizationOn,
  MdPending,
} from "react-icons/md";

const iconList = {
  completed: MdIncompleteCircle,
  pending: MdPending,
  total: MdMonetizationOn,
};

export default async function CardWrapper() {
  return (
    <>
      <Card title="Completado" value={200} type="completed" />
      <Card title="Pendiente" value={300} type="pending" />
      <Card title="Total de Obra" value={5000} type="total" />
      <Card title="Monto" value={5000} type="total" />
    </>
  );
}

export const Card = ({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "completed" | "pending" | "total";
}) => {
  const Icon = iconList[type];
  return (
    <div className="rounded-xl bg-white shadow-sm p-2 ">
      <div className="flex p-2 md:p-4 items-center">
        {Icon ? <Icon className="h-5 w-5 text-red-600" /> : null}
        <h3 className="ml-2 text-xs font-medium">{title}</h3>
      </div>
      <p
        className={`
          truncate  px-2 py-2 md:py-4 text-center text-lg md:text-2xl`}
      >
        {value}
      </p>
    </div>
  );
};
