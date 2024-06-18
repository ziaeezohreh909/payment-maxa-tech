import { IProduct } from "@/components/home/hooks/types";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services";

export const useGetAllProducts = (category: string | undefined) => {
  return useQuery<IProduct[]>({
    queryKey: ["products", category],
    queryFn: () => getAllProducts(category),
    refetchOnWindowFocus: false,
  });
};
