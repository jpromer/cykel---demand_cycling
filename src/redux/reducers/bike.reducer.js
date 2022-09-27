import { BIKES } from "../actions/bikes.action";

const bikeState = { bikes: [] };

export default (state = bikeState, action) => {
  switch (action.type) {
    case BIKES:
      return {
        ...state,
        bikes: action.payload.bikes
      };

    default:
      return state;
  }
};
