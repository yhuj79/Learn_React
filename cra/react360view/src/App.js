import { useEffect } from "react";
import ThreeSixty from "react-360-view";
import "./App.css";

function App() {
  // 스크롤 시 의도치 않게 특정 요소가 확대, 축소되는 현상 방지
  useEffect(() => {
    const element = document.getElementById("container-viewer");

    if (element) {
      const handleWheel = (event) => {
        event.stopPropagation();
      };

      // wheel event가 다른 요소로 전파되기 전에 stopPropagation에 의해 중단
      element.addEventListener("wheel", handleWheel);

      // 언마운트 될 때, wheel event listener 제거
      return () => {
        element.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div>
      <div
        id="container-viewer"
        style={{
          width: "40%",
          alignItems: "center",
          border: "2px solid black",
          margin: "30px auto",
          position: "relative",
        }}
      >
        <ThreeSixty
          amount={34}
          imagePath="https://raw.githubusercontent.com/yhuj79/blog-assets/main/240713/earth"
          fileName="earth-{index}.png"
          spinReverse
        />
      </div>
    </div>
  );
}

export default App;
// import React, { useState, useRef } from "react";

// function App() {
//   const imgRef = useRef(null);
//   const [isDrag, setIsDrag] = useState(false); // Drag 상태를 추적하는 상태 변수
//   const [startX, setStartX] = useState(); // Drag 시작 지점을 저장하는 상태 변수
//   const [degree, setDegree] = useState(1); // 이미지 각도를 저장하는 상태 변수
//   const [throttle, setThrottle] = useState(0); // 이미지 전환 빈도를 조절하는 상태 변수

//   // Drag 시작 시 호출 (isDrag True)
//   function onDragStart(e) {
//     e.preventDefault();
//     setIsDrag(true);
//     // 드래그가 시작된 시점에서의 마우스 X 좌표(e.pageX) + 이미지 요소가 scroll된 수치(imgRef.current.scrollLeft)
//     // = 실제 드래그 시작 지점을 계산
//     setStartX(e.pageX + imgRef.current.scrollLeft);
//   }

//   // Drag 종료 시 호출 (isDrag False)
//   function onDragEnd() {
//     setIsDrag(false);
//   }

//   // Drag 중일 때 호출
//   function onDragMove(e) {
//     if (isDrag) {
//       const { scrollWidth, clientWidth, scrollLeft } = imgRef.current;

//       // 스크롤 위치에 따라 Drag 시작 지점 조정
//       if (scrollLeft === 0) {
//         setStartX(e.pageX);
//       } else if (scrollWidth < clientWidth + scrollLeft) {
//         setStartX(e.pageX + scrollLeft);
//       }

//       // 마우스 이동 방향에 따라 이미지 각도 변경 함수 호출
//       if (startX - e.pageX > 0) {
//         setThrottle(0);
//         degreeLeft();
//       } else if (startX - e.pageX < 0) {
//         setThrottle(0);
//         degreeRight();
//       }
//     }
//   }

//   // 마우스가 좌측 이동 시 이미지 각도 증가
//   function degreeLeft() {
//     setThrottle(throttle + 1);
//     // throttle 값이 10s에 도달하면 이미지 각도 변경
//     if (throttle === 10) {
//       // 마지막 degree에 도달했을 경우 처리
//       degree === 36 ? setDegree(1) : setDegree(degree + 1);
//       setThrottle(0);
//     } else {
//       setDegree(degree);
//     }
//   }

//   // 마우스가 우측 이동 시 이미지 각도 감소
//   function degreeRight() {
//     setThrottle(throttle + 1);
//     // throttle 값이 10s에 도달하면 이미지 각도 변경
//     if (throttle === 10) {
//       // 마지막 degree에 도달했을 경우 처리
//       degree === 1 ? setDegree(36) : setDegree(degree - 1);
//       setThrottle(0);
//     } else {
//       setDegree(degree);
//     }
//   }

//   return (
//     <div
//       style={{
//         width: "50%",
//         alignItems: "center",
//         textAlign: "center",
//         border: "2px solid black",
//         margin: "30px auto",
//       }}
//     >
//       <img
//         style={{
//           width: "100%",
//         }}
//         alt="car body"
//         ref={imgRef}
//         onMouseDown={onDragStart}
//         onMouseMove={onDragMove}
//         onMouseUp={onDragEnd}
//         onMouseLeave={onDragEnd}
//         src={`https://raw.githubusercontent.com/yhuj79/blog-assets/main/240713/car/car-${degree}.webp`}
//       />
//     </div>
//   );
// }

// export default App;
