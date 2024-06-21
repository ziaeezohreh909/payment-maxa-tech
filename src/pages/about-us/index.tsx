import AboutUs from "@/components/about-us/components";
import Layout from "@/layout";
import React from "react";
import { NextPageWithLayout } from "../_app";

const AboutUsPage: NextPageWithLayout = () => {
  return <AboutUs />;
};

AboutUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutUsPage;
