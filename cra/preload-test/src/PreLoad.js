import { useState, useEffect } from "react";
import "./App.css";

function PreLoad() {
  const totalImages = 300;
  const arrImg = Array.from(
    { length: totalImages },
    (_, index) => `https://picsum.photos/id/${index}/500/400`
  );

  const [num, setNum] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    function preloadImages(arr) {
      const loadedImages = [];
      let loadedCount = 0;
      arr.forEach((url, index) => {
        const image = new Image();
        image.src = url;
        image.onload = () => {
          loadedImages[index] = image;
          loadedCount++;
          if (loadedCount === arr.length) {
            setPreloadedImages(loadedImages);
            setIsPreloaded(true);
          }
        };
        // 로딩되지 않는 picsum 이미지 처리
        image.onerror = () => {
          const fallbackImage = new Image();
          fallbackImage.src = "https://picsum.photos/id/1/500/400";
          loadedImages[index] = fallbackImage;
          loadedCount++;
          if (loadedCount === arr.length) {
            setPreloadedImages(loadedImages);
            setIsPreloaded(true);
          }
        };
      });
    }

    preloadImages(arrImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isStarted, totalImages]);

  const handleImageError = (e) => {
    e.target.src = "https://picsum.photos/id/1/500/400";
  };

  return (
    <div className="App">
      <div className="num-grid">
        <h1>PreLoad {isPreloaded ? "ON" : "OFF"}</h1>
        <h1 className="num">{num}</h1>
      </div>
      <button
        className="button"
        onClick={() => setIsStarted(true)}
        disabled={!isPreloaded}
      >
        Start
      </button>
      <div className="image-grid">
        {preloadedImages.slice(0, num).map((image, index) => (
          <div key={index} className="image-container">
            <div className="image-number">{index + 1}</div>
            <img
              className="image"
              alt={index}
              src={image.src}
              onError={handleImageError}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreLoad;
