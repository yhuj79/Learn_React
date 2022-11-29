import React from "react";

function Container({ id }) {
  return id ? <h1>{id}</h1> : <h1>id가 발견되지 않습니다.</h1>;
}

export default Container;
