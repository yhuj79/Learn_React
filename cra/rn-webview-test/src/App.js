import React, { useEffect, useRef } from "react";

function App() {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.574843, 126.97738);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>RN-WEBVIEW-TEST</h3>
      <div ref={mapElement} style={{ minHeight: "500px" }} />
    </div>
  );
}

export default App;
