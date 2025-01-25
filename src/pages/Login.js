import React, { useState } from "react";
import API from "../utils/api";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { Container, TextField, Button, Typography } from "@mui/material";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form);
      dispatch(
        login({ userId: data.userId, username: form.email, token: data.token })
      );
      localStorage.setItem("token", data.token);
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
