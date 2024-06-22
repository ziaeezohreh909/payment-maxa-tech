import { getCommentData, getProductByCategory, getProductById } from "../services";
import { useQuery } from "@tanstack/react-query";
import { IProduct, commentType } from "./types";

export const useGetProductById = (id: number) => {
  return useQuery<IProduct>({
    queryKey: ["one-product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductByCategory = (category: string, id: number) => {
  return useQuery<IProduct[]>({
    queryKey: ["by-category", category, id],
    queryFn: () => getProductByCategory(category),
    enabled: !!category,
    refetchOnWindowFocus: false,
  });
};

export const useGetCommentData = () => {
  return useQuery<commentType[]>({
    queryKey: ["comments"],
    queryFn: getCommentData,
  });
};
