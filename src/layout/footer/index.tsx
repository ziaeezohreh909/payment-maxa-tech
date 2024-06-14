import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Link from "next/link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Facebook from "@/assets/images/footer-icons/Facebook.svg";
import Twitter from "@/assets/images/footer-icons/Twitter.svg";
import Instagram from "@/assets/images/footer-icons/Instagram.svg";
import Youtube from "@/assets/images/footer-icons/Youtube.svg";
import OnlineChat from "@/assets/images/footer-icons/online chat.svg";
import BackToUp from "@/assets/images/footer-icons/back to up bottun.svg";
import PayPal from "@/assets/images/footer-icons/paypal.svg";
import AmericanExpress from "@/assets/images/footer-icons/american express.svg";
import Visa from "@/assets/images/footer-icons/visa.svg";
import MasterCard from "@/assets/images/footer-icons/master card.svg";

export default function Footer() {
  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(90deg, #0A1128 0%, #001F54 100%)",
          paddingTop: "40px",
          display: "flex",
          flexDirection: "column",
        }}
        gap={1}
      >
        <Box sx={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
          <Box px="108px">
            <Box
              sx={{
                color: "#CBCBCB",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                fontWeight: "lighter",
              }}
            >
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Company
                </Typography>
                <Link href="#">About us</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Returns</Link>
                <Link href="#">Order Status</Link>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Info
                </Typography>
                <Link href="#">How it works?</Link>
                <Link href="#">Our Promises</Link>
                <Link href="#">FAQ</Link>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography fontWeight="300">
                  <LocationOnOutlinedIcon />
                  123 Main Street, Tehran, Iran
                </Typography>
                <Typography fontWeight="300">
                  <CallOutlinedIcon />
                  <span> +98 (912) 123-4567</span>
                </Typography>
                <Typography fontWeight="300">
                  <EmailOutlinedIcon />
                  <span> MaxaTechSupport@gmail.com</span>
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Sign Up for News and Updates
                </Typography>
                <OutlinedInput
                  id="email"
                  startAdornment={<PersonOutlineOutlinedIcon />}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <KeyboardArrowRightIcon sx={{ color: "#CBCBCB" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                  type="email"
                  placeholder=" E-mail Address"
                  sx={{
                    borderRadius: 3,
                    color: "#CBCBCB",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#CBCBCB",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(59 130 246)",
                    },
                    input: {
                      color: "#CBCBCB",
                      "&::placeholder": {
                        color: "#CBCBCB",
                        opacity: 1,
                      },
                    },
                  }}
                />
                <Box display="flex" gap={2}>
                  <Link href="#">
                    <Box component="img" src={Facebook.src} />
                  </Link>
                  <Link href="#">
                    <Box component="img" src={Twitter.src} />
                  </Link>
                  <Link href="#">
                    <Box component="img" src={Instagram.src} />
                  </Link>
                  <Link href="#">
                    <Box component="img" src={Youtube.src} />
                  </Link>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Box component="img" src={OnlineChat.src} />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end">
              <Box component="img" src={BackToUp.src} />
            </Box>
            <Box display="flex" gap="2px">
              <Box component="img" src={PayPal.src} />
              <Box component="img" src={AmericanExpress.src} />
              <Box component="img" src={Visa.src} />
              <Box component="img" src={MasterCard.src} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#021736" }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            px: "108px",
            fontWeight: "lighter",
            paddingY: "5px",
          }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="#CBCBCB"
        >
          <Typography
            fontSize="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="6px"
          >
            <span style={{ fontSize: "2rem" }}>©</span>
            {new Date().getFullYear()} Maxa Tech.
          </Typography>
          <Box display="flex" gap={6}>
            <Link href="#">Cookie Settings</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Conditions </Link>
            <Link href="#">Imprint</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
