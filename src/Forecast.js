import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js"

export default function Forecast (props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

  function handleResult(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded){
    return (
      <div>
        <div className="row row-cols-5">
          {forecast.map(function(dailyForecast, index){
            if (index < 5) {
              return (
                <div className="card" style={{"width" : "7rem"}}>
                  <div className="card-body" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }else{
    let apiKey =`08c89d7c2dd394c882a212087337db19`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResult);

    return null;
  }
}