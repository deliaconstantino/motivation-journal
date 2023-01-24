import { useState } from "react";
import { LogIn } from "../../LogIn";
import { SignUp } from "../../SignUp";

export const AuthForm = ({ setIsLoggedIn }) => {
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
