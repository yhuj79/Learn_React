# :eight:[ Hooks](https://github.com/yhuj79/Learn_React/blob/master/chap/08_Hooks.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/07_LifeCycle.md'><<:seven:PREV (Life Cycle)</a></div>
<!--<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/08_Hooks.md'>:nine:NEXT ( ) >></a></div>-->

## 1 ) UseState

```javascript
const [value, setValue] = useState(0);
```

파라미터에 상태의 기본값을 넣어준다.
첫 번째 원소 : 상태 값
두 번째 원소 : 상태를 설정하는 함수

```javascript
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{ padding: "30px" }}>
      <h1>Count : {value}</h1>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};
export default Counter;
```

App 컴포넌트에서 Counter 컴포넌트를 렌더링

```javascript
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/08_Hooks_1.PNG>

이름, ID, 비밀번호를 담는 코드를 작성

```javascript
import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeID = (e) => {
    setID(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Input your Information</h1>
      <input placeholder="Name" value={name} onChange={onChangeName} />
      <input placeholder="ID" value={id} onChange={onChangeID} />
      <input
        placeholder="Passwd"
        value={password}
        onChange={onChangePassword}
      />
      <h2>이름 : {name}</h2>
      <h2>ID : {id}</h2>
      <h2>비밀번호 : {password}</h2>
    </div>
  );
};
export default Info;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/08_Hooks_2.PNG>

## 2 ) UseEffect

컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있음

```javascript
useEffect(() => {
  console.log("렌더링이 완료되었습니다");
  console.log({
    name,
    id,
    password,
  });
});
```

input을 변경하면 다음과 같이 출력됨

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/08_Hooks_3.PNG>

컴포넌트 등장 시에만 출력이 되도록 설정하려면
두 번째 파라미터에 빈 공간의 배열을 입력해준다.
그러면 컴포넌트가 화면에 최초 렌더링될 때만 콘솔이 출력된다.

```javascript
useEffect(() => {
  console.log("마운트될 때만 실행됩니다");
}, []);
```

특정 값이 업데이트될 때만 실행하고 싶을 때

```javascript
useEffect(() => {
  console.log("Some");
}, [Some]);
```

## 2 ) UseEffect - effect, clean up

```javascript
useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, [name]);
```

```javascript
import { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ padding: "30px" }}>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
```

상단에 숨기기, 보이기 기능을 구현하여 콘솔에 effect, cleanup이 나타나는 것을 확인

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/08_Hooks_4.gif>
