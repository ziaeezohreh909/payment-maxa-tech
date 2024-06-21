import FAQ from "@/components/FAQ/components";
import Layout from "@/layout";
import { NextPageWithLayout } from "../_app";

const FAQPage: NextPageWithLayout = () => {
  return <FAQ />;
};

FAQPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FAQPage;
