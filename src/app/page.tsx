"use client";

import { LoggedInContext, LoggedInContextType } from "@/utils/loggedInContext";
import { useContext } from "react";
import { Hero, Information, LoadingSpinner, Notes } from "./components";

export default function Home() {
  const { isLoggedIn, userCheckComplete } = useContext(
    LoggedInContext
  ) as LoggedInContextType;

  const Content = isLoggedIn ? <Notes /> : <Information />;
  return (
    <>
      <Hero />
      {userCheckComplete ? Content : <LoadingSpinner color="#d15842" />}
    </>
  );
}
