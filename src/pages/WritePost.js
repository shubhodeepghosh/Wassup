import React, { useState } from "react";
import API from "../utils/api";
import { Container, TextField, Button, Typography } from "@mui/material";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    let filePath = "";

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const { data } = await API.post("/media", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        filePath = data.filePath;
      } catch (error) {
        alert("Error uploading file");
        return;
      }
    }

    try {
      await API.post("/journals", {
        title,
        content,
        media: filePath,
        author: localStorage.getItem("userId"),
      });
      alert("Post created!");
    } catch (error) {
      alert("Failed to create post");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Write a Post</Typography>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        margin="normal"
        multiline
        rows={4}
      />
      <input
        type="file"
        accept="image/*,video/*,audio/*"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginTop: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      >
        Publish
      </Button>
    </Container>
  );
};

export default WritePost;
