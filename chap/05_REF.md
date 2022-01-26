# :four:[ ref: DOM](https://github.com/yhuj79/Learn_React/blob/master/chap/05_REF.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/04_EventHandling.md'><<:four:PREV (Event Handling)</a></div>
<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/05_REF.md'>:six:NEXT (  ) >></a></div>

## 1 ) 비밀번호 확인기능 구현 - State

```javascript
import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "sucess"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handButtonClick}>비밀번호 확인</button>
        {this.state.clicked ? (
          this.state.validated ? (
            <p id="sucess">비밀번호가 일치합니다.</p>
          ) : (
            <p id="failure">비밀번호가 일치하지 않습니다.</p>
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default ValidationSample;
```

CSS 작성

```javascript
.sucess {
  background-color: lightgreen;
}
.failure {
  background-color: lightcoral;
}
#sucess {
  color: green;
}
#failure {
  color: red;
}
```

App.js를 클래스형 컴포넌트로 작성

```javascript
import { Component } from "react";
import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return <ValidationSample />;
  }
}

export default App;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/05_REF_1.gif>

## 2 ) REF - Input ID Focus

비밀번호 확인기능에서 ref를 추가
Click했을 경우 input에 focus 유지

```javascript
handButtonClick = () => {
  this.setState({
    clicked: true,
    validated: this.state.password === "0000",
  });
  this.input.focus();
};
```

```javascript
<input
  ref={(ref) => (this.input = ref)}
  type="password"
  placeholder="Input Password"
  value={this.state.password}
  onChange={this.handleChange}
  className={
    this.state.clicked ? (this.state.validated ? "sucess" : "failure") : ""
  }
/>
```

## 3 ) REF - ScrollBox

스크롤 박스가 있는 컴포넌트
그리고 맨 밑으로 스크롤되는 버튼 구현하기

```javascript
import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
```

```javascript
import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/05_REF_2.PNG>
