import React from "react";
import LoginButton from "../Login/LoginButton";
import imgLateral from "../../assets/ciclista_fondo.png";
import "../../styles/blockinfo.scss";


export default function InformationBanner() {
  return (
    <div className="blockInformation">
      <div className="blockInformation__img">
        
      </div>
      <div className="blockInformation__info">
        <div>
          <h1>CYKEL</h1>
          <p>
            Tu mente te dirá que pares cuando en realidad te quiere decir que
            pares de quejarte porque tus piernas pueden con esto y más.
          </p>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
