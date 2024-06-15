import { BASE_URL } from "@/constants/urls";
import axios from "axios";
import { IProduct } from "../hooks/types";

export async function getProductById(id: number): Promise<IProduct> {
  const res = await axios.get(BASE_URL + "/" + id);
  return res.data;
}

export async function getProductByCategory(
  category: string
): Promise<IProduct[]> {
  const res = await axios.get(
    `${BASE_URL}/?categoryName=${category}&_limit=7&_sort=random`
  );
  return res.data;
}
