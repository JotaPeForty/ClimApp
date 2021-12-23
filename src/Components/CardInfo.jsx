import React from "react";
import { WiCelsius } from "react-icons/wi";
import "../Sass/CardInfo.scss";

const CardInfo = ({id, name, actual, img, sensacion, description}) => {
  return (
    <div className="cardinfo">
      <div key={id} className="div">
          <div className="city"><h1>{name}</h1></div>
          <div className="descrip">
          <h1>{description}</h1>
          <img 
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          width="200"
          height="200"
          alt="icon"/>
          </div>
          <div className="temp">
          <h1>{Math.round(actual)}<WiCelsius/></h1>
          <h1>ST:{Math.round(sensacion)}<WiCelsius/></h1>
          </div>
      </div>
    </div>
  );
};

export default CardInfo;
