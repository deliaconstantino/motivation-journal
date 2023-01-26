import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const MOBILE_IMAGE_SIZE_REDUCTION = 0.5;
const DESKTOP_IMAGE_SIZE_REDUCTION = 0.8;

export const JournalPic = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 600 * MOBILE_IMAGE_SIZE_REDUCTION,
            md: 600 * DESKTOP_IMAGE_SIZE_REDUCTION,
          },
          height: {
            xs: 472 * MOBILE_IMAGE_SIZE_REDUCTION,
            md: 472 * DESKTOP_IMAGE_SIZE_REDUCTION,
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
        color="#0a2540"
        sx={{
          fontWeight: 700,
          mr: {
            md: 7,
          },
          ml: {
            xs: 7,
            md: 0,
          },
          mb: 6,
        }}
      >
        ...Get Started with Motivation Journal
      </Typography>
    </>
  );
};
