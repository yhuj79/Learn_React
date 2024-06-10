import { useState, useEffect } from "react";
import "./App.css";

function Normal() {
  const totalImages = 300;
  const arrImg = Array.from(
    { length: totalImages },
    (_, index) => `https://picsum.photos/id/${index}/500/400`
  );

  const [num, setNum] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let interval;
    if (isStarted) {
      interval = setInterval(() => {
        setNum((prevNum) => {
          if (prevNum >= totalImages) {
            clearInterval(interval);
            return prevNum;
          }
          return prevNum + 1;
        });
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isStarted, totalImages]);

  // 로딩되지 않는 picsum 이미지는 1번 이미지로 대체
  const handleImageError = (e) => {
    e.target.src = "https://picsum.photos/id/1/500/400";
  };

  return (
    <div className="App">
      <div className="num-grid">
        <h1>PreLoad OFF</h1>
        <h1 className="num">{num}</h1>
      </div>
      <button className="button" onClick={() => setIsStarted(true)}>
        Start
      </button>
      <div className="image-grid">
        {arrImg.slice(0, num).map((src, index) => (
          <div key={index} className="image-container">
            <div className="image-number">{index + 1}</div>
            <img
              className="image"
              alt={index}
              src={src}
              onError={handleImageError}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Normal;
