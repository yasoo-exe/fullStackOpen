import axios from "axios";

const getWeather = (country) => {
  const api_key = import.meta.env.VITE_SOME_KEY;
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${country[0]}&lon=${country[1]}&units=metric&appid=${api_key}`;

  return axios.get(requestURL).then((response) => {
    return response.data;
  });
};

export { getWeather };
