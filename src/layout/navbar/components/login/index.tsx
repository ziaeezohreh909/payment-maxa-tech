import { Box, Container, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import user from "@/assets/images/navbar-icons/user.png";
import SignIn from "./signin";
import SignUp from "./signup";
import { getCookie } from "cookies-next";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInnerBoxClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <Box component="img" src={user.src} />
      </IconButton>
      {open && (
        <Box>
          <Box
            sx={{
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
            onClick={handleClose}
          >
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <Box
                onClick={handleInnerBoxClick}
                sx={{
                  backgroundColor: "white",
                  width: "600px",
                  height: "fit",
                  zIndex: 3,
                  borderRadius: "8px",
                  px: "80px",
                }}
              >
                <Container disableGutters>
                  <Box
                    sx={{
                      padding: 0,
                      marginTop: "41px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <Box
                          onClick={() => setIsSignIn(true)}
                          sx={{
                            height: "44px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: "light",
                            borderBottom: `solid ${
                              isSignIn ? "#0C68F4" : "#CBCBCB"
                            } 2px`,
                            color: isSignIn ? "#0C68F4" : "#717171",
                          }}
                        >
                          Log in
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          onClick={() => setIsSignIn(false)}
                          sx={{
                            height: "44px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "20px",
                            fontWeight: "light",
                            borderBottom: `solid ${
                              !isSignIn ? "#0C68F4" : "#CBCBCB"
                            } 2px`,
                            color: !isSignIn ? "#0C68F4" : "#717171",
                          }}
                        >
                          Create Account
                        </Box>
                      </Grid>
                    </Grid>
                    {isSignIn ? (
                      <SignIn setIsSignIn={setIsSignIn} onClose={handleClose} />
                    ) : (
                      <SignUp setIsSignIn={setIsSignIn} onClose={handleClose} />
                    )}
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
