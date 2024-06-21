import Dashboard from "@/components/dashboard/components";
import Layout from "@/layout";
import React from "react";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
  return <Dashboard />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DashboardPage;
