import Box from "@mui/material/Box";
import { useEffect } from "react";
import useSWR from "swr";
import { Entry } from "../Entry";
import { LoadingSpinner } from "../LoadingSpinner";
import { SnackbarMessage } from "../Notes";

export type JSONEntry = {
  body: string;
  created_at: Date;
  id: string;
  title: string;
  updated_at: Date;
  user_id: string;
  deleteNoteFromState: (id: string) => void;
};

export const fetcher = ([url, token]: string[]) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });

export type EntriesProps = {
  notes: JSONEntry[] | null;
  setNotes: (notes: JSONEntry[] | null) => void;
  handleOpenEditEntryForm: (id: string) => void;
  deleteNoteFromState: (id: string) => void;
  updateSnackbar: (message: SnackbarMessage) => void;
};

export const Entries = ({
  notes,
  setNotes,
  handleOpenEditEntryForm,
  deleteNoteFromState,
  updateSnackbar,
}: EntriesProps) => {
  const token = localStorage.getItem("token");

  const { data, error, isLoading } = useSWR<JSONEntry[], Error>(
    [`${process.env.NEXT_PUBLIC_SERVER_URL}api/v1/entries`, token],
    fetcher
  );

  useEffect(() => {
    if (data) setNotes(data);
  }, [data, setNotes]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingSpinner color="#d15842" />;

  return (
    <Box mb={12}>
      {notes?.map(({ id, body, updated_at, created_at, title }) => {
        return (
          <Entry
            key={id}
            id={id}
            title={title}
            body={body}
            updatedAt={updated_at}
            createdAt={created_at}
            handleOpenEditEntryForm={handleOpenEditEntryForm}
            deleteNoteFromState={deleteNoteFromState}
            updateSnackbar={updateSnackbar}
          />
        );
      })}
    </Box>
  );
};
