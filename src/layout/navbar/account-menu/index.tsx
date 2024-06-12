import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import profileCircle from "../../../assets/images/account-menu-icons/profile-circle.png";
import bag from "../../../assets/images/account-menu-icons/bag-2.png";
import heart from "../../../assets/images/account-menu-icons/heart.png";
import dollarCircle from "../../../assets/images/account-menu-icons/dollar-circle.png";
import logout from "../../../assets/images/account-menu-icons/logout.png";
import user from "../../../assets/images/navbar-icons/user.png";

const settings = [
  { icon: profileCircle, text: "Jimmy Smith" },
  { icon: profileCircle, text: "jimmy.smith1996@gmail.com" },
  { icon: bag, text: "Orders" },
  { icon: heart, text: "Wish List" },
  { icon: dollarCircle, text: "Payments" },
  { icon: logout, text: "Log out" },
];

export default function AccountMenu() {
  const [anchorElAccount, setAnchorElAccount] =
    React.useState<null | HTMLElement>(null);
  const handleOpenAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAccount(event.currentTarget);
  };
  const handleCloseAccountMenu = () => {
    setAnchorElAccount(null);
  };

  return (
    <Box>
      {anchorElAccount && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "2000px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
          onClick={handleCloseAccountMenu}
        />
      )}
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenAccountMenu}>
          <Box component="img" src={user.src} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "80px" }}
        id="menu-appbar"
        anchorEl={anchorElAccount}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElAccount)}
        onClose={handleCloseAccountMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.text} onClick={handleCloseAccountMenu}>
            <ListItemIcon>
              <Box component="img" src={setting.icon.src} />
            </ListItemIcon>
            <Box
              textAlign="left"
              sx={{ color: "black", fontSize: "18px", fontWeight: "light" }}
            >
              {setting.text}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
