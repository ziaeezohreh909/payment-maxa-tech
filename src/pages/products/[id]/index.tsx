import SingleProductWidget from "@/components/single-product/components";
import Layout from "@/layout";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

type Props = {};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 50 * 1000,
    },
  },
});

export default function SingleProductPage({}: Props) {
  return (
    <Layout>
      <SingleProductWidget />
    </Layout>
  );
}
