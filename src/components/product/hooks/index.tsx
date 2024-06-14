import { IProduct } from "@/components/home/hooks/types";
import { useQuery } from "react-query";
import { getAllProducts } from "../services";

export const useGetAllProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts(),
  });
};
