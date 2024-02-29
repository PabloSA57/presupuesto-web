import React from "react";
import {
  FaCircleDollarToSlot,
  FaDollarSign,
  FaFileInvoiceDollar,
} from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import ButtonModal from "./btn-modal";
import { FiEdit } from "react-icons/fi";
import FormUpdatePaid from "./form-update-paid";

const PaymentStatistics = ({
  total = 0,
  charged = 0,
  id_obra,
  id_budget,
}: {
  total: number;
  charged: number;
  id_obra: number | string;
  id_budget: number;
}) => {
  const progress =
    total === 0 || charged === 0 ? 0 : ((100 * charged) / total).toFixed(2);
  const to_collect = total - charged;

  return (
    <div className="flex relative flex-wrap w-full h-full p-3 bg-white rounded-md">
      <Card title="Total" value={`$${total}`} Icon={FaDollarSign} />
      <Card title="Cobrado" value={`$${charged}`} Icon={FaFileInvoiceDollar} />
      <Card
        title="Por Cobrar"
        value={`$${to_collect}`}
        Icon={FaCircleDollarToSlot}
      />
      <Card title="Progreso" value={`%${progress}`} Icon={GiProgression} />

      <ButtonModal
        style="absolute right-0 border-none active:text-red-400 p-1 w-fit h-fit text-base md:text-lg"
        content={<FiEdit />}
      >
        <FormUpdatePaid
          id_obra={id_obra}
          id_budget={id_budget}
          initial_charged={charged}
        />
      </ButtonModal>
    </div>
  );
};

const Card = ({
  value,
  title,
  Icon,
}: {
  value: string | number;
  title: string;
  Icon: any;
}) => {
  return (
    <div className="flex flex-col w-1/2 h-1/2">
      <div className="flex p-2 md:p-4 items-center">
        <Icon className="h5 w-5 text-red-600" />
        <h3 className="ml-2 text-xs font-medium">{title}</h3>
      </div>

      <h4 className="text-center text-lg md:text-2xl font-semibold shadow-sm p-2">
        {value}
      </h4>
    </div>
  );
};
export default PaymentStatistics;
