# :three:[ Component](https://github.com/yhuj79/Learn_React/blob/master/chap/03_Component.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/02_JSX.md'><<:two:PREV (JSX)</a></div>
<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/04_Event Handling.md'>:four:NEXT (Event Handling) >></a></div>

## 1 ) Component, Props (Default, Type)

src에 MyComponent.js 생성

```javascript
import logo from "./logo.svg";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      이름 : {name}
      <br />
      Children 값 : {children}
      <br />
      좋아하는 숫자 : {favoriteNumber}
      <br />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};
MyComponent.defaultProps = {
  name: "select_none",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
```

App.js 수정

```javascript
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent /* name='yhuj79' */ favoriteNumber={3}>React!</MyComponent>
  );
};

export default App;
```

다음과 같이 출력된다.

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/03_Component_1.PNG>

## 2 ) Class Component, Props

클래스형 컴포넌트에서 props를 사용

```javascript
import logo from "./logo.svg";
import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        이름 : {name}
        <br />
        Children 값 : {children}
        <br />
        좋아하는 숫자 : {favoriteNumber}
        <br />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "select_none",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
```

다음과 같이 static을 통해 class 내부에서 해결할 수도 있다.

```javascript
import logo from "./logo.svg";
import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "select_none",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        이름 : {name}
        <br />
        Children 값 : {children}
        <br />
        좋아하는 숫자 : {favoriteNumber}
        <br />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default MyComponent;
```

## 3 ) State로 클릭 시 숫자가 늘어나는 버튼 생성하기

Constructor 메서드를 통해 State 설정

render 함수에서 State 조회

SetState

```javascript
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  render() {
    const { num } = this.state;
    return (
      <div style={{ padding: "30px" }}>
        <h1>{num}</h1>
        <button
          onClick={() => {
            this.setState({ num: num + 1 });
          }}
        >
          Plus One
        </button>
      </div>
    );
  }
}
export default Counter;
```

```javascript
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;
```

Constructor 없이 State 초깃값 지정

```javascript
class Counter extends Component {
constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
```

```javascript
class Counter extends Component {
    state = {         // 이렇게 constructor 없이도 설정 가능하다.
        num: 0
    };
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/03_Component_2.gif>

SetState 후 특정 작업 (Console, Alert ... )

```javascript
onClick={() => {
    this.setState(
        {
            num: num + 1
        },
        () => {
            alert('Plus One!');
        }
    );
}}
```

## 4 ) UseState로 In, Out 구현

UseState를 사용하여 상태를 변환한다.

```javascript
import { useState } from "react";

const Say = () => {
  // IN , OUT Button
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("WelCome");
  const onClickLeave = () => setMessage("GoodBye");

  // Color Button
  const [color, setColor] = useState("");

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={onClickEnter}>IN</button>
      <button onClick={onClickLeave}>OUT</button>
      <h1 style={{ color }}>{message}</h1>

      <button
        style={{ backgroundColor: "red" }}
        onClick={() => setColor("red")}
      >
        RED
      </button>
      <button
        style={{ backgroundColor: "orange" }}
        onClick={() => setColor("orange")}
      >
        RED
      </button>
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => setColor("yellow")}
      >
        RED
      </button>
    </div>
  );
};
export default Say;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/03_Component_3.gif>
