import SingleProductWidget from "@/components/single-product/components";
import Layout from "@/layout";
import { NextPageWithLayout } from "@/pages/_app";
import React from "react";

const SingleProductPage: NextPageWithLayout = () => {
  return <SingleProductWidget />;
};

SingleProductPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SingleProductPage;
