import React from "react";
import "./Register.css";

export default class Register extends React.Component {
  constructor(props, {match}) {
    super(props);
    const offset = new Date().getTimezoneOffset() * 60000;
    var date = new Date(Date.now() - offset).toISOString().substring(0, 10);
    console.log(date);
    var address = this.props.match.params.address;
    this.state = {
      id: '',
      name: '',
      date: date,
      address: address,
      desc: '',
      remark: ''
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
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.state.onSubmit(
      this.state.id,
      this.state.name,
      this.state.date,
      this.state.address,
      this.state.desc,
      this.state.remark
    );
  }
  render() {
    return (
      <div className="register-container">
        <h1 className="register-title">게시글 등록하기</h1>
        <form action="Post" className="register-form" onSubmit={this.onSubmit} >
          <input type="text" className="upload-img-label" value="사진" disabled />
          <label htmlFor="register-img" className="upload-img">이미지 업로드</label>
          <input type="file" id="register-img" name="img" accept="image/jpg, image/png" />
          <label htmlFor="register-name">이름</label>
          <input type="text" id="register-name" className="input" name="name" onChange={this.handleChange} onChange={this.handleChange} />
          <label htmlFor="register-date">발견 날짜</label>
          <input type="date" id="register-date" className="input" name="date" value={this.state.date} onChange={this.handleChange} onChange={this.handleChange} />
          <label htmlFor="register-address">주소</label>
          <input type="text" id="register-address" className="input" name="address" value={this.state.address} onChange={this.handleChange} />
          <label htmlFor="register-desc">설명</label>
          <textarea name="" id="register-desc" className="input" name="desc" onChange={this.handleChange}></textarea>
          <label htmlFor="register-remark">특이사항</label>
          <textarea name="" id="register-remark" className="input" name="remark" onChange={this.handleChange}></textarea>
          <button type="submit" className="submit-btn">수정하기</button>
        </form>
      </div>
    )
  }
}