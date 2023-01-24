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

    fetch("http://localhost:3001/api/v1/login", configObj)
      .then((resp) => {
        if (!resp.ok) {
          const errorMessage = `${resp?.status}: ${resp?.statusText}`;
          throw new Error(errorMessage);
        }
        return resp.json();
      })
      .then((response) => {
        if (response.errors) {
          alert(response.errors.join(". "));
        } else {
          localStorage.setItem("token", response.jwt);
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Email or password are incorrect");
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
    />
  );
};
