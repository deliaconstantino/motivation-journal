import { LoggedInContext } from "@/utils/loggedInContext";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { AuthForm, JournalPic } from "./Guest";
import { LemonadePic, Quote } from "./LoggedInUser";

export const Hero = ({}) => {
  //TODOs:
  // add types
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

  return (
    <header>
      <Box
        sx={{
          mt: {
            xs: 7,
            md: 8,
          },
          background:
            "linear-gradient( 135deg, rgba(209,88,66,1) 0%, rgba(228,251,77,0.7777485994397759) 100% )",
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            pt={5}
            disableEqualOverflow
          >
            <Grid xs={12} lg={8}>
              {isLoggedIn ? <Quote /> : <JournalPic />}
            </Grid>
            <Grid xs={12} lg={4}>
              {isLoggedIn ? (
                <LemonadePic />
              ) : (
                <AuthForm setIsLoggedIn={setIsLoggedIn} />
              )}
            </Grid>
          </Grid>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ verticalAlign: "middle" }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,128C274.3,117,343,75,411,85.3C480,96,549,160,617,170.7C685.7,181,754,139,823,112C891.4,85,960,75,1029,96C1097.1,117,1166,171,1234,208C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </header>
  );
};
