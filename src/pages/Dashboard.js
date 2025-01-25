import React, { useState } from "react";
import API from "../utils/api";
import { Container, TextField, Button, Typography } from "@mui/material";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registration successful! Please login.");
    } catch (err) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
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
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
