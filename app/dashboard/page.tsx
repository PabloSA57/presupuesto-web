import React, { Suspense } from "react";
import { getObras } from "@/app/libs/firebase/firestore";

export const revalidate = 0;

const Page = async () => {
  //const data = await getObras();

  //console.log(data, "data");
  return (
    <div>
      <h2>Hola desde dashboard</h2>
    </div>
  );
};

export default Page;
