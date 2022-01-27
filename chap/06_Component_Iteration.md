# :six:[ Component Iteration](https://github.com/yhuj79/Learn_React/blob/master/chap/06_Component_Iteration.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/05_REF.md'><<:five:PREV (ref: DOM)</a></div>
<!--<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/06_Component_Iteration.md'>:seven:NEXT ( ) >></a></div>-->

## 1 ) MAP

데이터 배열을 컴포넌트 배열로 변환
여러가지 형태로 출력해보기

```javascript
const IterationSample = () => {
  const arr = [1, 2, 3, 4, 5];
  const arrx2 = arr.map((num) => num * 2 + " ");
  const arrx3 = arr.map((num) => num * 3 + " ");

  const season = ["spring", "summer", "fall", "winter"];
  const seasonList = season.map((season) => season + " ");
  const seasonVList = season.map((season) => <li>{season}</li>);

  return (
    <div>
      <h1>arr x 2 = {arrx2}</h1>
      <h1>arr x 3 = {arrx3}</h1>
      <h1>{seasonList}</h1>
      <ul>{seasonVList}</ul>
    </div>
  );
};
export default IterationSample;
```

```javascript
import { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <IterationSample />
      </div>
    );
  }
}
export default App;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/06_Component_Iteration_1.PNG>

## 2 ) KEY

key가 없으면 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하며 변화를 감지한다.
하지만 key를 통해 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다.

```javascript
const seasonVList = season.map((season) => <li>{season}</li>);

const seasonVList = season.map((ss, index) => <li key={index}>{ss}</li>);
```

## 3 ) 데이터 추가 기능 구현

map, key를 활용하여 세 가지 상태를 사용, 입력된 값을 리스트에 추가하는 기능 구현

```javascript
import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "text1" },
    { id: 2, text: "text2" },
    { id: 3, text: "text3" },
    { id: 4, text: "text4" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // concat : 새로운 배열 생성
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input placeholder="ADD LIST!" value={inputText} onChange={onChange} />
      <button onClick={onClick}>ADD</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;
```
