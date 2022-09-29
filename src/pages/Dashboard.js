import React, { useState, useEffect } from "react";
import LogoutButton from "../components/Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../styles/dashboard.scss";

import { useDispatch, useSelector } from "react-redux";
import { getBikes, getLocations } from "../redux/actions/bikes.action";
import CardBike from "../components/Cards/CardBike";

import Button from "@mui/material/Button";

function Dashboard() {
  const dispatch = useDispatch();
  const bikeList = useSelector((state) => state.bikeReducer.bikes);


  useEffect(() => {
    dispatch(getBikes());
  }, []);

  return (
    <div className="containerDashboar">
      <h1 className="containerDashboar__title">Bienvenido a cykel</h1>
      <div className="containerDashboar__contentCard">
        {bikeList.map((list) => {
          return <CardBike bikes={list}  key={list.idBike}/>;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
