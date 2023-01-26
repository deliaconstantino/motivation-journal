import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Quote } from "./Quote";

export const Salutation = () => {
  return (
    <Box mx="auto" textAlign="center" color="white">
      <Typography
        component="h1"
        variant="h2"
        fontWeight="bold"
        sx={{
          mt: 6,
        }}
      >
        Motivation Journal
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 10,
          textAlign: "right",
          mr: 12,
        }}
        fontStyle="italic"
      >
        ...a note-taking app
      </Typography>
      <Quote />
    </Box>
  );
};
