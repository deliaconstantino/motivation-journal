import { useState } from "react";
import { Form } from "../Form";
import { AuthFormsProps } from "../Hero/Guest/AuthForm";

export const LogIn = ({
  setIsLoggedIn,
  setShowLoginForm,
  setShowSignupForm,
}: AuthFormsProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleFormChange = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user: { email, password },
      }),
    };

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}api/v1/login`, configObj)
      .then((resp) => {
        if (!resp.ok) {
          const errorMessage = `${resp?.status}: ${resp?.statusText}`;
          throw new Error(errorMessage);
        }
        return resp.json();
      })
      .then((response) => {
        if (response.errors) {
          setPasswordError(true);
          setEmailError(true);
          console.log(response.errors);
        } else {
          localStorage.setItem("token", response.jwt);
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        setPasswordError(true);
        setEmailError(true);
        console.log(error);
      });
  };

  return (
    <Form
      formType="Log In"
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleFormChange={handleFormChange}
      message="Don't have an account? Sign Up"
      emailError={emailError}
      passwordError={passwordError}
    />
  );
};
