import React from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class PostApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  //   Create Operation

  createPost = () => {};

  // Read Operation

  getPosts = async () => {
    try {
      const { data: posts } = await axios.get(API_URL);
      this.setState({ posts });
    } catch (err) {
      console.error("Error fetching data from server", err);
    }
  };

  // Uodate Opertion

  updatePost = () => {};

  //   Delete Operation

  deletePost = async (postId) => {
    try {
      await axios.delete(`${API_URL}/${postId}`);
      let posts = [...this.state.posts];
      posts = posts.filter((post) => post.id !== postId);
      this.setState({ posts });
    } catch (err) {
      console.error("Error deleting data from server", err);
    }
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <>
        {" "}
        <p>Post App</p>
        <table>
          <tr>
            <th>Post Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
          {this.state.posts.map((post) => {
            return (
              <tr>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => this.deletePost(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}

export default PostApp;
