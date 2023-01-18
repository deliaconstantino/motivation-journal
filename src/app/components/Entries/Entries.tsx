import useSWR from "swr";
import { Entry } from "../Entry";
import { fetcher } from "../utils/fetcher";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Entries = () => {
  //TODO: add types
  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/api/v1/entries",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Entries
      </Typography>
      <Demo>
        <List dense>
          {data?.map(({ id, body, updated_at }) => {
            return <Entry key={id} body={body} updatedAt={updated_at} />;
          })}
        </List>
      </Demo>
    </Grid>
  );
};
