import { useQuery } from "@tanstack/react-query";
import {
  getBestSellers,
  getNewProducts,
  getProductsWithBiggestDiscount,
} from "../services";
import { IProduct } from "./types";

export const useGetBestSellers = () => {
  return useQuery<IProduct[]>({
    queryKey: ["best-sellers"],
    queryFn: () => getBestSellers(),
  });
};

export const useGetProductsWithBiggestDiscount = () => {
  return useQuery<IProduct[]>({
    queryKey: ["biggest-discounts"],
    queryFn: () => getProductsWithBiggestDiscount(),
  });
};

export const useGetNewProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["new-products"],
    queryFn: () => getNewProducts(),
    refetchOnWindowFocus: false,
  });
};
