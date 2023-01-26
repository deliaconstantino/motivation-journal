import { SetIsLoggedInFunctionType } from "@/utils/loggedInContext";
import Box from "@mui/material/Box";
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
    <Box sx={{ mb: { xs: 6, md: 0 } }}>
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
    </Box>
  );
};
