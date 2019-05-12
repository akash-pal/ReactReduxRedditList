import React from "react";
import PropTypes from "prop-types";

function openDetail(e, post) {
  e.preventDefault();
  window.open(post.url);
}

export const Post = ({ post }) => (
  <li onClick={e => openDetail(e, post)}>{post.title}</li>
);

Post.propTypes = {
  post: PropTypes.any.isRequired
};
