import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import API from "../utils/api";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await API.get(
          `/notifications/${localStorage.getItem("userId")}`
        );
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: "10px", maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <ListItem key={notification._id}>
              <ListItemText
                primary={notification.message}
                secondary={new Date(notification.createdAt).toLocaleString()}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No notifications available
          </Typography>
        )}
      </List>
    </Paper>
  );
};

export default Notifications;
