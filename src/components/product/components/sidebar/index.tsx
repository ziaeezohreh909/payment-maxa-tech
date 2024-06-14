import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Slider,
  Switch,
} from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function valuetext(value: number) {
  return `$${value} Million`;
}

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [value, setValue] = React.useState<number[]>([12, 37]);

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded((prev) => {
        if (newExpanded) {
          return [...prev, panel];
        } else {
          return prev.filter((p) => p !== panel);
        }
      });
    };

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", pr: 5 }}>
        <Typography sx={{ fontWeight: "bold" }}>Filters</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            ":hover": { textDecoration: "underline" },
            cursor: "pointer",
          }}
          color="primary"
        >
          Clear All
        </Typography>
      </Box>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel1")}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Categorys</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="Accessories" />
            <FormControlLabel control={<Checkbox />} label="Camera" />
            <FormControlLabel control={<Checkbox />} label="Laptop" />
            <FormControlLabel control={<Checkbox />} label="Smart Phone" />
            <FormControlLabel control={<Checkbox />} label="Gaming" />
            <FormControlLabel control={<Checkbox />} label="Smart Watch" />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel3")}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                sx={{ borderRadius: 2 }}
                color="primary"
                variant="outlined"
              >
                min :
              </Button>
              <Button
                sx={{ borderRadius: 2 }}
                color="primary"
                variant="outlined"
              >
                max:
              </Button>
            </Box>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: "5px",
          backgroundColor: "white",
          borderTop: "solid 1px",
          borderColor: "#e0e0e0",
        }}
      >
        <Typography>Discount </Typography>
        <Switch {...label} />
      </Box>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel2")}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="Gray" />
            <FormControlLabel control={<Checkbox />} label="silver" />
            <FormControlLabel control={<Checkbox />} label="golden" />
            <FormControlLabel control={<Checkbox />} label="Black" />
            <FormControlLabel control={<Checkbox />} label="white" />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel4")}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography>RAM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="32 GB" />
            <FormControlLabel control={<Checkbox />} label="16  GB" />
            <FormControlLabel control={<Checkbox />} label="12  GB" />
            <FormControlLabel control={<Checkbox />} label="8  GB" />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel5")}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          <Typography>Screen Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label={`13" - 13.9"`} />
            <FormControlLabel control={<Checkbox />} label={`14" - 14.9"`} />
            <FormControlLabel control={<Checkbox />} label={`15" - 15.9"`} />
            <FormControlLabel control={<Checkbox />} label={`16" - 16.9"`} />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel6")}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel6d-content"
          id="panel6d-header"
        >
          <Typography>Processor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="Intel Core i5" />
            <FormControlLabel control={<Checkbox />} label="Intel Core i7" />
            <FormControlLabel control={<Checkbox />} label="Intel Core i9" />
            <FormControlLabel control={<Checkbox />} label="AMD Ryzen 9" />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel7")}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel7d-content"
          id="panel7d-header"
        >
          <Typography>GPU Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="NVIDA" />
            <FormControlLabel control={<Checkbox />} label="Intel" />
            <FormControlLabel control={<Checkbox />} label="AMD" />
            <FormControlLabel control={<Checkbox />} label="Apple" />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
        expanded={expanded.includes("panel8")}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderTop: "none",
            borderLeft: "none",
          }}
          aria-controls="panel8d-content"
          id="panel8d-header"
        >
          <Typography>Drive Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="512GB" />
            <FormControlLabel control={<Checkbox />} label="256GB" />
            <FormControlLabel control={<Checkbox />} label="64GB" />
            <FormControlLabel control={<Checkbox />} label="128GB" />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
