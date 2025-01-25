import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import WritePost from "./pages/WritePost";
import Profile from "./pages/Profile";
import AddFriends from "./pages/AddFriends";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/write" element={<WritePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-friends" element={<AddFriends />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
