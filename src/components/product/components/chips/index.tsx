import { Chip } from "@mui/material";
import React from "react";

interface ChipData {
  key: number;
  label: string;
}

function Chips() {
  function setChipData(arg0: (chips: any) => any) {
    throw new Error("Function not implemented.");
  }

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip: { key: any }) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Chip
      variant="outlined"
      size="small"
      onDelete={handleDelete}
      label="mobile"
      sx={{ borderRadius: 1 ,borderColor:"black",p:2,display:"flex",justifyContent:"space-between"}}
    />
  );
}

export default Chips;
