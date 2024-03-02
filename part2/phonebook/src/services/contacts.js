import axios from "axios";

const baseUrl = `http://localhost:3001/api/persons`;

const getAll = () => axios.get(baseUrl).then((response) => response.data);

const create = (noteObject) => {
  return axios.post(baseUrl, noteObject).then((response) => response.data);
};

const del = (person) => {
  return axios
    .delete(`${baseUrl}/${person.id}`)
    .then((response) => response.data);
};

const update = (changedPerson) => {
  return axios
    .put(`${baseUrl}/${changedPerson.id}`, changedPerson)
    .then((response) => response.data);
};

export default { getAll, create, del, update };
