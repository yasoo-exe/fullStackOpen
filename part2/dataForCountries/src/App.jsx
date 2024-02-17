import DisplayCountries from "./components/DisplayCountries";
import { useEffect, useState } from "react";
import { getAllCountries } from "./services/countries";

const App = () => {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    getAllCountries().then((response) => setCountries(response));
  }, []);

  return (
    <>
      <div>
        <label htmlFor="search">search for a country: </label>
        <input
          type="search"
          id="search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div>
        <DisplayCountries countries={countries} value={input} />
      </div>
    </>
  );
};

export default App;
