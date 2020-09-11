import React from "react";

const Post = ({ name }) => {
  return (
    <div className="post">
      <h2 className="post-name">{ name }</h2>
      <div>
        <button className="post-button">수정</button>
        <button className="post-button">삭제</button>
      </div>
    </div>
  )
}

export default Post;

