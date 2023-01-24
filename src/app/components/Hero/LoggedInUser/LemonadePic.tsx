import Box from "@mui/material/Box";
import Image from "next/image";

export const LemonadePic = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 325,
          lg: 400,
        },
        height: {
          xs: 325,
          lg: 400,
        },
        position: "relative",
        mx: "auto",
        mt: 3,
      }}
    >
      <Image src="images/lemonade.svg" alt="lemonade" priority fill />
    </Box>
  );
};
