import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { infoCity } from "../Redux/Actions/index.js";
import "../Sass/SearchBar.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  function handleOnSearch(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(infoCity(city));
    setCity("");
  }
  console.log(city);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        type="search"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => handleOnSearch(e)}
        onKeyPress={(e) => {
          if (e.key === "13") handleOnSearch(e);
        }}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)} className="button">
        <FaExternalLinkAlt />
      </button>
    </form>
  );
}
