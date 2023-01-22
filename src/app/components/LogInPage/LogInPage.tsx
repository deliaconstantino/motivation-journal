import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp";

export const LogInPage = ({
  isLoggedIn,
  showSignupForm,
  setShowLoginForm,
  setShowSignupForm,
  setIsLoggedIn,
  showLoginForm,
}) => {
  //TODOs:
  // add types
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
              <Box
                sx={{
                  width: {
                    xs: 300,
                    md: 600,
                  },
                  height: {
                    xs: 472 / 2,
                    md: 472,
                  },
                }}
                position="relative"
              >
                <Image src="/images/journal.png" alt="journal" fill />
              </Box>
              <Typography
                component="h1"
                variant="h5"
                textAlign="right"
                color="#404040"
                sx={{
                  fontWeight: 700,
                  mr: {
                    md: 7,
                  },
                  ml: { xs: 7, md: 0 },
                }}
              >
                ...Get Started with Motivation Journal
              </Typography>
            </Grid>
            <Grid xs={12} lg={4}>
              <>
                {showSignupForm && (
                  <SignUp
                    setShowLoginForm={setShowLoginForm}
                    setShowSignupForm={setShowSignupForm}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
                {showLoginForm && (
                  <LogIn
                    setShowSignupForm={setShowSignupForm}
                    setShowLoginForm={setShowLoginForm}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              </>
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
