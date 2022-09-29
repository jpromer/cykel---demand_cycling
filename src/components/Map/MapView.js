import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LocationMarker,
  useMapEvents
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../redux/actions/bikes.action";
import { LocationIcon } from "./LocationIcon";

export default function MapView(props) {
  const styleMap = { width: "100%", height: "100vh" };
  const [position, setPosition] = useState([]);
  const dispatch = useDispatch();
  const marks = useSelector((state) => state.bikeReducer.locations);

  useEffect(() => {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function (positiona) {
        setPosition([positiona.coords.latitude, positiona.coords.longitude]);
      });

      dispatch(getLocations());
    }
  }, [navigator.geolocation]);

  console.log(position);
  return (
    position.length !== 0 && (
      <MapContainer
        style={styleMap}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors'
        />
        {marks.map((mark) => {
          return (
            <Marker
              position={[mark.latitud, mark.longitud]}
              icon={LocationIcon}
            >
              <Popup>{mark.idBike}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    )
  );
}
