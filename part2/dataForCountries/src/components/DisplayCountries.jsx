const DisplayCountries = ({ countries, value }) => {
  if (countries) {
    return (
      <ul>
        {countries
          .filter((x) =>
            x.name.common.toLowerCase().includes(value.toLowerCase())
          )
          .map((y) => (
            <li>{y.name.official}</li>
          ))}
      </ul>
    );
  }
};

export default DisplayCountries;
