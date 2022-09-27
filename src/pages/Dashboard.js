import React, { useState, useEffect } from "react";
import LogoutButton from "../components/Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../styles/dashboard.scss";

import { useDispatch, useSelector } from "react-redux";
import { getBikes } from "../redux/actions/bikes.action";
import CardBike from "../components/Cards/CardBike";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function Dashboard() {
  const [bikes, setBike] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBikes());
  }, [bikes]);

  return (
    <div className="containerDashboar">
      <Box>
        <h1 className="containerDashboar__title">Bienvenido a cykel</h1>

        <CardBike bikes={bikes} />
      </Box>
    </div>
  );
}

export default Dashboard;
