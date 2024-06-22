import { Box } from "@mui/material";
import React, { ReactNode, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

type Props = { children: ReactNode };

export default function CustomTabs({ children }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab
            value={0}
            sx={{ textTransform: "none" }}
            label="Technical Detalis"
          ></Tab>
          <Tab
            value={1}
            sx={{ textTransform: "none" }}
            label="Similar products"
          ></Tab>
          <Tab value={2} sx={{ textTransform: "none" }} label="Comments"></Tab>
        </Tabs>
        <Box height={12}></Box>
        <Box>{children[selectedTab]!}</Box>
      </Box>
    </Box>
  );
}
