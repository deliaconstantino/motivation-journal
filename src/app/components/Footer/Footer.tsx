import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          background:
            "linear-gradient( 135deg, rgba(209,88,66,1) 0%, rgba(228,251,77,0.7777485994397759) 100% )",
        }}
      >
        <Container>
          <Grid container justifyContent="space-around">
            <Grid xs={12} md={3}>
              <p>@ Delia Constantino 2023</p>
            </Grid>
            <Grid xs={12} md={3}>
              <p>Github Code</p>
            </Grid>
            <Grid xs={12} md={3}>
              <p>Quotes Sourced from:</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
