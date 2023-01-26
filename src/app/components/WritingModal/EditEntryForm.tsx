import { useState } from "react";
import { JSONEntry } from "../Entries/Entries";
import { SnackbarMessage } from "../Notes";
import { EntryFormBase } from "./EntryFormBase";

export type EditEntryFormProps = {
  handleModalClose: () => void;
  currentNote: {
    title: string;
    body: string;
    id: string;
  };
  updateNotes: (updatedNote: JSONEntry) => void;
  handleIsNew: () => void;
  updateSnackbar: (message: SnackbarMessage) => void;
};

export const EditEntryForm = ({
  handleModalClose,
  currentNote,
  updateNotes,
  handleIsNew,
  updateSnackbar,
}: EditEntryFormProps) => {
  const [title, setTitle] = useState(currentNote.title);
  const [content, setContent] = useState(currentNote.body);
  const [error, setError] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      entry: {
        title: title,
        body: content,
      },
    };
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3001/api/v1/entries/${currentNote?.id}`,
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
        updateSnackbar(SnackbarMessage.Updated);
      } else {
        const json = await response.json();

        console.log(json.errors.join(". "));
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EntryFormBase
      title={title}
      handleTitleChange={handleTitleChange}
      content={content}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};
