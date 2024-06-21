import { createTheme } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const maxaTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${inter.style.fontFamily}, Iransans, sans-serif`,
        },
      },
    },
  },
  direction: "ltr",
});
