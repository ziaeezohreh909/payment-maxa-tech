import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { IProduct } from "../../hooks/types";

export default function TechnicalDetails({ detail }: { detail: IProduct }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom marginTop={1.5}>
        Technical Details
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", width: "720px" }}
      >
        <Table>
          <TableBody>
            <TableRow sx={{ backgroundColor: "#F9F9F9" }}>
              <TableCell sx={{ color: "#717171" }}>Description</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>
                {detail?.shortDescription}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "#717171" }}>Width</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>
                {detail?.dimensions.width}
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: "#F9F9F9" }}>
              <TableCell sx={{ color: "#717171" }}>Height</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>
                {detail?.dimensions.height}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "#717171" }}>Depth</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>
                {detail?.dimensions.depth}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
