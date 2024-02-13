import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getObras = async () => {
  const obrasCol = collection(db, "obras");
  const obrasSnapshot = await getDocs(obrasCol);
  const obrasList = obrasSnapshot.docs.map((doc) => doc.data());

  return obrasList;
};
