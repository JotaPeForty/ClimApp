import React from "react";
import { WiCelsius, WiHumidity } from "react-icons/wi";
import "../Sass/CardMain.scss";

const CardMain = ({ id, max, min, pressure, humidity, latitud, longitud, wind, clouds }) => {
  return (
    <div className="cardmain">
      <div key={id} className="divm">
        <div className="tempm">
          <div>
            <h4>Extended</h4>
          </div>
          <div className="tempm2">
            <p>
            
              {Math.round(max)}
              <WiCelsius />
            </p>
            <p>
              {Math.round(min)}
              <WiCelsius />
            </p>
          </div>
        </div>
        <div className="prehu">
          <h4>Pressure</h4>
          <p>{pressure} hPa</p>
          <h4>Humidity</h4>
          <p>
            {humidity} <WiHumidity />
          </p>
        </div>
        <div className="prehu">
          <h4>Wind</h4>
          <p>{Math.round(wind)}</p>
          <h4>Clouds</h4>
          <p>{clouds}</p>
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
