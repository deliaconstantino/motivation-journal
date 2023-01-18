import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

export function Entry({ body, updatedAt }) {
  const updatedAtDate = new Date(updatedAt).toDateString();

  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <EditIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={body} secondary={`Updated: ${updatedAtDate}`} />
    </ListItem>
  );
}
