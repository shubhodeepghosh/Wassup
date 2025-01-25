import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Container, Avatar, Typography, Button, Grid } from "@mui/material";
import PostCard from "../components/PostCard";

const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId");
      const userData = await API.get(`/users/${userId}`);
      const userPosts = await API.get(`/journals?author=${userId}`);
      setUser(userData.data);
      setPosts(userPosts.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Avatar src={user.profilePicture} style={{ width: 100, height: 100 }} />
      <Typography variant="h5">{user.username}</Typography>
      <Typography variant="body1">{user.bio}</Typography>
      <Button variant="contained" style={{ marginTop: "10px" }}>
        Edit Profile
      </Button>

      <Typography variant="h6" style={{ marginTop: "20px" }}>
        My Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Profile;
