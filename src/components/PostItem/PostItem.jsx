import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import EditPost from "../EditPost/EditPost";
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
        {props.id !== "quikpost101" && <EditPost
          id={props.id}
          title={props.title}
          content={props.content}
          editPost={props.editPost}
          trigger={<Button icon="edit" />}
        />}
        <Modal
          size="tiny"
          actions={["No", { key: "yes", content: "Yes", negative: true, onClick:()=>props.deletePost(props.id) }]}
          trigger={ <Button icon="trash alternate" /> }
          header="Delete Post"
          content="Are you sure you would like to delete this post?"
        />
      </div>
    </div>
  );
}
