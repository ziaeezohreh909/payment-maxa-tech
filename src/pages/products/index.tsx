import Products from "@/components/product/components";
import Layout from "@/layout";
import React from "react";
import { NextPageWithLayout } from "../_app";

const ProductsPage: NextPageWithLayout = () => {
  return <Products />;
};

ProductsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProductsPage;
