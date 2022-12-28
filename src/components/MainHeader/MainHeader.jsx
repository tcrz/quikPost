import React from "react";
import logo from "../../assets/quikpost.png";
import "./MainHeader.css";
import CreatePostButton from "../CreatePost/CreatePostButton";
import CreatePost from "../CreatePost/CreatePost";
import { Link, useLocation } from "react-router-dom";

export default function MainHeader(props) {
  const location = useLocation();
  return (
    <header>
      <nav>
        <Link to="/home">
          <div className="logo">
          <img className="logo_img" src={logo} alt="quikPost logo" />
          <h2>QuikPost</h2>
        </div>
        </Link>
        {location.pathname === "/home" ? (
            <CreatePost addPost={props.addPost} trigger={<CreatePostButton />} />
        ) : (
          <Link className="home-link" to="/home">Back to Posts</Link>
        )}
      </nav>
    </header>
  );
}
