import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {infoCity} from "../Redux/Actions/index.js";
import "../Sass/SearchBar2.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

 function handleOnSearch (e) {
    e.preventDefault();
    setCity(e.target.value);
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(infoCity(city));
    setCity("")
  }
console.log(setCity);
console.log(city);
  return (
    <form onSubmit={handleSubmit} className="form2">
      <input
      className="input2"
        type="search"
        placeholder="Ciudad..."
        value={city}
        onChange={(e)=>handleOnSearch(e)}
        onKeyPress={(e) => {
          if (e.key === "13") handleOnSearch(e);
        }}
      />
      <button type="submit"
        onClick={(e) => handleSubmit(e)}
        onKeyPress={(e) => {
          if (e.key === "13") handleSubmit(e);
        }}
        className="button2">
        <FaExternalLinkAlt/>
      </button>
    </form>
  );
}
