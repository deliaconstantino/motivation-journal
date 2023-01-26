import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { JSONEntry } from "../Entries/Entries";
import { SnackbarMessage } from "../Notes";

export type NewEntryFormProps = {
  handleModalClose: () => void;
  addNote: (newNote: JSONEntry) => void;
  updateSnackbar: (message: SnackbarMessage) => void;
};

export const NewEntryForm = ({
  handleModalClose,
  addNote,
  updateSnackbar,
}: NewEntryFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const noteTitle = title === "" ? "Untitled" : title;
    const data = {
      entry: {
        title: noteTitle,
        body: content,
      },
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3001/api/v1/entries", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const json = await response.json();

        addNote(json);
        handleModalClose();
        updateSnackbar(SnackbarMessage.Saved);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            id="title"
            value={title}
            label="Title"
            name="title"
            onChange={handleTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={14}
            color="secondary"
            required
            fullWidth
            name="content"
            label="Content"
            type="content"
            value={content}
            onChange={handleContentChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{ mt: 3, mb: 2, px: 4 }}
      >
        Save
      </Button>
    </Box>
  );
};
