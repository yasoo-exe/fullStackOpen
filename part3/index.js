const express = require("express");
const app = express();
app.use(express.json());

const phonebook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/phonebook", (request, response) => {
  response.json(phonebook);
});

app.get("/info", (request, response) => {
  const dataToRetun = `<p>Phonebook contains ${
    phonebook.length
  } people</p> <p>${new Date()}</p>`;
  response.send(dataToRetun);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("server is running");
});
