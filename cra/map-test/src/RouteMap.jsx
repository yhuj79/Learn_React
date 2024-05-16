/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function RouteMap(props) {
  const originCoords = "37.462292, 127.017890";
  const destinationCoords = "37.438014, 126.906014";

  return (
    <div>
      <iframe
        width={"100%"}
        height={"500px"}
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDkxEIB9hXXDl22MDj7KQmv3Wr9sUh_A6g&origin=${originCoords}&destination=${destinationCoords}&mode=transit&zoom=13`}
      />
    </div>
  );
}

export default RouteMap;
