// import {
//   Avatar,
//   Box,
//   IconButton,
//   ListItemIcon,
//   Menu,
//   MenuItem,
//   Paper,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import React from "react";
import user from "../../../assets/images/navbar-icons/user.png";

// export default function Loginn() {
//   const [anchorElAccount, setAnchorElAccount] =
//     React.useState<null | HTMLElement>(null);
//   const handleOpenAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElAccount(event.currentTarget);
//   };
//   const handleCloseAccountMenu = () => {
//     setAnchorElAccount(null);
//   };

//   return (
//     <Box>
//       {anchorElAccount && (
//         <Box
//           sx={{
//             width: "1440px",
//             height: "100vh",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.4)",
//             zIndex: 1,
//           }}
//           onClick={handleCloseAccountMenu}
//         />
//       )}
//       <Tooltip title="Open settings">
//         <IconButton onClick={handleOpenAccountMenu}>
//           <Box component="img" src={user.src} />
//         </IconButton>
//       </Tooltip>
//       {/* <Paper sx={{ width: "500px", height: "250px" }}>hiiiiii</Paper> */}
//     </Box>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton } from "@mui/material";

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <Box component="img" src={user.src} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
