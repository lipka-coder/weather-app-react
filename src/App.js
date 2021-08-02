import './App.css';

import React, {useState} from "react";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response){
		console.log(response.data);
		setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      day: `Wednesday, 12:43`,
      date: `Aug 3rd`,
    });
	}
    
  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6" id="weather-today">
              <h2>
                <img src={weatherData.icon} id="icon" alt="sun"/>
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
                {Math.round(weatherData.temperature)}
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

          <form id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                id="type-city"
                placeholder="Type a city..."
                className="form-control"
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
        </form>
  
          <p className="weather-gods">
            Weather Gods predict in the next 5 days:
          </p>

          <Forecast />
    
          </div>;
          <Footer />
          </div>
      ); 
    }else{
      let apiKey = "08c89d7c2dd394c882a212087337db19"; 
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse); 

      return "Loading..."
    }
}
