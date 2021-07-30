import logo from './logo.svg';
import './App.css';

import React from "react";
import Forecast from "./Forecast.js";
import SearchWeather from "./SearchWeather.js";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 14,
    day: "Friday, 20:34",
    date: "Jul 16",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Sunny",
    humidity: 45,
    wind: 1,
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6" id="weather-today">
          <h2>
            <img src={weatherData.imgUrl} id="icon" alt="sun"/>
          </h2>
            <h3 className="description">
              {weatherData.description}
            </h3>
              <ul>
                <li id="humidity">
                  Humidity: {weatherData.humidity}%
                </li>
                  <br />
                <li id="wind">
                  Wind: {weatherData.wind}mp/h
                </li>
              </ul>
          </div>

        <div className="col-sm-6" id="weather-city">
          <h3 id="city-name">
            {weatherData.city}
          </h3>
          <h1>
            <span className="temperature" id="temperature">
            {weatherData.temperature}
            </span>
            <span className="units">
              <a href="/" id="celsius-link" className="active">°C</a> | <a href="/" id="fahrenheit-link">°F</a>
            </span>
          </h1>
          <h5 id="day-time">
            {weatherData.day}
            <br />
            {weatherData.date}
          </h5>
        </div>
      </div>

      <SearchWeather />
  
      <p className="weather-gods">
        Weather Gods predict in the next 5 days:
      </p>

      <Forecast />

    </div>
  );
}
