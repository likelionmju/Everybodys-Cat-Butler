import React from "react";
import "./DetailPost.css";
import axios from "axios";

function getPost() {
  const axios = require("axios");
  axios
    .post("http://127.0.0.1:8000/", {
      image: "image test",
      name: "name test",
      date: "date test",
      address: "address test",
      desc: "desc test",
      remark: "remark test",
    })
    .then(function (response) {
      console.log(response);
    });

  axios.defaults.withCredentials = true;
}

class DetailPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      name: this.props.location.state.name,
      date: this.props.location.state.date,
      address: this.props.location.state.address,
      desc: this.props.location.state.desc,
      remark: this.props.location.state.remark,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.state.onSubmit(
      this.state.id,
      this.state.img,
      this.state.name,
      this.state.date,
      this.state.address,
      this.state.desc,
      this.state.remark,
    );
  }
  setImage(event) {
    this.setState({
      img: event.target.files[0]
    })
    var reader = new FileReader;
    var img = document.createElement("img");
    reader.onloadend = function(event) {
      img.setAttribute("src", event.target.result);
      img.setAttribute("class", "cat-img ");
      if (!document.querySelector(".img-container").classList.contains("img-exist")) {
        document.querySelector(".img-container").classList.add("img-exist");
      }
      var imgExist = document.getElementsByClassName("cat-img");
      console.log(imgExist);
      if (imgExist.length >= 1) {
        document.querySelector(".img-container").removeChild(imgExist[0]);
      }
      document.querySelector(".img-container").appendChild(img);
    };
    console.log(event.target.files);
    if(event.target.files.length !== 0) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  render() {
    return (
      <div className="detail-post-container">
        <h1 className="detail-post-title">냥이 수정하기</h1>
        <form method="Post" className="detail-post-form" onSubmit={this.onSubmit}>
          {/* 사진 */}
          <input type="text" className="upload-img-label" value="사진" disabled />
          <div className="img-container"></div>
          <label htmlFor="detail-post-img" className="upload-img">이미지 업로드</label>
          <input type="file" id="detail-post-img" name="img" accept="image/jpg, image/png" required/>
          {/* 이름 */}
          <label htmlFor="detail-post-name">이름</label>
          <input type="text" id="detail-post-name" className="input" name="name" value={this.state.name} onChange={this.handleChange} required />
          {/* 발견 날짜 */}
          <label htmlFor="detail-post-date">발견 날짜</label>
          <input type="date" id="detail-post-date" className="input" name="date" value={this.state.date} onChange={this.handleChange} readOnly />
          {/* 주소 */}
          <label htmlFor="detail-post-address">주소</label>
          <input type="text" id="detail-post-address" className="input" name="address" value={this.state.address} onChange={this.handleChange} readOnly />
          {/* 설명 */}
          <label htmlFor="detail-post-desc">설명</label>
          <textarea name="" id="detail-post-desc" className="input" name="desc" value={this.state.desc} onChange={this.handleChange}></textarea>
          {/* 특이사항 */}
          <label htmlFor="detail-post-remark">특이사항</label>
          <textarea name="" id="detail-post-remark" className="input" name="remark" value={this.state.remark} onChange={this.handleChange}></textarea>
          {/* 수정 버튼 */}
          <button type="submit" className="submit-btn">수정하기</button>
        </form>
      </div>
    )
  }
}

export default DetailPost;