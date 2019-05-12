import React from "react";
import PropTypes from "prop-types";
import { Post } from "./post";

export const PostList = ({ posts }) => (
  <ul>
    {posts.map((post, i) => (
      <Post key={i} post={post.data} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};
