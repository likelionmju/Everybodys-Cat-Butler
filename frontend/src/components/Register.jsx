import React from "react";
import "./Register.css";

export default class Register extends React.Component {
  constructor(props, {match}) {
    super(props);
    const offset = new Date().getTimezoneOffset() * 60000;
    var date = new Date(Date.now() - offset).toISOString().substring(0, 10);
    var dates = new Date().toISOString();
    console.log(dates);
    var address = this.props.match.params.address;
    this.state = {
      img: null,
      id: '',
      name: '',
      date: date,
      address: address,
      desc: '',
      remark: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setImage = this.setImage.bind(this);
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    console.log(name, value);
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.state.onSubmit(
      this.state.img,
      this.state.id,
      this.state.name,
      this.state.date,
      this.state.address,
      this.state.desc,
      this.state.remark
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
      <div className="register-container">
        <h1 className="register-title">냥이 등록하기</h1>
        <form action="Post" className="register-form" onSubmit={this.onSubmit} >
          <input type="text" className="upload-img-label" value="사진" disabled />
          <div className="img-container"></div>
          <label htmlFor="register-img" className="upload-img">이미지 업로드</label>
          <input type="file" id="register-img" name="img" accept="image/*" onChange={this.setImage} required />
          <label htmlFor="register-name">이름</label>
          <input type="text" id="register-name" className="input" name="name" onChange={this.handleChange} onChange={this.handleChange} required />
          <label htmlFor="register-date">발견 날짜</label>
          <input type="date" id="register-date" className="input" name="date" value={this.state.date} onChange={this.handleChange} required />
          <label htmlFor="register-address">주소</label>
          <input type="text" id="register-address" className="input" name="address" value={this.state.address} onChange={this.handleChange} readOnly />
          <label htmlFor="register-desc">설명</label>
          <textarea name="" id="register-desc" className="input" name="desc" onChange={this.handleChange}></textarea>
          <label htmlFor="register-remark">특이사항</label>
          <textarea name="" id="register-remark" className="input" name="remark" onChange={this.handleChange}></textarea>
          <button type="submit" className="submit-btn">등록하기</button>
        </form>
      </div>
    )
  }
}