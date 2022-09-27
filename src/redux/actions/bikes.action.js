import axios from "axios";

const URL = "http://169.51.195.102";

export const BIKES = "BIKES";

export const Bike = (bikes) => {
  return {
    type: BIKES,
    payload: { bikes: bikes }
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
      });
  };
};
