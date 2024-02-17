import { useState, useEffect } from "react";
import Nation from "./Nation";

const DisplayCountries = ({ countries, value }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setSelectedCountry(null);
  }, [value]);

  if (!countries || !value) {
    return null;
  }

  const countriesToShow = countries.filter(
    (x) =>
      x.name.common.toLowerCase().includes(value.toLowerCase()) ||
      x.name.official.toLowerCase().includes(value.toLowerCase())
  );

  if (selectedCountry || countriesToShow.length === 1) {
    const country = selectedCountry || countriesToShow[0]; //sets value whichever is true
    return <Nation country={country} />;
  }

  if (countriesToShow.length > 10) {
    return (
      <ul>
        <li key={500000}>too many matches, please change filters!</li>
      </ul>
    );
  }

  if (countriesToShow.length > 1 && countriesToShow.length <= 10) {
    return (
      <ul>
        {countriesToShow.map((country) => (
          //set a country's fifa code as key since it's unique
          <li key={country.fifa}>
            {country.name.common}
            <button onClick={() => setSelectedCountry(country)}>show</button>
          </li>
        ))}
      </ul>
    );
  }
};

export default DisplayCountries;
