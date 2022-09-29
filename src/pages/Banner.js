import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Sniper/Loading";
import InformationBanner from "../components/BlocksInformation/InformationBanner";
import "../styles/banner.scss";
import { useSelector } from "react-redux";

export default function Banner() {
  const { isLoading } = useAuth0();
  const isAuth = useSelector((state) => state.loginReducer.isAuthenticated);
  const snippet = () => {
    return (
      <div className="board_sniper">
        <Loading />
      </div>
    );
  };

  return <div>{(isLoading && !isAuth) ? snippet() : <InformationBanner />}</div>;
}
