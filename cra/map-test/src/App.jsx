import logo from "./logo.svg";
import "./App.css";
import RouteMap from "./RouteMap";
import MapContainer from "./MapContainer";

const coordA = [
  { lat: 37.487174, lng: 127.101735 },
  { lat: 37.405809, lng: 127.09525 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Map Test</h1>
      </header>
      <div style={{ width: "99vw", height: "500px" }}>
        <MapContainer
          pointA={{ lat: coordA[0].lat, lng: coordA[0].lng }}
          pointB={{ lat: coordA[1].lat, lng: coordA[1].lng }}
        />
      </div>
      <div style={{ width: "99vw", height: "500px" }}>
        <RouteMap />
      </div>
    </div>
  );
}

export default App;
