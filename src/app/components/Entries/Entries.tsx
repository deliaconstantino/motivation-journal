import Box from "@mui/material/Box";
import useSWR from "swr";
import { Entry } from "../Entry";

export type JSONEntry = {
  body: string;
  created_at: Date;
  id: string;
  title: string;
  updated_at: Date;
  user_id: string;
};

export const fetcher = ([url, token]: string[]) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export const Entries = () => {
  const token = localStorage.getItem("token");

  const { data, error, isLoading } = useSWR<JSONEntry[], Error>(
    ["http://localhost:3001/api/v1/entries", token],
    fetcher
  );

  console.log("data", data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Box mb={12}>
      {data?.map(({ id, body, updated_at, created_at, title }) => {
        return (
          <Entry
            key={id}
            title={title}
            body={body}
            updatedAt={updated_at}
            createdAt={created_at}
          />
        );
      })}
    </Box>
  );
};
