import React from "react";
import "./DetailPost.css"

class DetailPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.state.name,
      desc: this.props.location.state.desc
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    console.log(name, value);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.state.onSubmit(
      this.state.id,
      this.state.name,
      this.state.desc
    );
  }

  render() {
    return (
      <div className="detail-post-container">
        <h1 className="detail-post-title">게시글 수정하기</h1>
        <form method="Post" className="detail-post-form" onSubmit={this.onSubmit}>
          <input type="text" className="upload-img-label" value="사진" disabled />
          <label htmlFor="detail-post-img" className="upload-img">이미지 업로드</label>
          <input type="file" id="detail-post-img" name="img" accept="image/jpg, image/png"/>
          <label htmlFor="detail-post-name">이름</label>
          <input type="text" id="detail-post-name" className="input" name="name" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="detail-post-date">날짜</label>
          <input type="date" id="detail-post-date" className="input" name="date" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="detail-post-address">주소</label>
          <input type="text" id="detail-post-address" className="input" name="address" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="detail-post-desc">설명</label>
          <textarea name="" id="detail-post-desc" className="input" name="desc" value={this.state.desc} onChange={this.handleChange}></textarea>
          <label htmlFor="detail-post-remark">특이사항</label>
          <textarea name="" id="detail-post-remark" className="input" name="remark" value={this.state.desc} onChange={this.handleChange}></textarea>
          <button type="submit" className="submit-btn">수정하기</button>
        </form>
      </div>
    )
  }
}

export default DetailPost;