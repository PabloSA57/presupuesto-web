import { db } from "./firebase";

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
} from "firebase/firestore";

let lastVisible = null;

export const getObras = async () => {
  try {
    const obrasCol = collection(db, "obras");
    const obrasSnapshot = await getDocs(obrasCol);
    const obrasList = obrasSnapshot.docs.map((doc) => doc.data());

    return obrasList;
  } catch (error) {
    console.log(error, "error");
  }
};

const ITEMS_PER_PAGE = 6;
export const fetchFilteredObra = async (last_document = null) => {
  try {
    const obrasRef = collection(db, "obras");
    const q = query(
      obrasRef,
      orderBy("nombre"),
      startAfter(last_document),

      limit(ITEMS_PER_PAGE)
    );
    const d = await getDocs(q);
    const obrasList = d.docs.map((doc) => doc.data());
    lastVisible = d.docs[d.docs.length - 1];

    return obrasList;
  } catch (error) {
    console.log(error, "error");
  }
};
