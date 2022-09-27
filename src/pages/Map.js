import React from "react";
import MapView from "../components/Map/MapView";

export default function Map() {
  const position = [51.505, -0.09];
  return (
    <div>
      <MapView />
    </div>
  );
}
