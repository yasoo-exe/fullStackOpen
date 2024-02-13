import axios from "axios";

const getAllCountries = () => {
  return axios
    .get("http://localhost:3001/countries")
    .then((response) => response.data);
};

export { getAllCountries };
