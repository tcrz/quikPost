import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./CreatePostButton.css";

export default function CreatePostButton(props) {
  return (
    <>
      <Button
        {...props}
        size={"mini"}
        className="addPostBtn"
        icon
        labelPosition="left"
        style={{
          background: "var(--text-color)",
          color: "var(--post-background-color)",
        }}
      >
        <Icon name="plus" />
        Create Post
        {props.children}
      </Button>

      <Button
        {...props}
        className="addPostBtn__responsive"
        icon="plus"
        size={"mini"}
        style={{
          background: "var(--text-color)",
          color: "var(--post-background-color)",
        }}
      />
    </>
  );
}
