import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import user from "../../../assets/images/navbar-icons/user.png";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

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

                    <Typography
                      component="h1"
                      sx={{
                        fontSize: "32px",
                        fontWeight: 500,
                        marginTop: "42px",
                        marginBottom: "24px",
                      }}
                    >
                      {isSignIn ? "Log in to Maxa Tech" : "Create your account"}
                    </Typography>
                    <Box sx={{ width: "440px" }} component="form" noValidate>
                      {!isSignIn && (
                        <TextField
                          margin="none"
                          sx={{ marginBottom: "16px" }}
                          required
                          fullWidth
                          id="username"
                          label="Full Name"
                          name="username"
                          autoComplete="username"
                          autoFocus
                        />
                      )}
                      <TextField
                        margin="none"
                        sx={{ marginBottom: "16px" }}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="none"
                        sx={{ marginBottom: "12px" }}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      {isSignIn ? (
                        <Box>
                          <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                          >
                            <Link
                              sx={{ color: "#0C68F4", mr: "24px" }}
                              href="#"
                              variant="body2"
                            >
                              Forgot password?
                            </Link>
                          </Box>
                          <FormControlLabel
                            sx={{ color: "#717171" }}
                            control={
                              <Checkbox value="remember" color="primary" />
                            }
                            label="Keep me logged in"
                          />
                        </Box>
                      ) : (
                        <Box sx={{ mb: "20px", color: "#717171" }}>
                          <FormControlLabel
                            control={
                              <Checkbox value="remember" color="primary" />
                            }
                            label={
                              <Box>
                                I agree to all{" "}
                                <Link sx={{ fontWeight: "500" }}>
                                  Terms & Consitions
                                </Link>
                              </Box>
                            }
                          />
                        </Box>
                      )}

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: "0px",
                          mb: "24px",
                          height: "48px",
                          borderRadius: "8px",
                          backgroundColor: "#0C68F4",
                          fontSize: "16px",
                          fontWeight: "400",
                          textTransform: "none",
                        }}
                      >
                        {isSignIn ? "Log in" : "Create Account"}
                      </Button>
                      <Grid
                        container
                        spacing={0}
                        alignItems="center"
                        marginBottom="24px"
                      >
                        <Grid item xs={4}>
                          <Divider />
                        </Grid>
                        <Grid item xs={4}>
                          <Box
                            component="p"
                            sx={{ textAlign: "center", color: "#2D2D2D" }}
                          >
                            {`Or ${isSignIn ? "Log In" : "Sign Up"} with`}
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Divider />
                        </Grid>
                      </Grid>
                      <Stack direction="row" justifyContent="space-between">
                        <Button
                          sx={{
                            width: "208px",
                            height: "48px",
                            color: "#0C68F4",
                            border: "solid #0C68F4 2px",
                            borderRadius: "8px",
                          }}
                          startIcon={<GoogleIcon />}
                        >
                          Google
                        </Button>
                        <Button
                          sx={{
                            width: "208px",
                            height: "48px",
                            color: "#0C68F4",
                            border: "solid #0C68F4 2px",
                            borderRadius: "8px",
                          }}
                          startIcon={<FacebookIcon />}
                        >
                          Facebook
                        </Button>
                      </Stack>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "48px",
                          mt: "16px",
                          mb: "24px",
                        }}
                      >
                        <Box
                          component="p"
                          sx={{ color: "#717171", mr: "16px" }}
                        >
                          Don&apos;t have an account?
                        </Box>
                        <Box
                          onClick={() => {
                            setIsSignIn((is) => !is);
                          }}
                          sx={{ color: "#0C68F4" }}
                        >
                          {isSignIn ? "Sign Up" : "Log In"}
                        </Box>
                      </Box>
                    </Box>
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
