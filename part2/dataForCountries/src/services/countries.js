import axios from "axios";

const getAllCountries = () => {
  console.log("fetching data...");
  return axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then((response) => {
      console.log("data fetched successfully!");
      return response.data;
    })
    .catch((error) => console.error(error));
};

export { getAllCountries };
