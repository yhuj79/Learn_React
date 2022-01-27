# :four:[ Event Handling](https://github.com/yhuj79/Learn_React/blob/master/chap/04_Event_Handling.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/03_Component.md'><<:three:PREV (Component)</a></div>
<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/05_REF.md'>:five:NEXT (ref: DOM) >></a></div>

## 1 ) 클래스 Component 구현

```javascript
import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="username"
          placeholder="Input ID"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="Input Text"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button style={{ marginLeft: "10px" }} onClick={this.handleClick}>
          IN
        </button>
      </div>
    );
  }
}
export default EventPractice;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/04_EventHandling_1.gif>

## 2 ) 함수 Component 구현

```javascript
import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div style={{ padding: "30px" }}>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="Input ID"
        value={username}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="Input Text"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button style={{ marginLeft: "10px" }} onClick={onClick}>
        IN
      </button>
    </div>
  );
};
export default EventPractice;
```
