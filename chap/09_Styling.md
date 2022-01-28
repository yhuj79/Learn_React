# :nine:[ Styling](https://github.com/yhuj79/Learn_React/blob/master/chap/09_Styling.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/08_Hooks.md'><<:eight:PREV (Hooks)</a></div>
<!--<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/08_Hooks.md'>:keycap_ten:NEXT ( ) >></a></div>-->

## 1 ) CSS Module

CSS 모듈을 사용하는 예제 만들어보기

CSSModule.module.css 생성

```javascript
.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}
.wrapper2 {
  border: 20px solid gray;
}
:global .something { // 글로벌 CSS로 작성
  font-weight: 800;
  color: aqua;
}

```

CSSModule.js

```javascript
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    // 템플릿 리터럴을 사용하여 클래스를 두 개 이상 적용
    <div className={`${styles.wrapper} ${styles.wrapper2}`}>
      <span className="something">CSS Module</span> Test!
    </div>
  );
};
export default CSSModule;
```

App.js

```javascript
import { Component } from "react";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
      </div>
    );
  }
}
export default App;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/09_Styling.PNG>

## 2 ) Styled-Component

자바스크립트 파일 하나로 해결 가능
.css .scss 확장자를 가진 파일을 만들지 않아도 된다.

```javascript
import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyleComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyleComponent;
```
