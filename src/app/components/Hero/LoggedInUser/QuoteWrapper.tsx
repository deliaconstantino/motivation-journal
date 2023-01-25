import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type QuoteWrapperProps = {
  content: string;
  author: string;
};

export const QuoteWrapper = ({ content, author }: QuoteWrapperProps) => {
  // Todo: add fade-in
  return (
    <Box mx="auto" textAlign="center" color="white">
      <Typography
        component="h1"
        variant="h2"
        color="#9c27b0"
        fontWeight="bold"
        sx={{ mt: 6 }}
      >
        Motivation Journal
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 10, textAlign: "right", mr: 12 }}
        fontStyle="italic"
      >
        ...a note-taking app
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {content}
      </Typography>
      <Typography
        variant="body2"
        fontStyle="italic"
        sx={{
          textAlign: "right",
          mr: 12,
          mb: { lg: 10 },
        }}
      >
        {" "}
        — {author}
      </Typography>
    </Box>
  );
};
