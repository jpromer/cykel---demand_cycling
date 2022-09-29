import { BIKES, LOCATIONS } from "../actions/bikes.action";

const bikeState = { bikes: [], locations: [] };

export default (state = bikeState, action) => {
  switch (action.type) {
    case BIKES:
      return {
        ...state,
        bikes: action.payload.bikes
      };

    case LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations
      };

    default:
      return state;
  }
};
