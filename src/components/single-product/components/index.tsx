import Box from "@mui/material/Box";
import React from "react";
import SingleProduct from "./single-product";
import Tabs from "./tabs";
import TechnicalDetails from "./technical";
import { useRouter } from "next/router";
import { useGetProductByCategory, useGetProductById } from "../hooks";
import SimilarProductsSlider from "./similar-products";

export default function SingleProductWidget() {
  const routerId = useRouter().query.id;
  const { data: oneProduct } = useGetProductById(Number(routerId));
  console.log(oneProduct?.categoryName);

  const { data: productsByCategory } = useGetProductByCategory(
    oneProduct?.categoryName
  );
  console.log(productsByCategory);

  return (
    <Box>
      <SingleProduct product={oneProduct!}></SingleProduct>
      <Tabs></Tabs>
      <TechnicalDetails detail={oneProduct!}></TechnicalDetails>
      <SimilarProductsSlider
        products={productsByCategory!}
      ></SimilarProductsSlider>
    </Box>
  );
}
