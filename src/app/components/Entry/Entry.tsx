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
};

export function Entry({ body, updatedAt, createdAt, title }: EntryProps) {
  const updatedAtDate = new Date(updatedAt).toDateString();

  return (
    <ListItem
      divider
      secondaryAction={
        <Tooltip title="Delete note">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
    >
      <Tooltip title="Edit note">
        <IconButton aria-label="edit" sx={{ mr: 3 }}>
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
            <Typography noWrap variant="body1" color="text.primary">
              {body}
            </Typography>
            <Typography variant="body2" color="text.primary" fontStyle="italic">
              {updatedAtDate}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}
