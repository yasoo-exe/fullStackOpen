import "./CountriesList.css";

export default function CountriesList({ returnedCountries }) {
  return returnedCountries.length > 10 ? (
    <ul>
      <li key={`excessiveMatches`}>Too many matches, kindly change filter</li>
    </ul>
  ) : returnedCountries.length === 1 ? (
    <div>
      <h1>{returnedCountries[0].name.common}</h1>
      <img
        src={returnedCountries[0].flags.svg}
        alt="pakistaniflag"
        style={{ maxWidth: 300, maxHeight: 300 }}
      />
      <h3>Capital: {returnedCountries[0].capital}</h3>
      <h3>Area: {returnedCountries[0].area}</h3>
      <div>
        <h3>Languages: </h3>
        {Object.values(returnedCountries[0].languages).map((x) => (
          <p>{x}</p>
        ))}
      </div>
    </div>
  ) : (
    <ul>
      {returnedCountries.map((country) => (
        <li key={country.id}>{country.name.common}</li>
      ))}
    </ul>
  );
}
