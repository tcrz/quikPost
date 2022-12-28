import React, { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function PostDeletionModal(props) {
  const [open, setOpen] = useState(false);
  const confirmDeletion = () => {
    props.deletePost();
    setOpen(false);
  };
  return (
    <ModalWindow
      size={"tiny"}
      trigger={props.trigger}
      setOpen={setOpen}
      open={open}
    >
      <Header as="h3" content="Delete Post" />
      <Modal.Content>
        <p>Are you sure you would like to delete this post?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="red" onClick={confirmDeletion}>
          <Icon name="check" /> Yes
        </Button>
      </Modal.Actions>
    </ModalWindow>
  );
}
