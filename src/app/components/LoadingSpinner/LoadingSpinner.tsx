"use client";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingSpinner = ({color = "white"}) => {
  return (
    <Box sx={{ display: "flex", minHeight: "60vh", justifyContent: "center", color: color }}>
      <CircularProgress color="inherit" />
    </Box>
  );
};
