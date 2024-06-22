import { IProduct } from "@/components/home/hooks/types";
import { BASE_URL } from "@/constants/urls";
import axios from "axios";

export async function getAllProductsToDashboard() {
  try {
    const { data } = await axios.get(`${BASE_URL}/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postData(bodyRequest: IProduct) {
  try {
    const { data } = await axios.post(`${BASE_URL}/products`, bodyRequest);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function editData(id: number, product: IProduct) {
  try {
    const res = await axios.put(`${BASE_URL}/products/${id}`, product);
    return res.data;
  } catch (error) {
    console.error("Failed to update product:", error);
    throw error;
  }
}
