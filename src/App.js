import React, { useEffect, useState } from "react";
import "./App.scss";
import RoutesApp from "./routes";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { authentificatioUser } from "./redux/actions/login.actions";
import { getBikes } from "./redux/actions/bikes.action";

function App() {
  const [stateAuth, setStateAuth] = useState();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const isAuth = useSelector((state) => state.loginReducer.isAuthenticated);

  useEffect(() => {
    if (!isAuth && isAuthenticated) {
      dispatch(authentificatioUser(user, isAuthenticated));
    }
  }, [isAuthenticated]);

  return <div className="App">{<RoutesApp />}</div>;
}

export default App;
