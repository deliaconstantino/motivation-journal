import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundImage: "linear-gradient(125deg, #f6f9fc, #f3ecfd)",
          py: 3,
          display: "flex",
        }}
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              alignItems: {
                md: "center",
              },
              color: "#0a2540",
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Box>
              <Typography variant="body1">© Delia Constantino 2023</Typography>
            </Box>
            <Box mb={{ xs: 2, md: 0 }}>
              <Typography variant="body1">
                <a
                  href="https://github.com/deliaconstantino/motivation-journal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    component="span"
                    sx={{
                      position: "relative",
                      top: 5,
                    }}
                  >
                    <Image
                      src="/images/github-mark.svg"
                      height={20}
                      width={20}
                      alt="GitHub Icon"
                    />
                  </Box>
                  <Box component="span" ml={1}>
                    Source Code
                  </Box>
                </a>
              </Typography>
              <Typography>
                <a
                  href="https://github.com/lukePeavey/quotable"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inspirational Quote API
                </a>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
