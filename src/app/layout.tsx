"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { Footer, Hero, NavBar } from "./components";
import "./globals.css";
import { lightTheme } from "./theme/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);

  useEffect(() => {
    //TODO: check for user profile on page load
    const checkLoginStatus = () => {
      const hasToken = localStorage.getItem("token");

      if (hasToken) {
        setIsLoggedIn(true);
        console.log("is logged in");
      } else {
        console.log("not logged in");
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body>
          <NavBar showLogOutButton={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Hero
            isLoggedIn={isLoggedIn}
            showSignupForm={showSignupForm}
            setShowLoginForm={setShowLoginForm}
            setShowSignupForm={setShowSignupForm}
            setIsLoggedIn={setIsLoggedIn}
            showLoginForm={showLoginForm}
          />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
