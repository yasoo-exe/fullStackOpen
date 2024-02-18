import { getWeather } from "../services/weather";
import React, { useState, useEffect } from "react";

const Nation = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(country.latlng)
      .then((response) => setWeather(response))
      .catch((error) => console.log("an error has occurred, shit!", error));
  }, []);

  return (
    <div>
      <h2 style={{ color: "yellow" }}>{country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <p>Capital: {country.capital}</p>
      <img
        src={country.flags.svg}
        alt={`flag of ${country.name.common}`}
        width={300}
        height={100}
      />
      <p>Area: {country.area}</p>
      <div>
        Languages:{" "}
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      {weather ? (
        <div>
          <h2 style={{ color: "yellow" }}>Weather in {country.capital}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <p>Temperature: {weather.main.temp} &deg;C </p>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "yellow" }}>Weather in {country.capital}</h2>
          <p>
            If you're seeing this message, it means that I've exceeded the quota
            limit for my API calls and hence, the weather data is unavailable
            for sometime
          </p>
        </div>
      )}
    </div>
  );
};

export default Nation;
