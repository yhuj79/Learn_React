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
