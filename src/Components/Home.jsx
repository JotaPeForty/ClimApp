import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import SearchBar2 from "./SearchBar2";
import CardInfo from "./CardInfo";
import "../Sass/Home.scss";

const Home = () => {
  const data = useSelector((state) => state.data);

  // let info={
  //   name:"",
  //   actual:"",
  //   img:"",
  //   description:"",
  //   max:"",
  //   min:"",
  //   pressure:"",
  //   humidity:"",
  //   id:"",
  // }

  let clima;

  if (data.length === 0) {
    clima = "earth";
  } else if (data.weather[0].main === "Clear") {
    clima = "refresh";
  } else if (data.weather[0].main === "Clouds") {
    clima = "clouds";
  } else if (data.weather[0].main === "Fog" || data.weather[0].main === "Mist") {
    clima = "niebla";
  } else if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
    clima = "rain";
  } else if (data.weather[0].main === "Snow") {
    clima = "nieve";
  }
console.log(data.name);
console.log(clima);
  return (
    <div className={clima}>
      <div>
        <div className="title">
          <h1>C l i m A p p</h1>
        </div>
        {data.length === 0 ? (
          <div>
            <SearchBar className="bar" />
          </div>
        ) : (
          <div>
            <SearchBar2 className="bar2" />
            <CardInfo
              name={data.name}
              actual={data.main.temp}
              img={data.weather[0].icon}
              description={data.weather[0].description}
              max={data.main.temp_max}
              min={data.main.temp_min}
              pressure={data.main.pressure}
              humidity={data.main.humidity}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
