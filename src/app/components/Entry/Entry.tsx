import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { SnackbarMessage } from "../Notes";

export type EntryProps = {
  body: string;
  updatedAt: Date;
  createdAt: Date;
  title: string;
  id: string;
  handleOpenEditEntryForm: (id: string) => void;
  deleteNoteFromState: (id: string) => void;
  updateSnackbar: (message: SnackbarMessage) => void;
};

export function Entry({
  body,
  updatedAt,
  createdAt,
  title,
  id,
  handleOpenEditEntryForm,
  deleteNoteFromState,
  updateSnackbar,
}: EntryProps) {
  const updatedAtDate = new Date(updatedAt).toDateString();

  const handleEditClick = () => {
    handleOpenEditEntryForm(id);
  };

  const handleDeleteEntry = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3001/api/v1/entries/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        deleteNoteFromState(id);
        updateSnackbar(SnackbarMessage.Deleted);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListItem
      divider
      sx={{ pl: { xs: 0, md: 2 } }}
      secondaryAction={
        <Tooltip title="Delete note">
          <IconButton aria-label="delete" onClick={handleDeleteEntry}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
    >
      <Tooltip title="Edit note">
        <IconButton
          aria-label="edit"
          sx={{ mr: { xs: 1, md: 3 } }}
          onClick={handleEditClick}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <ListItemText
        sx={{ mr: { md: 8 } }}
        primary={
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            {title}
          </Typography>
        }
        secondary={
          <>
            <Typography
              component="span"
              noWrap
              variant="body1"
              color="text.primary"
              sx={{ display: "block" }}
            >
              {body}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
              fontStyle="italic"
            >
              {updatedAtDate}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}
