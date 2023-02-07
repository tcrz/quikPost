import React from "react";
import { Button, Icon } from "semantic-ui-react";

function DownloadButton(props) {
  console.log(props);
  return (
    <Button
      size="mini"
      style={{
        background: "var(--text-color)",
        color: "var(--post-background-color)",
        fontSize:".7em"
      }}
    >
      <Icon name="download" />
      <a href={props.url} download={props.fileName}>
        Download posts data
      </a>
    </Button>
  );
}

export default DownloadButton;
