import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const LogIn = ({
  setIsLoggedIn,
  setShowLoginForm,
  setShowSignupForm,
}) => {
  //TODO: add types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormChange = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  const handleNameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user: { email, password },
      }),
    };

    fetch("http://localhost:3001/api/v1/login", configObj)
      .then((resp) => {
        if (!resp.ok) {
          const errorMessage = `${resp?.status}: ${resp?.statusText}`;
          throw new Error(errorMessage);
        }
        return resp.json();
      })
      .then((response) => {
        if (response.errors) {
          alert(response.errors.join(". "));
        } else {
          console.log("response ok", response);
          localStorage.setItem("token", response.jwt);
          console.log("logged in: response.jwt", response.jwt);
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Email or password are incorrect");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleNameChange}
            value={email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={handleFormChange}>
                Don&#39;t have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
