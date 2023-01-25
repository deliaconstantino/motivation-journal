import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Entries } from "../Entries";
import { WritingModal } from "../WritingModal";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Notes = () => {
  return (
    <>
      <Typography
      color="text.primary"
      variant="h2" sx={{ mb: 4 }} fontWeight="bold" id="notes">
        Notes
      </Typography>
      <Grid item xs={12} md={6}>
        <Demo>
          <List dense>
            <WritingModal />
            <Entries />
          </List>
        </Demo>
      </Grid>
    </>
  );
};

export default Notes;
