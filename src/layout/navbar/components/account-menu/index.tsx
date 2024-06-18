import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import profileCircle from "@/assets/images/account-menu-icons/profile-circle.png";
import bag from "@/assets/images/account-menu-icons/bag-2.png";
import heart from "@/assets/images/account-menu-icons/heart.png";
import dollarCircle from "@/assets/images/account-menu-icons/dollar-circle.png";
import logout from "@/assets/images/account-menu-icons/logout.png";
import user from "@/assets/images/navbar-icons/user.png";
import { useGetUserInfo } from "../../hooks";
import {
  removeAccessCookie,
  removeIdCookie,
  removeRoleCookie,
} from "../../services";

export default function AccountMenu() {
  const { data: userInfo } = useGetUserInfo();
  const [anchorElAccount, setAnchorElAccount] =
    React.useState<null | HTMLElement>(null);

  const handleOpenAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAccount(event.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAnchorElAccount(null);
  };

  const handleLogOut = () => {
    removeAccessCookie();
    removeIdCookie();
    removeRoleCookie();
    handleCloseAccountMenu();
  };

  return (
    <Box>
      {anchorElAccount && (
        <Box
          sx={{
            position: "fixed",
            top: "117px",
            left: 0,
            right: 0,
            bottom: 0,
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
        <MenuItem sx={{ minWidth: "288px", pb: 0 }}>
          <ListItemIcon>
            <Box component="img" src={profileCircle.src} />
          </ListItemIcon>
          <Box
            textAlign="left"
            sx={{ fontSize: "18px", fontWeight: 500, color: "blue" }}
          >
            <Typography>{userInfo?.userName}</Typography>
          </Box>
        </MenuItem>
        <MenuItem sx={{ pt: 0 }}>
          <ListItemIcon sx={{ visibility: "hidden" }}>
            <Box
              sx={{ height: "1px" }}
              component="img"
              src={profileCircle.src}
            />
          </ListItemIcon>
          <Box
            textAlign="left"
            sx={{ color: "black", fontSize: "14px", fontWeight: "light" }}
          >
            {userInfo?.email}
          </Box>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Box component="img" src={bag.src} />
          </ListItemIcon>
          <Box
            textAlign="left"
            sx={{ color: "black", fontSize: "18px", fontWeight: "light" }}
          >
            Orders
          </Box>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Box component="img" src={heart.src} />
          </ListItemIcon>
          <Box
            textAlign="left"
            sx={{ color: "black", fontSize: "18px", fontWeight: "light" }}
          >
            Wish List
          </Box>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Box component="img" src={dollarCircle.src} />
          </ListItemIcon>
          <Box
            textAlign="left"
            sx={{ color: "black", fontSize: "18px", fontWeight: "light" }}
          >
            Payments
          </Box>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Box component="img" src={logout.src} />
          </ListItemIcon>
          <Box
            textAlign="left"
            sx={{ color: "black", fontSize: "18px", fontWeight: "light" }}
          >
            Log out
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
}
