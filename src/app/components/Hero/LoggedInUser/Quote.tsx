import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { QuoteWrapper } from "./QuoteWrapper";

export const Quote = () => {
  //TODO:
  // add swr types
  const { data, error, isLoading } = useSWR(
    "https://api.quotable.io/random?tags=inspirational",
    fetcher
  );

  if (error)
    return (
      <QuoteWrapper
        content="Adopt the pace of nature: her secret is patience."
        author="Ralph Waldo Emerson"
      />
    );

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", color: "white" }}>
        <CircularProgress color="inherit" />
      </Box>
    );

  return <QuoteWrapper content={data?.content} author={data?.author} />;
};
