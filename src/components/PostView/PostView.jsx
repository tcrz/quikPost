import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import "./PostView.css";

export default function PostView() {
  const location = useLocation();
  const postDetails = location.state;

  if (!postDetails) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="posts-section post-view">
      <div className="post-title">
        <p className="date">
          {postDetails.day}&nbsp;<span className="big-dot">&#183;</span>&nbsp;
          {postDetails.time}
        </p>
        <h1>{postDetails.title}</h1>
      </div>
      <p className="content" style={{ whiteSpace: "pre-line" }}>
        {postDetails.content}
      </p>
    </div>
  );
}
