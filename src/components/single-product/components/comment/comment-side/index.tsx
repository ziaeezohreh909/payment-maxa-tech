import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function CommentSide() {
  const [comment, setComment] = useState("");
  const [cardHeight, setCardHeight] = useState("583px");

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
    setCardHeight(event.target.value ? "auto" : "346px");
  };
  return (
    <Card
      sx={{ width: "288px", height: cardHeight, transition: "height 0.3s" }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          <Typography variant="body1" sx={{ color: "gray", fontSize: "16px" }}>
            leave your comments here for other customers
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Share your thoughts about this product "
            fullWidth
            multiline
            rows={2}
            maxRows={6}
            value={comment}
            onChange={handleCommentChange}
            InputLabelProps={{
              style: {
                whiteSpace: "normal",
                fontSize: "14px",
                fontWeight: "light",
              },
            }}
            sx={{
              "& .MuiInputBase-root": {
                height: "288px",
              },
              "& .MuiOutlinedInput-input": {
                height: "100%",
                boxSizing: "border-box",
              },
            }}
          />

          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: "48px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "light",
            }}
          >
            Comment
          </Button>
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            By feature
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "space-between",
              height: "48px",
            }}
          >
            <Stack sx={{ fontSize: "12px", width: "100%" }} direction="column">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>Battery Charge</Box>
                <Box>4.8</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>Monitor</Box>
                <Box>4.9</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>Lightness</Box>
                <Box>4.3</Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
