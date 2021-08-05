import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props){
    return (
    <div>
        <div className="row">
            <div className="col-sm-6" id="weather-today">
              <h2>
                <img src={props.data.icon} id="icon" alt="sun"/>
              </h2>
                <h3 className="description">
                  {props.data.description}
                </h3>
                  <ul>
                    <li id="humidity">
                      Humidity: {props.data.humidity}%
                    </li>
                      <br />
                    <li id="wind">
                      Wind: {props.data.wind}mp/h
                    </li>
                  </ul>
              </div>

            <div className="col-sm-6" id="weather-city">
              <h3 id="city-name">
                {props.data.city}
              </h3>
              <h1>
                <span className="temperature" id="temperature">
                {Math.round(props.data.temperature)}
                </span>
                <span className="units">
                  <a href="/" id="celsius-link" className="active">°C</a> | <a href="/" id="fahrenheit-link">°F</a>
                </span>
              </h1>
              <h5 id="day-time">
                <FormattedDate date={props.data.day} />
              </h5>
            </div>
        </div>
    </div>
    )
}