import useSWR from "swr";
import { Entry } from "../Entry";

import { styled } from "@mui/material/styles";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const fetcher = ([url, token]) => fetch(url, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((res) => res.json());

export const Entries = () => {
  //TODO: add types

  const token = localStorage.getItem("token");

  const { data, error, isLoading } = useSWR(
    ["http://localhost:3001/api/v1/entries", token],
    fetcher
  );

  console.log("data", data)

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      {data?.map(({ id, body, updated_at }) => {
        return <Entry key={id} body={body} updatedAt={updated_at} />;
      })}
    </>
  );
};
