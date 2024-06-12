import Home from "@/components/home/components";
import Layout from "@/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
