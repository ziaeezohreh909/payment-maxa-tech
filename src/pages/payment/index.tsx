import { NextPageWithLayout } from "../_app";
import Layout from "@/layout";
import Payment from "@/components/payment/Payment";

const PaymentPage: NextPageWithLayout = () => {
  return <Payment />;
};

PaymentPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PaymentPage;
