import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props){
    return (
    <div>
        <div className="row">
            <div className="col-sm-6" id="weather-today">
              <h2>
                <WeatherIcon code={props.data.icon}/>
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
                <WeatherTemperature celsius={props.data.temperature} />
              </h1>
              <h5 id="day-time">
                <FormattedDate date={props.data.day} />
              </h5>
            </div>
        </div>
    </div>
    )
}