import { useState } from "react";
import { Form } from "../Form";
import { AuthFormsProps } from "../Hero/Guest/AuthForm";

export const SignUp = ({
  setIsLoggedIn,
  setShowLoginForm,
  setShowSignupForm,
}: AuthFormsProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

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

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}api/v1/users`, configObj)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          response.errors.forEach((error: string) => {
            error.includes("Password")
              ? setPasswordError(true)
              : setPasswordError(false);
            error.includes("Email")
              ? setEmailError(true)
              : setEmailError(false);
          });
        } else {
          localStorage.setItem("token", response.jwt);
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
        }
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Form
      formType="Sign Up"
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleFormChange={handleFormChange}
      message="Already have an account? Log In"
      emailError={emailError}
      passwordError={passwordError}
      isSubmitting={isSubmitting}
    />
  );
};
