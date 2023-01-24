import { SetIsLoggedInFunctionType } from "@/utils/loggedInContext";
import { useState } from "react";
import { LogIn } from "../../LogIn";
import { SignUp } from "../../SignUp";

export type AuthFormsProps = {
  setShowLoginForm: (loggedIn: boolean) => void;
  setShowSignupForm: (loggedIn: boolean) => void;
} & SetIsLoggedInFunctionType;

export const AuthForm = ({ setIsLoggedIn }: SetIsLoggedInFunctionType) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);

  return (
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
  );
};
