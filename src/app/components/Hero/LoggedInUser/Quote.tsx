import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import useSWR from "swr";
import { QuoteWrapper } from "./QuoteWrapper";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Quote = () => {
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
