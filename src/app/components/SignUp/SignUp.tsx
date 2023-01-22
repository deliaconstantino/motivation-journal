import { useState } from "react";
import { Form } from "../Form";

export const SignUp = ({
  setIsLoggedIn,
  setShowLoginForm,
  setShowSignupForm,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormChange = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
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

    fetch("http://localhost:3001/api/v1/users", configObj)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          alert(response.errors.join(". "));
        } else {
          localStorage.setItem("token", response.jwt);
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
        }
      });
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
    />
  );
};
