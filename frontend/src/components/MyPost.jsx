import React from "react";
import Post from "./Post"
import "./MyPost.css"

class MyPost extends React.Component {
  // 데이터가 없어서 임시로 넣음
  state = {
    contents: [
      {id: 1, name: "치즈", desc: "아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ?"},
      {id: 2, name: "보리", desc: "아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ?"},
      {id: 3, name: "까미", desc: "아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ?"},
      {id: 4, name: "달리", desc: "아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ?"},
      {id: 5, name: "레오", desc: "아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ?"},
      {id: 6, name: "망고", desc: "아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ? 아 귀여워 .. 귀엽다 .. 너무 귀여운데 ?"}
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
              desc={post.desc}
            />
          ))}
        </div>
      </div>
    )
  }

}

export default MyPost;