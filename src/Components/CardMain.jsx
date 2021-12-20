import React from "react";

const CardMain = ({id, max, min, pressure, humidity, latitud, longitud}) => {
  return (
    <div>
      <div key={id}>
        <div>
          <p>Max</p>
          <p>{Math.round(max)}</p>
          <p>Min</p>
          <p>{Math.round(min)}</p>
        </div>
        <div>
          <p>Pressure</p>
          <p>{pressure} hPa</p>
          <p>Humidity</p>
          <p>{humidity} %</p>
        </div>
        <div>
          <p>Latitud</p>
          <p>{latitud}</p>
          <p>Longitud</p>
          <p>{longitud}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
