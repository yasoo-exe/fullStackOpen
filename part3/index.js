const express = require("express");
const app = express();
app.use(express.json());

let phonebook = [
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

//get whole phonebook
app.get("/api/phonebook", (request, response) => {
  response.json(phonebook);
});

//get length of data at current time
app.get("/info", (request, response) => {
  const dataToRetun = `<p>Phonebook contains ${
    phonebook.length
  } people</p> <p>${new Date()}</p>`;
  response.send(dataToRetun);
});

//get individual contact
app.get("/api/phonebook/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = phonebook.find((contact) => contact.id === id);
  contact
    ? response.json(contact)
    : response
        .status(404)
        .send("<h1 style='color: red;'>Contact Not Found</h1>");
});

//delete individual contact
app.delete("/api/phonebook/:id", (request, response) => {
  const id = Number(request.params.id);
  phonebook = phonebook.filter((contact) => contact.id !== id);
  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("server is running");
});
