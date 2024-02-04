import { useState, useEffect } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import DisplayNumbers from "./components/DisplayNumbers";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setNewQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addContact = (event) => {
    event.preventDefault();
    if (persons.filter((x) => x.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook!`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat([{ name: newName, number: newNumber }]));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleSearchChange = (event) => {
    setNewQuery(event.target.value);
  };

  const handleDataChange = (event) => {
    event.target.id === "name"
      ? setNewName(event.target.value)
      : setNewNumber(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Search query={query} onSmash={handleSearchChange} />
      <h2>Add a new number</h2>
      <Form
        onEnter={addContact}
        onType={handleDataChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <DisplayNumbers query={query} persons={persons} />
    </div>
  );
};

export default App;
