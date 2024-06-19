// src/components/Map.js
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 동그라미 번호 아이콘 생성 함수
const createIcon = (index) =>
  L.divIcon({
    html: `<div style="background-color: blue; color: white; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
             ${index + 1}
           </div>`,
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    className: "", // 추가: 기본 클래스 이름을 비워서 기본 스타일이 적용되지 않도록 설정
  });

// 주요 명소 좌표 및 이름 설정
const locations = [
  { lat: 48.8584, lon: 2.2945, name: "Eiffel Tower" },
  { lat: 48.8606, lon: 2.3376, name: "Louvre Museum" },
  { lat: 48.8529, lon: 2.3511, name: "Notre-Dame Cathedral" },
  { lat: 48.8462, lon: 2.3372, name: "Luxembourg Gardens" },
  { lat: 48.8567, lon: 2.3126, name: "Invalides" },
];

// Haversine 공식을 사용하여 두 지점 사이의 거리를 계산하는 함수
function haversineDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lat1 - lon2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;
  return distance;
}

// 각도를 라디안으로 변환하는 함수
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// 백트래킹을 사용하여 최단 경로를 찾는 함수
function findShortestPath(start, points) {
  let shortestPath = null;
  let shortestDistance = Infinity;

  function backtrack(currentPath, remainingPoints, currentDistance) {
    if (remainingPoints.length === 0) {
      if (currentDistance < shortestDistance) {
        shortestDistance = currentDistance;
        shortestPath = [...currentPath];
      }
      return;
    }

    for (let i = 0; i < remainingPoints.length; i++) {
      const nextPoint = remainingPoints[i];
      const nextDistance = haversineDistance(
        currentPath[currentPath.length - 1].lat,
        currentPath[currentPath.length - 1].lon,
        nextPoint.lat,
        nextPoint.lon
      );

      currentPath.push(nextPoint);
      remainingPoints.splice(i, 1);

      backtrack(currentPath, remainingPoints, currentDistance + nextDistance);

      currentPath.pop();
      remainingPoints.splice(i, 0, nextPoint);
    }
  }

  backtrack([start], points, 0);
  return shortestPath;
}

// locations 배열의 중앙 값을 계산하는 함수
function calculateCenter(locations) {
  const latSum = locations.reduce((sum, loc) => sum + loc.lat, 0);
  const lonSum = locations.reduce((sum, loc) => sum + loc.lon, 0);
  const centerLat = latSum / locations.length;
  const centerLon = lonSum / locations.length;
  return [centerLat, centerLon];
}

const center = calculateCenter(locations);

const Map = () => {
  const [path, setPath] = useState([]);

  const handleFindPath = () => {
    const shortestPath = findShortestPath(locations[0], locations.slice(1));
    setPath(shortestPath);
  };

  return (
    <div>
      <MapContainer
        center={center}
        zoom={13.5}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {path.length > 0
          ? path.map((loc, idx) => (
              <Marker
                key={idx}
                position={[loc.lat, loc.lon]}
                icon={createIcon(idx)}
              >
                <Popup>
                  <b>{loc.name}</b>
                </Popup>
              </Marker>
            ))
          : locations.map((loc, idx) => (
              <Marker
                key={idx}
                position={[loc.lat, loc.lon]}
                icon={createIcon(idx)}
              >
                <Popup>
                  <b>{loc.name}</b>
                </Popup>
              </Marker>
            ))}
        {path.length > 0 && (
          <Polyline positions={path.map((p) => [p.lat, p.lon])} color="blue" />
        )}
      </MapContainer>
      <button onClick={handleFindPath}>Find Shortest Path</button>
    </div>
  );
};

export default Map;
