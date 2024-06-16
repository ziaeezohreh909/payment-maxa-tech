import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import search from "@/assets/images/navbar-icons/search-normal.png";

export default function SearchPopup() {
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
    <React.Fragment>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenCartMenu} sx={{ p: 0 }}>
          <Box component="img" src={search.src} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "75px" }}
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
      </Menu>
    </React.Fragment>
  );
}
