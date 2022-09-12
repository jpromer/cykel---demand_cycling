import { USERLOGIN } from "../actions/login.actions";

const loginState = { user: [], isAuthenticated: false };

export default (state = loginState, action) => {
  switch (action.type) {
    case USERLOGIN:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };

    default:
      return state;
  }
};
