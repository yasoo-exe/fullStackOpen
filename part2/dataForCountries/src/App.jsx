import axios from "axios";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";

function App() {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (value) {
      getDataFromServer(value);
    }
  }, [value]);

  const getDataFromServer = (value) => {
    axios.get("http://localhost:3001/countries").then((response) => {
      const data = response.data.filter((country) => {
        return country.name.official
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setCountries(data);
    });
  };

  return (
    <>
      <label htmlFor="search">enter query: </label>
      <input
        type="search"
        id="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <CountriesList countries={countries} />
    </>
  );
}

export default App;

/*what i need to do is use the useEffect hook to get all the data from the server on page load, once i have the data loaded and stored in a state, i can then filter through it depending
on queries in the search bar and that will be much quicker since i'll have all of it stored*/
