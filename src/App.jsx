import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts/Posts";
import PostView from "./components/PostView/PostView";
import MainHeader from "./components/MainHeader/MainHeader";

import { Button, Icon } from "semantic-ui-react";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import EmptyPosts from "./components/EmptyPosts/EmptyPosts";

const welcomePost = {
  id: "quikpost101",
  title: "⚡Welcome to QuikPost",
  content:
    "QuikPost is a post webapp that allows users to create, edit and delete posts. Posts are stored in local storage. Built with React.\nFeatures: \n- Add/Create a post\n- Edit posts\n- Delete posts\n\nPossible Updates:\n- Pagination to prevent all posts from being on a single page.\n- Import and export(download) of posts as JSON file.\n- Special styling/effect can be added to a newly added post.",
  date: new Date(2022, 11, 26, 20, 19),
};

const downloadData = (data, fileName) => {
  const blob = new Blob([JSON.stringify(data)], { type: "type/json" });
  a.download = fileName;
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;

  const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  link.dispatchEvent(clickEvent);
};

function App() {
  let allPosts = JSON.parse(localStorage.getItem("posts"));
  if (allPosts !== null) {
    for (const post of allPosts) {
      post.date = new Date(post.date);
    }
  }

  const [posts, setPosts] = useState(allPosts || [welcomePost]);
  const blob = new Blob([JSON.stringify(posts)], { type: "type/json" });
  const url = window.URL.createObjectURL(blob);
  const fileName = "posts.json";

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const editPost = (id, title, content) => {
    const postsCopy = [...posts];
    const postToEdit = postsCopy.find((post) => post.id === id);
    postToEdit.title = title;
    postToEdit.content = content;
    setPosts(postsCopy);
  };

  const DownloadBtn = () => (
    <Button size="tiny" className="download-btn">
      <Icon name="download" />
      <a href={url} download={fileName}>
        Download posts data
      </a>
    </Button>
  );
  return (
    <>
      <div className="App">
        <Layout>
          <MainHeader addPost={addPost} />
          <Routes>
            <Route
              path="/home"
              element={
                posts.length === 0 ? (
                  <EmptyPosts/>
                ) : (
                  <Posts
                    editPost={editPost}
                    deletePost={deletePost}
                    posts={posts}
                  >
                    <DownloadButton url={url} fileName={fileName} />
                  </Posts>
                )
              }
            />
            <Route path="/post/:id" element={<PostView />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          <Button
            className="github"
            icon="github"
            href="https://github.com/tcrz/quikPost"
            target="_blank"
          />
        </Layout>
      </div>
    </>
  );
}

export default App;
