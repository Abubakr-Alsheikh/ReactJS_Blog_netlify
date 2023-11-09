import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { format } from "date-fns";
import api from "./api/posts";
import { useStoreActions, useStoreState } from "easy-peasy";

const EditPost = () => {
  // const { posts, setPosts } = useContext(DataContext);
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");

  const { id } = useParams();
  
  const posts = useStoreState((state) => state.posts);
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  
  const history = useHistory();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  
  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const updatePost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/posts/${id}`, updatePost);
  //     setPosts(
  //       posts.map((post) => (post.id === id ? { ...response.data } : post))
  //     );
  //     setEditTitle("");
  //     setEditBody("");
  //     history.push("/");
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data);
  //       console.log(error.response.data);
  //       console.log(error.response.data);
  //     } else {
  //       console.log(error.message);
  //     }
  //   }
  // };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatePost = { id, title: editTitle, datetime, body: editBody };
    history.push(`/post/${id}`);
    editPost(updatePost);
  };

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h1>New Post</h1>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post Body:</label>
            <textarea
              type="text"
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
            <button type="button" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Page not found</h2>
          <p>hmm... Something went wrong!</p>
          <p>
            <Link to="/">Visit our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
