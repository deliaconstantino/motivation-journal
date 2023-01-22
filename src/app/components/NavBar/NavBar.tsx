import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const NavBar = ({ showLogOutButton, setIsLoggedIn }) => {
  // TODO: add avatar with inital next to logout button

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="fixed">
        <Toolbar
          sx={{
            backgroundColor: "#f3ecfd",
            color: "#d15842",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            <Button color="inherit" href="#">
              Motivation Journal
            </Button>
          </Typography>
          {showLogOutButton && (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
