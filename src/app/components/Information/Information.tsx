import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

const IMAGE_SIZE_REDUCTION = 0.8;

export const Information = () => {
  return (
    <Box
      sx={{ backgroundColor: "#FBFCFE", height: "85vh", pt: { xs: 6, md: 0 } }}
    >
      <Container>
        <Typography
          component="h1"
          variant="h2"
          fontWeight="bold"
          color="#0a2540"
          sx={{
            mb: {
              xs: 4,
              md: 6,
            },
            fontSize: {
              xs: "40px",
              md: "48px",
            },
          }}
        >
          How It Works:
        </Typography>
        <Grid container mb={5} spacing={{ xs: 0, md: 8 }} disableEqualOverflow>
          <Grid xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <Paper
                elevation={6}
                sx={{ mx: "auto", color: "text.primary", p: 4, width: "100%" }}
              >
                <TextField
                  multiline
                  color="secondary"
                  required
                  name="title"
                  label="title"
                  type="title"
                  margin="normal"
                  defaultValue="Add a title!"
                />
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={6}
                  margin="normal"
                  color="secondary"
                  required
                  fullWidth
                  name="content"
                  label="Content"
                  type="content"
                  defaultValue="Add notes in the 'content' box. Motivation Journal is an easy to use note-taking app to help organize your thoughts by getting them out of your head and onto the screen. Log in or sign up to get started!"
                />
              </Paper>
            </Box>
          </Grid>
          <Grid xs={0} md={4}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
                mx: "auto",
                width: 315 * IMAGE_SIZE_REDUCTION,
                height: 386 * IMAGE_SIZE_REDUCTION,
              }}
              position="relative"
            >
              <Image src="/images/clip-art-pencil.png" alt="journal" fill />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
