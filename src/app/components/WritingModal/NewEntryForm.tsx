import { useState } from "react";
import { JSONEntry } from "../Entries/Entries";
import { SnackbarMessage } from "../Notes";
import { EntryFormBase } from "./EntryFormBase";

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
  const [error, setError] = useState(false);

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

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}api/v1/entries`,
        {
          method: "POST",
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

        addNote(json);
        handleModalClose();
        updateSnackbar(SnackbarMessage.Saved);
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
