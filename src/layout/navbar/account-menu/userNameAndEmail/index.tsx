import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function UserNameAndEmail({ data }) {
  console.log(data);
  return (
    // <Stack direction="column" justifyContent="flex-start">
    //   <Typography>{data[0]}</Typography>
    //   <Typography>{data[1]}</Typography>
    // </Stack>
    <>
      <Typography>{data[0]}</Typography>
      <Typography>{data[1]}</Typography>
    </>
  );
}
