import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function PostForm(props) {
  const [title, setTitle] = useState(props.title || "");
  const [content, setContent] = useState(props.content || "");

  const handleTitleInput = (event) => {
    setTitle(event.target.value);
  };

  const handleContentInput = (event) => {
    setContent(event.target.value);
  };

  const clearInputs = () => {
    setTitle("");
    setContent("");
  };

  const handleFormSubmit = () => {
    if (props.addPost) {
      const newPost = {
        id: nanoid(),
        title,
        content,
        date: new Date(),
      };
      props.addPost(newPost);
    } else if (props.editPost) {
      props.editPost(title, content);
    }
    props.setOpen(false);
    clearInputs();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Field>
        <label>Post title</label>
        <input
          value={title}
          placeholder="Food for thought"
          onChange={handleTitleInput}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Content</label>
        <textarea
          value={content}
          placeholder="This is where your detailed rant goes."
          onChange={handleContentInput}
          required
        />
      </Form.Field>
      <Button
        type="submit"
        color="green"
        disabled={title && content ? false : true}
      >
        {props.buttonLabel}
      </Button>
    </Form>
  );
}
