import AddIcon from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { JSONEntry } from "../Entries/Entries";
import { EditEntryForm } from "./EditEntryForm";
import { NewEntryForm } from "./NewEntryForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  minHeight: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export type WritingModalProps = {
  isNew: boolean;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  currentNote: {
    title: string;
    body: string;
    id: string;
  };
  updateNotes: (updatedNote: JSONEntry) => void;
  addNote: (newNote: JSONEntry) => void;
  handleIsNew: () => void;
};

export const WritingModal = ({
  currentNote,
  isNew,
  open,
  handleOpen,
  handleClose,
  updateNotes,
  addNote,
  handleIsNew,
}: WritingModalProps) => {
  const [showSuccessfulSaveAlert, setShowSuccessfulSaveAlert] = useState(false);

  return (
    <Box>
      <Snackbar
        open={showSuccessfulSaveAlert}
        autoHideDuration={6000}
        onClose={() => setShowSuccessfulSaveAlert(false)}
      >
        <Alert severity="success" sx={{ mb: 4 }}>
          Note saved!
        </Alert>
      </Snackbar>
      <ListItem divider>
        <Tooltip title="New note">
          <IconButton
            aria-label="create"
            onClick={handleOpen}
            sx={{ mb: 2, mr: 3 }}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <ListItemText
          primary={
            <Typography variant="body1" color="text.primary" fontStyle="italic">
              write a new note...
            </Typography>
          }
        />
      </ListItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            {isNew && (
              <NewEntryForm
                setShowSuccessfulSaveAlert={setShowSuccessfulSaveAlert}
                handleModalClose={handleClose}
                addNote={addNote}
              />
            )}
            {!isNew && (
              <EditEntryForm
                setShowSuccessfulSaveAlert={setShowSuccessfulSaveAlert}
                handleModalClose={handleClose}
                currentNote={currentNote}
                updateNotes={updateNotes}
                handleIsNew={handleIsNew}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
