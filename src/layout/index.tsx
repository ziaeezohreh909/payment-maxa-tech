import React, { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Box } from "@mui/material";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Navbar />
      <main className="overflow-x-auto">{children}</main>
      <Footer />
    </Box>
  );
}
