import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import "../../styles/modal.scss";

import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import {
  postBike,
  updateBikes,
  updateLocation
} from "../../redux/actions/bikes.action";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: "1px 1px 9px 1px #c1c0c0",
  p: 4
};

export default function ModalForm(props) {
  const [open, setOpen] = useState(false);
  const [idBike, setIdBike] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [state, setState] = useState("disponle");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    let body = await {
      idBike: parseInt(idBike, 10),
      color: color,
      model: model,
      longitud: Number(longitud),
      latitud: Number(latitud),
      state: state
    };

    dispatch(postBike(body));
    handleClose();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    let body = await {
      idBike: parseInt(idBike, 10),
      color: color,
      model: model,
      longitud: Number(longitud),
      latitud: Number(latitud),
      state: state
    };
    let bodyLocation = await {
      idBike: parseInt(idBike, 10),
      longitud: Number(longitud),
      latitud: Number(latitud)
    };
    dispatch(updateBikes(idBike, body));
    dispatch(updateLocation(idBike, bodyLocation));
    handleClose();
  };

  const onBike = () => {
    console.log(props.bike.idBike);
    setIdBike(props.bike.idBike);
    setColor(props.bike.color);
    setModel(props.bike.model);
    setLatitud(props.bike.latitud);
    setLongitud(props.bike.longitud);
    setState(props.bike.state);
    setOpen(true);
  };

  return (
    <div>
      {props.typeform === "add" ? (
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          onClick={handleOpen}
        >
          REGISTRAR BICICLETA
        </Button>
      ) : (
        <Fab
          onClick={() => onBike()}
          size="small"
          color="success"
          aria-label="edit"
          sx={{ margin: "0 0 0 0.7rem" }}
        >
          <EditIcon />
        </Fab>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
                textAlign: "center",
                justifyContent: "center"
              }
            }}
            noValidate
            autoComplete="off"
          >
            <h2>Formulario acciones Cykel </h2>
            <TextField
              id="outlined-disabled"
              label="Id bicicleta"
              onChange={(e) => setIdBike(e.target.value)}
              defaultValue={idBike}
            />
            <TextField
              id="outlined-disabled"
              label="Color"
              onChange={(e) => setColor(e.target.value)}
              defaultValue={color}
            />
            <TextField
              id="outlined-disabled"
              label="Modelo"
              onChange={(e) => setModel(e.target.value)}
              defaultValue={model}
            />
            <TextField
              id="outlined-disabled"
              label="Latitud"
              onChange={(e) => setLatitud(e.target.value)}
              defaultValue={latitud}
            />
            <TextField
              id="outlined-disabled"
              label="Longitud"
              onChange={(e) => setLongitud(e.target.value)}
              defaultValue={longitud}
            />

            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              margin="1rem 0 0 0"
            >
              {props.typeform === "add" ? (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCreate}
                >
                  Añadir
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleEdit}
                >
                  Modificar
                </Button>
              )}
              <Button variant="contained" color="error" onClick={handleClose}>
                Cerrar
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
