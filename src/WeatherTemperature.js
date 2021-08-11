import React, {useState} from "react";

export default function WeatherTemperature (props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius (event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
    return (
        <span>
            <span className="temperature" id="temperature">
                {Math.round(props.celsius)}
            </span>
            <span className="units">
                <a href="/" id="celsius-link" className="active">
                    °C
                </a> | 
                <a href="/" id="fahrenheit-link" onClick={convertToFahrenheit}>
                    °F
                </a>
            </span>
        </span>
    )
} else {
    let fahrenheit = (props.celsius * 9/5) +32;
    return (
        <span>
            <span className="temperature" id="temperature">
                {Math.round(fahrenheit)}
            </span>
            <span className="units">
                <a href="/" id="celsius-link" onClick={convertToCelsius}>
                    °C
                </a> | 
                <a href="/" id="fahrenheit-link" className="active">
                    °F
                </a>
            </span>
        </span>
    )
}
}