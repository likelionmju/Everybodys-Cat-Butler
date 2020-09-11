import React from "react";
import Post from "./Post"
import "./MyPost.css"

class MyPost extends React.Component {
  // 데이터가 없어서 임시로 넣음
  state = {
    contents: [
      {id: 1, name: "치즈"},
      {id: 2, name: "보리"},
      {id: 3, name: "까미"},
      {id: 4, name: "달리"},
      {id: 5, name: "레오"},
      {id: 6, name: "망고"}
    ]
  }
  render() {
    return (
      <div className="post-container">
        <h1 className="title">나의 게시글</h1>
        <div className="contents">
          {this.state.contents.map(post => (
            <Post
              key={post.id}
              id={post.id}
              name={post.name}
            />
          ))}
        </div>
      </div>
    )
  }

}

export default MyPost;