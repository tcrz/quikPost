import React from "react";
import emptyboximg from "../../assets/emptybox.png";
import "./EmptyPosts.css"

function EmptyPosts() {
  return (
    <div className="empty-section">
      <img src={emptyboximg} alt="empty box image" />
      <p>
        Looks like you have not posted anything.
        <br /> Add a new post? :)
      </p>
    </div>
  );
}

export default EmptyPosts;
