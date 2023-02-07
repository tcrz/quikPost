import React, { useState } from "react";
import { Header, Modal } from "semantic-ui-react";
import ModalWindow from "../ModalWindow/ModalWindow";
import PostForm from "../PostForm/PostForm";

export default function EditPost(props) {
  const [open, setOpen] = useState(false);

  return (
    //modal shorthand
    // <Modal
    //   size="small"
    //   open={open}
    //   setOpen={setOpen}
    //   onOpen={() => setOpen(true)}
    //   onClose={() => setOpen(false)}
    //   trigger={props.trigger}
    //   header="Edit Post"
    //   content={{children:<PostForm
    //       {...props}
    //       setOpen={setOpen}
    //       editPost={props.editPost}
    //       buttonLabel={"Update"}
    //     />}}
    // />

    <ModalWindow
      size={"small"}
      open={open}
      trigger={props.trigger}
      setOpen={setOpen}
    >
      <Header as="h3" content="Edit Post" />
      <Modal.Content>
        <PostForm
          {...props}
          setOpen={setOpen}
          editPost={props.editPost}
          buttonLabel={"Update"}
        />
      </Modal.Content>
    </ModalWindow>
  );
}
