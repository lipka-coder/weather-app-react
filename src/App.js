import './App.css';

import React, {useState} from "react";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
		console.log(response.data);
		setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      day: new Date(response.data.dt*1000),
    });
	}

  function search(){
    let apiKey = "08c89d7c2dd394c882a212087337db19"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
  };

  function handleSubmit(event){
    event.preventDefault();
    search()
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }
    
  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <WeatherInfo data={weatherData} />
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="row">
             <div className="col-6">
              <input
                type="text"
                id="type-city"
                placeholder="Type a city..."
                className="form-control"
                onChange={handleCityChange}
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

        <Forecast coordinates={weatherData.coordinates} />
    
        </div>;
        <Footer />
      </div>
    ); 
  }else{
      search()
      return "Loading..."
    }
}
