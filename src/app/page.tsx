"use client";

import { LoggedInContext, LoggedInContextType } from "@/utils/loggedInContext";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { Hero, Notes } from "./components";

export default function Home() {
  //TODO: add component for quest user
  const { isLoggedIn } = useContext(LoggedInContext) as LoggedInContextType;
  return (
    <>
      <Hero />
      <Container>{isLoggedIn && <Notes />}</Container>
    </>
  );
}
