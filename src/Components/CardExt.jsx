import React from "react";

const CardExt = ({id, wind, clouds}) => {
  return (
    <div>
      <div key={id}>
        <div>
          <p>Wind</p>
          <p>{wind}</p>
          <p>Clouds</p>
          <p>{clouds}</p>
        </div>
      </div>
    </div>
  );
};

export default CardExt;
