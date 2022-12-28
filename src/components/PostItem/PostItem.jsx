import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import EditPost from "../EditPost/EditPost";
import DeletePost from "../DeletePost/DeletePost";
import "./PostItem.css";

export default function PostItem(props) {
  const day = props.date.toLocaleString("en-US", { dateStyle: "full" });
  const time = props.date.toLocaleString("en-US", { timeStyle: "short" });
  const postDetails = {
    id: props.id,
    title: props.title,
    content: props.content,
    day,
    time,
  };

  return (
    <div className="post-container">
      <Link to={`/post/${props.id}`} state={postDetails}>
        <div className="post">
          <p className="date">
            {day} <span className="big-dot">&#183;</span> {time}
          </p>
          <h2>{props.title}</h2>
          <p className="summary">{props.content}</p>
        </div>
      </Link>
      <div className="post-buttons">
        <EditPost
          id={props.id}
          title={props.title}
          content={props.content}
          editPost={props.editPost}
          trigger={<Button icon="edit" />}
        />
        <DeletePost
          id={props.id}
          deletePost={props.deletePost}
          trigger={<Button icon="trash alternate" />}
        />
      </div>
    </div>
  );
}
