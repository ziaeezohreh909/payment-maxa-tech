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
  const { data: oneProduct, isSuccess: isProductLoaded } = useGetProductById(
    Number(routerId)
  );
  const { data: productsByCategory } = useGetProductByCategory(
    isProductLoaded ? oneProduct?.categoryName : "",
    isProductLoaded ? Number(routerId) : 0
  );

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
