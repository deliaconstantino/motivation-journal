"use client";

import { LoggedInContext, LoggedInContextType } from "@/utils/loggedInContext";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { Entries, Hero, Notes } from "./components";

export default function Home() {
  const { isLoggedIn } = useContext(LoggedInContext) as LoggedInContextType;
  return (
    <>
      <Hero />
      <Container>
        <h1>Notes</h1>
        <Notes />
        {isLoggedIn && <Entries />}
      </Container>
    </>
  );
}
