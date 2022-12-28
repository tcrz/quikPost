# QuickPost (overview)
Technology: I worked on this project using React.  
User Interface: A simple minimalistic UI making it easy to use and interact with.

### Data  

This application relies directly on the posts. The main data that drives this application are Post objects which will be rendered on screen as components. Since there can be many posts, our main data will be a list of Post objects.
The structure of the post object containing all the necessary properties:  
``` {
id: lxWgM09jpCIkI1oHwXoCx,
title: "Welcome To QuikPost",
content: "This is QuikPost v1. Hope you enjoy using it half as much as I enjoyed building it."
created_at: 2022-12-26T15:33:33.944Z
}
```
the id was generated using the nanoid package.

### State management and Functionality
Since there is not backend, I decided to store the data in local storage. This essentially stores the data within the browser allowing the data to persist. Unlike session storage, local storage has no expiration time. This way posts don’t disappear after the window is closed or the page is refreshed.

Snippet:
```javascript
function App () {
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
}

```
Line 2: Retrieving posts from local storage is there are any. On the first run of the application, there will be nothing to retrieve hence allposts value will be undefined. In this case, a default post is set in the posts state.  
Line 9: The retrieved data is set as to the posts state.  
Line 11: This useEffect hook runs whenever the posts state changes. Whenever there is a change, the current posts state is stored to local storage, keeping the stored data updated at all times.

The core functionality of the application (i.e. creation, deletion, edit) and the posts data were all managed in  App.js. These functions are then passed down as props to child components where they will be executed in response to  events

Possible improvements:
- Pagination can be implemented to prevent all posts from being on a single page.
- Posts data can be imported or exported(downloaded) as JSON file.
- Special styling/effect can be added to a newly added post.