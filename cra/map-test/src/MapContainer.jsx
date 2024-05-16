import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

function Directions(props) {
  const [directions, setDirections] = useState();
  const { origin, destination } = props;
  const count = useRef(0);

  const options = {
    polylineOptions: {
      strokeColor: "red",
      strokeWeight: 8,
      strokeOpacity: 0.8,
    },
  };

  useEffect(() => {
    count.current = 0;
    console.log(origin, destination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin.lat, origin.lng, destination.lat, destination.lng]);

  function directionsCallback(result, status) {
    console.log(result, status);
    if (status === "OK" && count.current === 0) {
      count.current += 1;
      setDirections(result);
    }
  }

  return (
    <>
      <DirectionsService
        options={{ origin, destination, travelMode: "TRANSIT" }}
        callback={directionsCallback}
      />
      <DirectionsRenderer directions={directions} options={options} />
    </>
  );
}

function MapContainer(props) {
  const { pointA, pointB } = props;
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDkxEIB9hXXDl22MDj7KQmv3Wr9sUh_A6g" // 여기에 발급받은 API 키를 넣습니다.
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={pointA ? { lat: 37.579779, lng: 126.976955 } : undefined}
      >
        <Directions origin={pointA} destination={pointB} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
