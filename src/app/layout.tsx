"use client";
import { LoggedInContext } from "@/utils/loggedInContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { Footer, NavBar } from "./components";
import "./globals.css";
import { lightTheme } from "./theme/themes";

export type SetIsLoggedInType = {
  setIsLoggedIn: (loggedIn: boolean) => void;
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCheckComplete, setUserCheckComplete] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}api/v1/profile`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          setIsLoggedIn(true);
        }

        setUserCheckComplete(true);
      } catch (error) {
        console.log(error);
        setUserCheckComplete(true);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Motivation Journal</title>
        <meta name="description" content="A note-taking app" />
        <link rel="icon" href="/journal-icon.ico" />
      </head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body>
          <LoggedInContext.Provider
            value={{
              isLoggedIn,
              setIsLoggedIn,
              userCheckComplete,
            }}
          >
            <NavBar
              showLogOutButton={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
            <main>{children}</main>
            <Footer />
          </LoggedInContext.Provider>
        </body>
      </ThemeProvider>
    </html>
  );
}
