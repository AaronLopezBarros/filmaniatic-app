import { Container } from "@mui/material";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { FormHelperText } from "@mui/material";
import signup from "../../services/auth.service";
import { Button } from "@mui/material";

const SignUpForm = () => {
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signupForm;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...setSignupForm, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('ok')
    const credentials = { username, password }

    signup(credentials)
  }

  return (
    <Container>
      <FormControl sx={{ mt: 12 }} onSubmit={handleSubmit}>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          id="my-input-username"
          aria-describedby="my-helper-text-username"
        />
      </FormControl>
      <FormControl sx={{ mt: 12 }} onSubmit={handleSubmit}>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          id="my-input"
          aria-describedby="my-helper-text"
          id="my-input-password"
          aria-describedby="my-helper-text-password"
        />
        <FormHelperText id="my-helper-text">
          We'll never share your password.
        </FormHelperText>
      </FormControl>
    </Container>
  );
};

export default SignUpForm;
