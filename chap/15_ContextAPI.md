# :one::five:[ Context API](https://github.com/yhuj79/Learn_React/blob/master/chap/15_ContextAPI.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/13_SPA.md'><<:nine:PREV (SPA)</a></div>
<!--<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/08_Hooks.md'>:keycap_ten:NEXT ( ) >></a></div>-->

## 1 ) Context, Consumer, Provider

Context 생성, 파라미터 기본 상태는 black.

```javascript
import { createContext } from "react";

const ColorContext = createContext({ color: "black" });

export default ColorContext;
```

Consumer 컴포넌트로 색상을 조회
ColorBox는 검은색을 받아와서 검은색이 될 것임

```javascript
import ColorContext from "../contexts/color";

function ColorBox() {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
}
export default ColorBox;
```

기존 받아온 ColorBox와 함께
Provider를 통해 value 변경

```javascript
import ColorBox from "./components/ColorBox";
import styled from "styled-components";
import ColorContext from "./contexts/color";

const AppDiv = styled.div`
  padding: 30px;
  display: flex;
`;
function App() {
  return (
    <AppDiv>
      <ColorBox />

      <ColorContext.Provider value={{ color: "red" }}>
        <ColorBox />
      </ColorContext.Provider>
    </AppDiv>
  );
}

export default App;
```

교재는 화살표 함수로 함수형 컴포넌트를 선언하였음.

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/15_ContextAPI_1.PNG>
