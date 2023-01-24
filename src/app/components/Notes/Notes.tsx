import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { WritingModal } from "../WritingModal";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Notes = () => {
  return (
    <Grid item xs={12} md={6}>
      <Demo>
        <List dense>
          <WritingModal />
        </List>
      </Demo>
    </Grid>
  );
};

export default Notes;
