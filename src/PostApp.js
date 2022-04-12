import React from "react";
import axios from "axios";

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
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ posts: data });
      console.log(data);
    } catch (err) {
      console.log("Error fetching data from server", err);
    }
  };

  // Uodate Opertion

  updatePost = () => {};

  //   Delete Operation

  deletePost = () => {};

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
          </tr>
          {this.state.posts.map((post) => {
            return (
              <tr>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}

export default PostApp;
