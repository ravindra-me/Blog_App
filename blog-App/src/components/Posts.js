import React from "react";
import Loader from "./Loader";
import Post from "./Post";
function Posts(props) {
  if (!props.articles) {
    return <Loader />;
  }
  return props.articles.map((article) => <Post {...article} />);
}

export default Posts;
