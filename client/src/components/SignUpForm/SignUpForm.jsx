import {
  Container,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import signup from "../../services/auth.service";

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
    e.preventDefault();
    const credentials = { username, password };
    console.log(credentials);

    signup(credentials);
  };

  return (
    <Container>
<form onSubmit={handleSubmit}>
        <Grid>
          <FormControl sx={{ mt: 12 }}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              id="username"
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ mt: 12 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              id="password"
              aria-describedby="password-helper"
            />
            <FormHelperText id="password-helper">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid>
          <Button type="submit">Sign Up</Button>
        </Grid>y
</form>


    </Container>
  );
};

export default SignUpForm;
