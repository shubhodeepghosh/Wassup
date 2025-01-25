import React, { useState, useEffect } from "react";
import API from "../utils/api";
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AddFriends = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await API.get("/users");
      setUsers(data);
    };

    const fetchFriends = async () => {
      const { data } = await API.get(
        `/friends/${localStorage.getItem("userId")}`
      );
      setFriends(data);
    };

    fetchUsers();
    fetchFriends();
  }, []);

  const handleSendRequest = async (userId) => {
    await API.post("/friends/request", {
      requesterId: localStorage.getItem("userId"),
      recipientId: userId,
    });
    alert("Friend request sent");
  };

  return (
    <Container>
      <Typography variant="h4">Add Friends</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user._id}>
            <ListItemText primary={user.username} />
            <Button
              onClick={() => handleSendRequest(user._id)}
              disabled={friends.some((f) => f.recipient._id === user._id)}
            >
              Add Friend
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AddFriends;
