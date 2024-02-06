import axios from "axios";

const baseUrl = `http://localhost:3001/persons`;

const getAll = () => axios.get(baseUrl).then((response) => response.data);

const create = (noteObject) => {
  return axios.post(baseUrl, noteObject).then((response) => response.data);
};

const del = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data.id);
};

export default { getAll, create, del };
