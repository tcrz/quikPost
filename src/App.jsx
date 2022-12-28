import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts/Posts";
import PostView from "./components/PostView/PostView";
import { nanoid } from "nanoid";
import MainHeader from "./components/MainHeader/MainHeader";
import emptyboximg from "./assets/emptybox.png";
import { Button } from "semantic-ui-react";

const welcomePost = {
  id: nanoid(),
  title: "⚡Welcome to QuikPost",
  content:
    "QuikPost is a post webapp that allows users to create, edit and delete posts. Posts are stored in local storage. Built with React.\nFeatures: \n- Add/Create a post\n- Edit posts\n- Delete posts\n\nPossible Updates:\n- Pagination to prevent all posts from being on a single page.\n- Import and export(download) of posts as JSON file.\n- Special styling/effect can be added to a newly added post.",
  date: new Date(2022, 11, 26, 20, 19),
};

function App() {
  let allPosts = JSON.parse(localStorage.getItem("posts"));
  if (allPosts !== null) {
    for (const post of allPosts) {
      post.date = new Date(post.date);
    }
  }

  const [posts, setPosts] = useState(allPosts || [welcomePost]);

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

  return (
    <>
      <div className="App">
        <Layout>
          <MainHeader addPost={addPost} />
          {posts.length === 0 && (
            <div className="empty-section">
              <img src={emptyboximg} alt="empty box image" />
              <p>
                Looks like you have not posted anything.
                <br /> Add a new post? :)
              </p>
            </div>
          )}
          <Routes>
            <Route
              path="/home"
              element={
                <Posts
                  editPost={editPost}
                  deletePost={deletePost}
                  posts={posts}
                />
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
