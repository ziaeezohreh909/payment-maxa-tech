import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import FAQImage from "../../assets/images/FAQ-image/FAQ.svg";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Router from "next/router";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  Router.push("/");
}

export default function FAQ() {
  const [expandedPanels, setExpandedPanels] = useState<{
    [key: string]: boolean;
  }>({
    panel1: false,
    panel2: false,
    panel3: false,
    panel4: false,
    panel5: false,
  });

  const breadcrumbs = [
    <Link
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      className="text-lg font-light text-[#717171]"
    >
      Home
    </Link>,
    <Box key="2">
      <Typography color="primary" fontSize="1.125rem" fontWeight="lighter">
        FAQs
      </Typography>
      <Divider className="bg-blue-300" />
    </Box>,
  ];

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanels((prev) => ({ ...prev, [panel]: isExpanded }));
    };

  return (
    <Box marginBottom={6} marginTop={3}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="large" sx={{ color: "#717171" }} />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box component="img" src={FAQImage.src} paddingY={5} />
        <Box display="flex" gap={5}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography fontSize="20px">Table of Contents</Typography>
            <Typography fontSize="1rem" fontWeight="lighter" color="primary">
              General
            </Typography>
            <Typography fontSize="1rem" fontWeight="lighter">
              Trusts & Safety
            </Typography>
            <Typography fontSize="1rem" fontWeight="lighter">
              Services
            </Typography>
            <Typography fontSize="1rem" fontWeight="lighter">
              Billing
            </Typography>
          </Box>
          <Box width="808px">
            {["panel1", "panel2", "panel3", "panel4", "panel5"].map((panel) => (
              <Accordion
                key={panel}
                expanded={expandedPanels[panel]}
                onChange={handleChange(panel)}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: expandedPanels[panel] ? "primary.main" : "black",
                      }}
                    />
                  }
                  aria-controls={`${panel}-content`}
                  id={`${panel}-header`}
                  sx={{
                    color: expandedPanels[panel] ? "primary.main" : "black",
                  }}
                >
                  <Typography fontSize="1.5rem" fontWeight="medium">
                    {panel === "panel1" &&
                      "Can I purchase products from Tech Heim using installment payments?"}
                    {panel === "panel2" &&
                      "How can I engage with the magazine content on Tech Heim?"}
                    {panel === "panel3" &&
                      "Does Tech Heim offer a warranty on its products?"}
                    {panel === "panel4" &&
                      "Is Tech Heim a secure platform for online shopping?"}
                    {panel === "panel5" &&
                      "How can I get assistance with my purchase or any other inquiries?"}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography fontSize="1.25rem" fontWeight="light">
                    {panel === "panel1" &&
                      "Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget."}
                    {panel === "panel2" &&
                      "You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with fellow tech enthusiasts in the community."}
                    {panel === "panel3" &&
                      "Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information."}
                    {panel === "panel4" &&
                      "Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information."}
                    {panel === "panel5" &&
                      "If you need assistance with your purchase or have any questions, our dedicated customer support team is here to help. You can reach out to us through the contact page on our website, and we'll be happy to assist you promptly."}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
