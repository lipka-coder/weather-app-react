import React, { useState } from "react";

export default function SearchNow() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(`It is 19 degrees in ${city}.`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            id="type-city"
            placeholder="Type a city..."
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <button type="submit" id="search-button">
            Search
          </button>
        </div>
        <div className="col-4">
          <button id="current-location">Current Location</button>
        </div>
      </div>
      <p>{result}</p>
    </form>
  );
}
