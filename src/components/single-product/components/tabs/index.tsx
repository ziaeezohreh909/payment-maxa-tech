import { Box, Button, Divider } from '@mui/material';
import React, { useState } from 'react'

type Props = {}

export default function Tabs({}: Props) {
    const [activeButton, setActiveButton] = useState<any>("");

  return (
    <Box display="flex" alignItems="center" gap={3}>
        <Box>
          <Button
            variant="text"
            sx={{
              fontWeight: "lighter",
              fontSize: "1.125",
              textTransform: "none",
            }}
            onClick={() =>
              setActiveButton(activeButton === "details" ? null : "details")
            }
            color={activeButton === "details" ? "primary" : "inherit"}
          >
            Technical Details
          </Button>
          {activeButton === "details" ? (
            <Divider className="bg-blue-300" />
          ) : null}
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              fontWeight: "lighter",
              fontSize: "1.125",
              textTransform: "none",
            }}
            onClick={() => {
              setActiveButton(activeButton === "similar" ? null : "similar");
            }}
            color={activeButton === "similar" ? "primary" : "inherit"}
          >
            Similar Products
          </Button>
          {activeButton === "similar" ? (
            <Divider className="bg-blue-300" />
          ) : null}
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              fontWeight: "lighter",
              fontSize: "1.125",

              textTransform: "none",
            }}
            onClick={() => {
              setActiveButton(activeButton === "comment" ? null : "comment");
            }}
            color={activeButton === "comment" ? "primary" : "inherit"}
          >
            Comments
          </Button>
          {activeButton === "comment" ? (
            <Divider className="bg-blue-300" />
          ) : null}
        </Box>
      </Box>
  )
}