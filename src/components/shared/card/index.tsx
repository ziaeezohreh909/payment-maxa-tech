import { Box, CardMedia, Divider, Typography } from "@mui/material";

import React from "react";
import CollorPallet from "./color-pallet";
import heart from "@/assets/images/heart.svg";
import { IProduct } from "@/components/home/hooks/types";

// type Props = {
//   title: string;
//   imageSrc: string;
//   discount?: string;
//   price: string;
//   rate: number;
//   colorPalletArray: string[];
// };

type CardPropsType = {
  cardProps: IProduct;
};

export default function Card({ cardProps }: CardPropsType) {
  return (
    <Box
      sx={{
        width: "288px",
        height: "347px",
        boxShadow: "1",
        backgroundColor: "white",
        borderRadius: "8px",
        position: "relative",
        ":hover": { boxShadow: 4 },
        " :hover .child2 ": { color: "#063A88" },
        ":hover .child1": {
          backgroundImage:
            "linear-gradient(to right, #81b4ff, #6da1f4, #598ee8, #457cdc, #3069cf, #3069cf, #3069cf, #3069cf, #457cdc, #598ee8, #6da1f4, #81b4ff)",
        },
        ":hover .child3": { visibility: "hidden" },
        ":hover .child4": { visibility: "visible" },
        ":hover .child5": { visibility: "hidden" },
        ":hover .child6": { height: "190px" },
      }}
    >
      {cardProps.discount.percent > 0 && (
        <Box
          className="child3"
          sx={{
            position: "absolute",
            top: "16px",
            paddingX: 1.5,
            paddingY: 1,
            backgroundColor: "#FDDBC9",
            color: "#F45E0C",
            borderRadius: "0 8px 8px 0",
          }}
        >
          -{cardProps.discount.percent}%
        </Box>
      )}

      {
        <Box
          component="img"
          src={heart.src}
          className="child4"
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            visibility: "hidden",
          }}
        />
      }

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            width: "256px",
            height: "190px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="child6"
            component="img"
            sx={{ marginRight: "20px" }}
            src={cardProps.thumbnailImage}
            // width="217px"
            height="161px"
          />
          <Box
            className="child5"
            display={"flex"}
            gap="8px"
            flexDirection={"column"}
          >
            {/* {cardProps.colorPalletArray?.map((item) => (
              <CollorPallet key={item} color={item} />
            ))} */}
          </Box>
        </Box>
        <Box
          className="child1"
          sx={{
            height: 2,
            borderRadius: 4,
            backgroundImage:
              "linear-gradient(to right,#d1c8cd, #b3adb1, #969295, #7a787a, #605f60, #605f60, #605f60, #605f60, #7a787a, #969295, #b3adb1, #d1c8cd)",
          }}
        ></Box>
        <Box
          className="child2"
          height={cardProps.discount.percent > 0 ? "38px" : "53px"}
        >
          <Typography
            fontSize={"16px"}
            fontWeight={"300"}
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {cardProps.name}
          </Typography>
        </Box>
        <Box
          height={cardProps.discount.percent > 0 ? 39 : 24}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Box>
            {cardProps.discount.percent > 0 ? (
              <Box fontSize={"18px"}>
                <Box
                  sx={{
                    color: "#717171",
                    textDecoration: "line-through",
                    fontSize: "14px",
                  }}
                >
                  ${cardProps.price}
                </Box>
                <Box> </Box>$
                {(
                  cardProps.price *
                  (1 - cardProps.discount.percent / 100)
                ).toFixed(2)}
              </Box>
            ) : (
              <Box fontSize={"18px"}>${cardProps.price}</Box>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1 / 2, alignItems: "center" }}>
            <Box
              component="img"
              color={"#063A88"}
              src="/Desktop/Star.svg"
              width={14}
              height={14}
            ></Box>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                sx={{ color: "#063A88" }}
              >
                {cardProps.customerRating}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
