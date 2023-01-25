import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { JSONEntry } from "../Entries/Entries";

export type EditEntryFormProps = {
  setShowSuccessfulSaveAlert: (showSuccessfulSaveAlert: boolean) => void;
  handleModalClose: () => void;
  currentNote: {
    title: string;
    body: string;
    id: string;
  };
  updateNotes: (updatedNote: JSONEntry) => void;
  handleIsNew: () => void;
};

export const EditEntryForm = ({
  setShowSuccessfulSaveAlert,
  handleModalClose,
  currentNote,
  updateNotes,
  handleIsNew,
}: EditEntryFormProps) => {
  const [updatedTitle, setUpdatedTitle] = useState(currentNote?.title);
  const [updatedContent, setUpdatedContent] = useState(currentNote?.body);

  const title = currentNote?.title;
  const content = currentNote?.body;

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      entry: {
        title: updatedTitle,
        body: updatedContent,
      },
    };
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3001/api/v1/entries/${currentNote.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const json = await response.json();

        updateNotes(json);
        handleIsNew();
        handleModalClose();
        setShowSuccessfulSaveAlert(true);
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
            defaultValue={title}
            value={updatedTitle}
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
            value={updatedContent}
            defaultValue={content}
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
