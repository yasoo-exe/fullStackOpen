const express = require("express");
const app = express();
app.use(express.json());

let persons = [
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

//get whole persons
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

//get length of data at current time
app.get("/info", (request, response) => {
  const dataToRetun = `<p>persons contains ${
    persons.length
  } people</p> <p>${new Date()}</p>`;
  response.send(dataToRetun);
});

//get individual contact
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = persons.find((contact) => contact.id === id);
  contact
    ? response.json(contact)
    : response
        .status(404)
        .send("<h1 style='color: red;'>Contact Not Found</h1>");
});

//delete individual contact
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((contact) => contact.id !== id);
  response.status(204).end();
});

//add contact
app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name is missing!",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "number is missing!",
    });
  } else if (
    persons.filter((contact) => contact.name === body.name).length > 0
  ) {
    return response.status(400).json({
      error: "the contact already exists",
    });
  } else {
    const contact = {
      id: Math.floor(Math.random() * 9999999999999),
      name: body.name,
      number: body.number,
    };
    persons.concat(contact);
    return response.json(contact);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("server is running");
});
