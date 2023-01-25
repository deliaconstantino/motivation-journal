import Box from "@mui/material/Box";

export type QuoteWrapperProps = {
  content: string;
  author: string;
};

export const QuoteWrapper = ({ content, author }: QuoteWrapperProps) => {
  // Todo: add fade-in
  return (
    <Box mx="auto" textAlign="center" color="white">
      <h2>{content}</h2>
      <p> — {author}</p>
    </Box>
  );
};
