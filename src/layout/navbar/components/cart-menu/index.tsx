import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import bag from "@/assets/images/navbar-icons/bag.png";

export default function CartMenu() {
  const [anchorElCart, setAnchorElCart] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenCartMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCart(event.currentTarget);
  };
  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };

  return (
    <Box>
      {anchorElCart && (
        <Box
          sx={{
            // height: "100vh",
            position: "fixed",
            top: "117px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
          onClick={handleCloseCartMenu}
        />
      )}
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenCartMenu} sx={{ p: 0 }}>
          <Box component="img" src={bag.src} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "73px" }}
        id="menu-appbar"
        anchorEl={anchorElCart}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElCart)}
        onClose={handleCloseCartMenu}
      >
        {/* {settings.map((setting) => (
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
        ))} */}
        <Box sx={{ width: "512px", height: "700px" }}></Box>
      </Menu>
    </Box>
  );
}
