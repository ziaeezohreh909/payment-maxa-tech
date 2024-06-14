import { BASE_URL } from "@/constants/urls";
import axios from "axios";

export async function getAllProducts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}
