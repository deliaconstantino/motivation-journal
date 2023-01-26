import Typography from "@mui/material/Typography";

export type QuoteWrapperProps = {
  content: string;
  author: string;
};

export const QuoteWrapper = ({ content, author }: QuoteWrapperProps) => {
  return (
    <>
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
    </>
  );
};
