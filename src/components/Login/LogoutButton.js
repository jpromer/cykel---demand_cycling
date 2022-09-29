import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";
import { authentificatioUser } from "../../redux/actions/login.actions";
import Button from '@mui/material/Button';

export default function LogoutButton() {
  const { logout } = useAuth0();
  const dispacht = useDispatch();
  const handletLogout = () => {
    console.log("entra al boton");
    logout({ returnTo: window.location.origin });
    dispacht(authentificatioUser([], false));
  };

  return <Button onClick={() => handletLogout()}>Salir</Button>;
}
