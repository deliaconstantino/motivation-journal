import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const JournalPic = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 300,
            md: 600,
          },
          height: {
            xs: 472 / 2,
            md: 472,
          },
        }}
        position="relative"
      >
        <Image src="/images/journal.png" alt="journal" fill />
      </Box>
      <Typography
        component="h1"
        variant="h5"
        textAlign="right"
        color="#404040"
        sx={{
          fontWeight: 700,
          mr: {
            md: 7,
          },
          ml: {
            xs: 7,
            md: 0,
          },
        }}
      >
        ...Get Started with Motivation Journal
      </Typography>
    </>
  );
};
