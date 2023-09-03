import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        name: "Create your Name ",
        email: "Create a new E-mail."
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  function readPost() {
    axios
      .post(baseURL, {
        name: "Create your Name ",
        email: "Create a new E-mail."
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  function updatePost() {
    axios
      .post(baseURL, {
        name: "Create your Name ",
        email: "Create a new E-mail."
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  function deletePost() {
    axios
      .post(baseURL, {
        name: "Create your Name ",
        email: "Create a new E-mail",
       

      })
      .then((response) => {
        setPost(response.data);
      });
  }




  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.email}</p>
      
      <button onClick={createPost}>Create Post</button>
      <button onClick={readPost}>Read Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
  
}
