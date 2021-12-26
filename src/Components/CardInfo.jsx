import React from "react";
import "../Sass/CardInfo.scss";

const CardInfo = ({ name, actual, img, description, max, min, pressure, humidity }) => {
  return (
    <div className="cardinfo">
      <div className="div">
        <div className="city">
          <h1>{name}</h1>
        </div>
        <div className="descrip">
          <h1>{description}</h1>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            width="150"
            height="150"
            alt="icon"
          />
        </div>
        <div className="temp">
          <div className="actual">
            <h1>{Math.round(actual)}°C</h1>
          </div>
        </div>
      </div>
      <div className="divm">
        <div className="tempm">
          <div>
            <h2>Pronóstico</h2>
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
        <div className="tempm">
          <h2>Presión</h2>
          <p>{pressure} hPa</p>
         
        </div>
        <div className="tempm">
        <h2>Humedad</h2>
          <p>
            {humidity} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
