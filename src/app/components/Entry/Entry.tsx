import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

export type EntryProps = {
  body: string;
  updatedAt: Date;
  createdAt: Date;
  title: string;
  id: string;
  handleOpenEditEntryForm: (id: string) => void;
  deleteNoteFromState:  (id: string) => void;
};

export function Entry({
  body,
  updatedAt,
  createdAt,
  title,
  id,
  handleOpenEditEntryForm,
  deleteNoteFromState,
  setShowSnackbar
}: EntryProps) {
  const updatedAtDate = new Date(updatedAt).toDateString();

  const handleEditClick = () => {
    handleOpenEditEntryForm(id);
  };

  const handleDeleteEntry = async () => {
    console.log("hit delete. ID:", id)
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
          console.log("response", response)
          deleteNoteFromState(id);
          console.log("deleted!")
          setShowSnackbar(true)
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <ListItem
      divider
      secondaryAction={
        <Tooltip title="Delete note">
          <IconButton aria-label="delete" onClick={handleDeleteEntry}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
    >
      <Tooltip title="Edit note">
        <IconButton aria-label="edit" sx={{ mr: 3 }} onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <ListItemText
        sx={{ mr: 8 }}
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
