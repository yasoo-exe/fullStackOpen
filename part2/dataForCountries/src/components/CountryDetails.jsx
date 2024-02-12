export default function CountryDetails({ country }) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <h3>Official Name: </h3>
        <em>{country.name.official}</em>
      </div>
      <div>
        <img src={country.flags.svg} />
      </div>
      <div>
        <h3>Capital: </h3>
        <em>{country.capital}</em>
      </div>
      <div>
        <h3>Area: </h3>
        <em>{country.area}</em>
      </div>
      <div>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
