import { useState } from "react";

function UseStateArray() {
  const [arr, setArr] = useState({
    a: "aaa 인 텍스트",
    b: "bbb 인 텍스트",
    c: "ccc 인 텍스트",
    d: "ddd 인 텍스트",
  });

  return (
    <div>
      <div>
        <p>{arr.a}</p>
      </div>
      <div>
        <button onClick={() => setArr({a: "asdasd"})}>CLICK</button>
      </div>
    </div>
  );
}

export default UseStateArray;
