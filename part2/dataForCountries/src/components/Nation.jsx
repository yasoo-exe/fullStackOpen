// Nation.jsx
import React from "react";

const Nation = ({ country }) => {
  console.log(Object.values(country.languages));
  return (
    <div>
      <h2>{country.name.common}</h2>
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
    </div>
  );
};

export default Nation;
