import { BASE_URL } from "@/constants/urls";
import axios from "axios";
import { IProduct } from "../hooks/types";

function shuffleArray(array: IProduct[]): IProduct[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function getProductById(id: number): Promise<IProduct> {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
}

export async function getProductByCategory(
  category: string
): Promise<IProduct[]> {
  const res = await axios.get(
    `${BASE_URL}/products/?categoryName=${category}&_limit=7`
  );
  return shuffleArray(res.data);
}
