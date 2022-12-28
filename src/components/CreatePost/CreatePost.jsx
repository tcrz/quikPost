import React, { useState } from "react";
import { Header, Modal } from "semantic-ui-react";
import ModalWindow from "../ModalWindow/ModalWindow";
import PostForm from "../PostForm/PostForm";

export default function CreatePost(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalWindow
        size={"small"}
        open={open}
        trigger={props.trigger}
        setOpen={setOpen}
      >
        <Header as="h3" content="Create Post" />
        <Modal.Content>
          <PostForm setOpen={setOpen} addPost={props.addPost} buttonLabel={"Post"} />
        </Modal.Content>
      </ModalWindow>
    </>
  );
}
