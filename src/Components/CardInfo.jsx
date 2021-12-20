import React from "react";

const CardInfo = ({id, name, actual, img, sensacion, description}) => {
  return (
    <div>
      <div key={id}>
          <div><h1>{name}</h1></div>
          <div><h1>{description}</h1></div>
          <div>
          <h1>{Math.round(actual)}°</h1>
          <h1>ST:{Math.round(sensacion)}°</h1>
          <img 
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          width="200"
          height="200"
          alt="icon"/>
          </div>
      </div>
    </div>
  );
};

export default CardInfo;
