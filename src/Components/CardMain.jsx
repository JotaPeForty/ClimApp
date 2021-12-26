import React from "react";
import { WiHumidity } from "react-icons/wi";
import "../Sass/CardMain.scss";

const CardMain = ({ id, max, min, pressure, humidity, latitud, longitud }) => {
  return (
    <div className="cardmain">
      <div key={id} className="divm">
        <div className="tempm">
          <div>
            <h4>Pronostico</h4>
          </div>
          <div className="tempm2">
            <p>
            
              {Math.round(max)}
              °C
            </p>
            <hr/>
            <p>
              {Math.round(min)}
              °C
            </p>
          </div>
        </div>
        <div className="prehu">
          <h4>Presion</h4>
          <p>{pressure} hPa</p>
          <h4>Humedad</h4>
          <p>
            {humidity} <WiHumidity />
          </p>
        </div>
        <div className="maps">
          <p>{latitud}</p>
          <p>{longitud}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
