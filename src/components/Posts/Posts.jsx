import React from "react";
import PostItem from "../PostItem/PostItem";
import "./Posts.css";

export default function Posts(props) {
  return (
    <div className="posts-section">
      {props.posts.map((post) => (
        <PostItem
          id={post.id}
          key={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
          deletePost={props.deletePost.bind(null, post.id)}
          editPost={props.editPost.bind(null, post.id)}
        />
      ))}
    </div>
  );
}
