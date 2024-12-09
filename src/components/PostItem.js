import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="post-header">
        <h3>User Name</h3>
        <span>{post.timestamp.toLocaleTimeString()}</span>
      </div>
      <p>{post.text}</p>
      {post.image && <img src={post.image} alt="Post image" />}
      {post.video && <video src={post.video} controls />}
    </div>
  );
};

export default PostItem;
