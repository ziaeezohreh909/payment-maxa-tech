import { BASE_URL } from "@/constants/urls";
import axios from "axios";

export async function getAllProducts(categoryName = "") {
  const url = `${BASE_URL}${
    categoryName ? `?categoryName=${categoryName}` : ""
  }`;
  const { data } = await axios.get(url);
  return data;
}
