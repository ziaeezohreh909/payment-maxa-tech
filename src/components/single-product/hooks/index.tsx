import { getProductByCategory, getProductById } from "../services";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "./types";

export const useGetProductById = (id: number) => {
  return useQuery<IProduct>({
    queryKey: ["one-product"],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};

export const useGetProductByCategory = (category: string) => {
  return useQuery<IProduct[]>({
    queryKey: ["by-category"],
    queryFn: () => getProductByCategory(category),
    enabled: !!category,
  });
};
