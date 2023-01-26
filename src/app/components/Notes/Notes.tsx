import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Entries } from "../Entries";
import { JSONEntry } from "../Entries/Entries";
import { WritingModal } from "../WritingModal";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Notes = () => {
  const [notes, setNotes] = useState<JSONEntry[] | null>(null);
  const [isNew, setIsNew] = useState(true);
  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const [currentNote, setCurrentNote] = useState({
    title: "",
    body: "",
    id: "",
  });

  const updateNotes = (noteToUpdate: JSONEntry) => {
    const newNotes =
      notes?.map((note) => {
        if (note.id !== noteToUpdate.id) return note;

        return noteToUpdate;
      }) || null;

    setNotes(newNotes);
  };

  const deleteNoteFromState = (id: string) => {
    const newNotes = notes?.filter((note) => note.id !== id) || null;

    setNotes(newNotes);
  };

  const addNote = (newNote: JSONEntry) => {
    setNotes((prevNotes) => prevNotes?.concat([newNote]) || null);
  };

  const handleOpenEditEntryForm = (id: string) => {
    setCurrentNote(
      (prevNote) => notes?.find((note) => note.id === id) || prevNote
    );
    setOpen(true);
    setIsNew(false);
  };

  const handleIsNew = () => setIsNew(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setIsNew(true);
    setOpen(false);
  };

  return (
    <Box sx={{ pt: { xs: 6, md: 0 } }}>
      <Container>
        <Typography
          color="text.primary"
          variant="h2"
          sx={{ mb: 4 }}
          fontWeight="bold"
          id="notes"
        >
          Notes
        </Typography>
        <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={() => setShowSnackbar(false)}
        >
          <Alert severity="success" sx={{ mb: 4 }}>
            Note Deleted!
          </Alert>
        </Snackbar>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense>
              <WritingModal
                isNew={isNew}
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                currentNote={currentNote}
                updateNotes={updateNotes}
                addNote={addNote}
                handleIsNew={handleIsNew}
              />
              <Entries
                notes={notes}
                setNotes={setNotes}
                handleOpenEditEntryForm={handleOpenEditEntryForm}
                deleteNoteFromState={deleteNoteFromState}
                setShowSnackbar={setShowSnackbar}
              />
            </List>
          </Demo>
        </Grid>
      </Container>
    </Box>
  );
};

export default Notes;
