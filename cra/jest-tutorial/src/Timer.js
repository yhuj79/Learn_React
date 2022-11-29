import React from "react";

function Timer() {
  const time = Date.now();
  const hour = new Date(time).getHours();
  const min = new Date(time).getMinutes();
  const sec = new Date(time).getSeconds();

  return (
    <h1>
      {hour}시 {min}분 {sec}초
    </h1>
  );
}

export default Timer;
