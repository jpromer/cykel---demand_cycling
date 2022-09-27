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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import "../../styles/card.scss";
import { List } from "@mui/material";

export default function CardBike(props) {
  const [bikesarray, setBikearray] = useState([]);

  const bikes = useSelector((state) => state.bikeReducer.bikes);

  useEffect(() => {
    setBikearray(bikes);
  }, [bikes]);

  return (
    <div className="contentCard">
      {bikesarray.map((list) => {
        return (
          <Card key={list._id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN76cAKHLOo2Mt9eQHUGtUNQ1XFBGMX1vMw0PMqBm&s"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {list.idBike}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Color: {list.color} <br />
                Modelo: {list.model} <br />
                Latitud: {list.latitud} <br />
                Longitud: {list.longitud}
              </Typography>
            </CardContent>
            <CardActions>
              {list.state === "alquilada" ? (
                <Button variant="contained" disabled>
                  Alquilada
                </Button>
              ) : (
                <Button variant="contained" color="info">
                  Alquilar
                </Button>
              )}
              <Fab  size="small" color="success" aria-label="edit">
                <EditIcon />
              </Fab>

              <Fab size="small" color="error" aria-label="error">
                <DeleteIcon />
              </Fab>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
