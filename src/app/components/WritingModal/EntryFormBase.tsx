import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export type EntryFormBaseProps = {
  title: string;
  content: string;
  error: boolean;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
export const EntryFormBase = ({
  title,
  handleTitleChange,
  content,
  handleContentChange,
  handleSubmit,
  error,
}: EntryFormBaseProps) => {
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
            error={error}
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
            helperText={error ? "Content cannot be blank" : null}
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
