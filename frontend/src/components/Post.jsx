import React from "react";
import {Link} from "react-router-dom";

const Post = ({ id, name, desc }) => {
  return (
    <div className="post">
      <h2 className="post-name">{ name }</h2>
      <div>
        <Link to={{
          pathname: `/detailpost/${id}`,
          state: {id, name, desc}
        }} className="post-button">
          수정
        </Link>
        <button type="button" className="post-button">삭제</button>
      </div>
    </div>
  )
}

export default Post;
