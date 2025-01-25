import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const PostCard = ({ post }) => {
  return (
    <Card>
      {post.media && (
        <CardMedia
          component="img"
          height="140"
          image={post.media}
          alt="Post Image"
        />
      )}
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content.substring(0, 100)}...
        </Typography>
        <Typography variant="caption" color="text.secondary">
          By {post.author?.username || "Unknown"} on{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </Typography>
        <Button size="small" color="primary" style={{ marginTop: "10px" }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
