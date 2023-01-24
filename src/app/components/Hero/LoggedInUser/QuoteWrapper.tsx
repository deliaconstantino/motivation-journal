import Box from "@mui/material/Box";

export const QuoteWrapper = ({ content, author }) => {
  // Todo: add fade-in
  return (
    <Box mx="auto" textAlign="center" color="white">
      <h2>{content}</h2>
      <p> -- {author}</p>
    </Box>
  );
};
