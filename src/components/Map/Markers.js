import React from "react";
import { Marker } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import MarkerPopup from "./MarkerPopup";

const Markers = (props) => {
  const { locations } = props;
  const markers = locations.map((location, i) => (
    <Marker key={i} position={location.geometry} icon={LocationIcon}>
      <MarkerPopup data={location} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default Markers;
