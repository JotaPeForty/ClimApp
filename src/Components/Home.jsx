import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import CardInfo from "./CardInfo";
import CardMain from "./CardMain";
import CardExt from "./CardExt";


const Home = () => {
  const data = useSelector((state)=>state.data);

//console.log(data);

  return (
    <div>
      <div>
      <div>
        <SearchBar/>
      </div>
        <div>
        {/* <CardInfo
          name={data.name}
          actual={data.main.temp}
          img={data.weather[0].icon}
          sensacion={data.main.feels_like}
          description={data.weather[0].description}
          id={data.id}
        /> */}
        </div>
        {/* <CardMain
          max={data.main.temp_max}
          min={data.main.temp_min}
          pressure={data.main.pressure}
          humidity={data.main.humidity}
          latitud={data.coord.lat}
          longitud={data.coord.lon}
          id={data.id}
        /> */}
        {/* <CardExt wind={data.wind.speed} clouds={data.clouds.all} id={data.id} /> */}
      </div>
    </div>
  );
};

export default Home;

// min: Math.round(recurso.main.temp_min),
//max: Math.round(recurso.main.temp_max),
//actual: Math.round(recurso.main.temp),
//sensacion: Math.round(recurso.main.feels_like),
//pressure:recurso.main.pressure,
//humidity:recurso.main.humidity,
//img: recurso.weather[0].icon,
//id: recurso.id,//wind: recurso.wind.speed,//direction: recurso.wind.deg,
//name: recurso.name,//weather: recurso.weather[0].main,
//description:recurso.weather[0].description,//clouds: recurso.clouds.all,
//latitud: recurso.coord.lat,
//longitud: recurso.coord.lon,
