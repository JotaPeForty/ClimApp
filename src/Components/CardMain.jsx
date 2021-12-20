import React from "react";

const CardMain = ({id, max, min, pressure, humidity, latitud, longitud}) => {
  return (
    <div>
      <div key={id}>
        <div>
          <p>Max</p>
          <p>{max}</p>
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div>
          <p>Pressure</p>
          <p>{pressure}</p>
          <p>Humidity</p>
          <p>{humidity}</p>
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
