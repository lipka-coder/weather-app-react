import React from "react";

export default function Forecast (){
  let forecastData = {
    temperatureMax: 17,
    temperatureMin: 15,
    day: "Sat",
    date: "Jul 17",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div>
      <div className="row row-cols-5">
        <div className="card" style={{"width" : "7rem"}}>
          <div className="card-body">
            <p className="card-text">
              {forecastData.day} <br />
              {forecastData.date}
            </p>
            <img
              src={forecastData.imgUrl}
              alt=""
              width="42"
            />        
            <p className="card-text-2"><span className="weather-forecast-temperature-max">{forecastData.temperatureMax}°</span> <span className="weather-forecast-temperature-min">{forecastData.temperatureMin}°</span></p>
          </div>
        </div>

        <div className="card" style={{"width" : "7rem"}}>
          <div className="card-body">
            <p className="card-text">
              {forecastData.day} <br />
              {forecastData.date}
            </p>
            <img
              src={forecastData.imgUrl}
              alt=""
              width="42"
            />        
            <p className="card-text-2"><span className="weather-forecast-temperature-max">{forecastData.temperatureMax}°</span> <span className="weather-forecast-temperature-min">{forecastData.temperatureMin}°</span></p>
          </div>
        </div>

        <div className="card" style={{"width" : "7rem"}}>
          <div className="card-body">
            <p className="card-text">
              {forecastData.day} <br />
              {forecastData.date}
            </p>
            <img
              src={forecastData.imgUrl}
              alt=""
              width="42"
            />        
            <p className="card-text-2"><span className="weather-forecast-temperature-max">{forecastData.temperatureMax}°</span> <span className="weather-forecast-temperature-min">{forecastData.temperatureMin}°</span></p>
          </div>
        </div>

        <div className="card" style={{"width" : "7rem"}}>
          <div className="card-body">
            <p className="card-text">
              {forecastData.day} <br />
              {forecastData.date}
            </p>
            <img
              src={forecastData.imgUrl}
              alt=""
              width="42"
            />        
            <p className="card-text-2"><span className="weather-forecast-temperature-max">{forecastData.temperatureMax}°</span> <span className="weather-forecast-temperature-min">{forecastData.temperatureMin}°</span></p>
          </div>
        </div>

        <div className="card" style={{"width" : "7rem"}}>
          <div className="card-body">
            <p className="card-text">
              {forecastData.day} <br />
              {forecastData.date}
            </p>
            <img
              src={forecastData.imgUrl}
              alt=""
              width="42"
            />        
            <p className="card-text-2"><span className="weather-forecast-temperature-max">{forecastData.temperatureMax}°</span> <span className="weather-forecast-temperature-min">{forecastData.temperatureMin}°</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}