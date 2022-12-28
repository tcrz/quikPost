import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import CreatePost from './components/CreatePost/CreatePost'
import CreatePostButton from './components/CreatePost/CreatePostButton'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   // {
//   //   path: "newpostb",
//   //   element: <CreatePostButton />,
//   // },

//   {
//     path: "newpostb",
//     element: <CreatePost />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
