import { Box } from "@mui/material";
import React from "react";

type Props = { color: string };

export default function CollorPallet({ color }: Props) {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        border: "1px solid #444444",
        backgroundColor: color,
        width: "12px",
        height: "12px",
      }}
    ></Box>
  );
}
