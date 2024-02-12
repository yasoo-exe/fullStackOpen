import { useLayoutEffect, useState } from "react";
import "./CountriesList.css";
import CountryDetails from "./CountryDetails";

export default function CountriesList({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />;
  }
  if (selectedCountry) {
    return (
      <div>
        <CountryDetails country={selectedCountry} />
        <button onClick={() => setSelectedCountry(null)}>
          Back to List Preview
        </button>
      </div>
    );
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>
          <span>{country.name.common}</span>
          <button onClick={() => setSelectedCountry(country)}>
            View Details
          </button>
        </li>
      ))}
    </ul>
  );
}
