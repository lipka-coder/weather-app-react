import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props){
    function maxTemperature(){
    	let temperature = Math.round(props.data.temp.max);
			return `${temperature}°`;
    }

		function minTemperature(){
    	let temperature = Math.round(props.data.temp.min);
			return `${temperature}°`;
    }

		function day(){
			let date = new Date (props.data.dt * 1000);
			let day= date.getDay();

			let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

			return days[day];
		}

		function month(){
			let date = new Date (props.data.dt * 1000);
    	let month = date.getMonth();

			let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

			return months[month];
		}

		function monthDate(){
			let date = new Date (props.data.dt * 1000);
			let monthDate = date.getDate();

			return monthDate;
		}

    return (
        <div>
           <p className="card-text">
                {day()} <br />
                {month()} {monthDate()}
              </p>
              <WeatherIcon code={props.data.weather[0].icon} size={54}/>
              <p className="card-text-2">
                <span className="weather-forecast-temperature-max">
									{maxTemperature()}
                </span> 
                <span className="weather-forecast-temperature-min">
                   {minTemperature()}
                </span>
              </p> 
        </div>
    )
}