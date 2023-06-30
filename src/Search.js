import React from "react";
import App from "./App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  return (
    <form id="search-form">
      <input
        type="search"
        placeholder="Search for a City..."
        autocomplete="off"
        autofocus="on"
        id="search-text-input"
      />
      <input type="submit" value="Search" id="search-button" />

      <button className="custom-btn btn-1" id="locationButton">
        My location{" "}
        <span role="img" description="location">
          📍
        </span>
      </button>
    </form>
  );
}
