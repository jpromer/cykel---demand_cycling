import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import "../../styles/card.scss";
import { List } from "@mui/material";
import ModalForm from "../Modal/ModalForm";
import {
  deleteBike,
  getBikes,
  postRental
} from "../../redux/actions/bikes.action";

export default function CardBike(props) {
  const [bikesarray, setBikearray] = useState([]);

  const bikes = useSelector((state) => state.bikeReducer.bikes);
  const dispatch = useDispatch();



  useEffect(() => {
    setBikearray(props.bikes);
  }, [props.bikes]);

  const handleDelete = (id) => {    
    dispatch(deleteBike(id));
  };

  const handleAlquilar = (id) => {
    let body = {
      idBike: id,
      dateInitial: "2022-03-15",
      dateFinished: "2022-03-15",
      state: "alquilada"
    };
    dispatch(postRental(body));
  };

  return (
    <div >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN76cAKHLOo2Mt9eQHUGtUNQ1XFBGMX1vMw0PMqBm&s"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {bikesarray.idBike}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            Color: {bikesarray.color} <br />
            Modelo: {bikesarray.model} <br />
            Latitud: {bikesarray.latitud} <br />
            Longitud: {bikesarray.longitud}
          </Typography>
        </CardContent>
        <CardActions>
          {bikesarray.state === "alquilada" ? (
            <Button variant="contained" disabled>
              Alquilada
            </Button>
          ) : (
            <Button
              variant="contained"
              color="info"
              onClick={() => handleAlquilar(bikesarray.idBike)}
            >
              Alquilar
            </Button>
          )}

          <ModalForm bike={bikesarray}  />
          <Fab
            size="small"
            color="error"
            aria-label="error"
            onClick={() => handleDelete(bikesarray.idBike)}
          >
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    </div>
  );
}
