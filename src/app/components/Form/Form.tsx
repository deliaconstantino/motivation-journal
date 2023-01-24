import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent } from "react";

type FormProps = {
  formType: string;
  email: string;
  password: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFormChange: () => void;
  message: string;
};

export const Form = ({
  email,
  password,
  formType,
  handleFormChange,
  message,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
}: FormProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h3" variant="h5" color="#404040">
        {formType}
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              color="secondary"
              required
              fullWidth
              id="email"
              value={email}
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ borderColor: "white" }}
              color="secondary"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              id="password"
              autoComplete="new-password"
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          {formType}
        </Button>
        <Grid
          container
          justifyContent={formType === "Sign Up" ? "flex-end" : "flex-start"}
        >
          <Grid item>
            <Button onClick={handleFormChange} sx={{ color: "#404040" }}>
              {message}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
