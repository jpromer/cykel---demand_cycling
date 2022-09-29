import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapView from "../components/Map/MapView";
import { getLocations } from "../redux/actions/bikes.action";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Map() {
  const dispatch = useDispatch();
  const [marker, setMarker] = useState();

  const marks = useSelector((state) => state.bikeReducer.locations);

  useState(() => {
    dispatch(getLocations());
  }, []);

  return (
    <div>
      <MapView marks={marks} />
    </div>
  );
}
