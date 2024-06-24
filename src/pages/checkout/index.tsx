import Checkout from "@/components/checkout/components/Checkout";
import { NextPageWithLayout } from "../_app";
import Layout from "@/layout";

const CheckoutPage: NextPageWithLayout = () => {
  return <Checkout/>;
};

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CheckoutPage;