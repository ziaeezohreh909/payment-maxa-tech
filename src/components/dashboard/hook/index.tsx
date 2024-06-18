// hooks/useGetAllProductsToDashboard.ts
import { IProduct } from "@/components/home/hooks/types";
import { editData, getAllProductsToDashboard, postData } from "../services";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllProductsToDashboard = () => {
  return useQuery<IProduct[]>({
    queryKey: ["products-Dashboard"],
    queryFn: getAllProductsToDashboard,
  });
};

export const usePostData = () => {
  return useMutation({
    mutationKey: ["post-data"],
    mutationFn: postData,
  });
};

export const useEditData = () => {
  return useMutation({
    mutationKey: ["edit-data"],
    mutationFn: ({
      id,
      product,
    }: {
      id?: number | undefined;
      product: IProduct;
    }) => editData(id, product),
  });
};
