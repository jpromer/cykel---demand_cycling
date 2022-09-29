import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://169.51.195.102";

export const BIKES = "BIKES";
export const LOCATIONS = "LOCATIONS";

export const Bike = (bikes) => {
  return {
    type: BIKES,
    payload: { bikes: bikes }
  };
};

export const locations = (locations) => {
  return {
    type: LOCATIONS,
    payload: { locations: locations }
  };
};

export const getBikes = () => {
  return (dispatch) => {
    axios
      .get(`${URL}:30631/api/bike`)
      .then((res) => {
        dispatch(Bike(res.data));
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Servicio no disponible",
          showConfirmButton: false,
          timer: 2500
        });
      });
  };
};

export const postBike = (body) => {
  return (dispatch) => {
    axios
      .post(`${URL}:30232/send_bike`, JSON.parse(JSON.stringify(body)), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Bicicleta añadida",
          showConfirmButton: false,
          timer: 2500
        }).then(() => {
          dispatch(getBikes());
        });
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        console.log(errorObject);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Servicio no disponible",
          showConfirmButton: false,
          timer: 2500
        });
      });
  };
};

export const deleteBike = (id) => {
  return (dispatch) => {
    axios
      .delete(`${URL}:30631/api/bike/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Bicicleta eliminada satisfactoriamente",
          showConfirmButton: false,
          timer: 2500
        }).then(() => {
          dispatch(getBikes());
          dispatch(deleteLocation(id));
        });
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        console.log(errorObject);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Servicio no disponible",
          showConfirmButton: false,
          timer: 2500
        });
      });
  };
};

export const deleteLocation = (id) => {
  return (dispatch) => {
    axios
      .delete(`${URL}:31924/api/location/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then((res) => {
        console.log("eliminado");
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        console.log(errorObject);
      });
  };
};

export const updateBikes = (id, body) => {
  return (dispatch) => {
    axios
      .put(`${URL}:30631/api/bike/${id}`, JSON.parse(JSON.stringify(body)), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Bicicleta actualizada",
          showConfirmButton: false,
          timer: 2500
        }).then(() => {
          dispatch(getBikes());
        });
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Servicio no disponible",
          showConfirmButton: false,
          timer: 2500
        });
      });
  };
};

export const updateLocation = (id, body) => {
  return (dispatch) => {
    axios
      .put(
        `${URL}:31924/api/location/${id}`,
        JSON.parse(JSON.stringify(body)),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then((res) => {
        console.log("Ubicación actulizada");
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        console.log(errorObject);
      });
  };
};

export const postRental = (body) => {
  return (dispatch) => {
    axios
      .post(`${URL}:30232/rental`, JSON.parse(JSON.stringify(body)), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Bicicleta rentada",
          showConfirmButton: false,
          timer: 2500
        }).then(() => {
          dispatch(getBikes());
        });
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        console.log(errorObject);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Servicio no disponible",
          showConfirmButton: false,
          timer: 2500
        });
      });
  };
};

export const getLocations = () => {
  return (dispatch) => {
    axios
      .get(`${URL}:31924/api/location`)
      .then((res) => {
        dispatch(locations(res.data));
      })
      .catch((error) => {
        let errorObject = JSON.parse(JSON.stringify(error));
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Servicio no disponible",
          showConfirmButton: false,
          timer: 2500
        });
      });
  };
};
