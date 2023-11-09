import React from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import api from "./api/posts";
import { useHistory } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const PostPage = () => {
  // const { posts, setPosts } = useContext(DataContext);
  // const post = posts.find((post) => post.id.toString() === id);

  const { id } = useParams();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  const history = useHistory();

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const newPosts = posts.filter((post) => post.id !== id);
  //     setPosts(newPosts);
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
  
  const handleDelete = async (id) => {
    deletePost(id);
    history.push("/");
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Page not found</h2>
            <p>hmm... Something went wrong!</p>
            <p>
              <Link to="/">Visit our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
