import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "ali", number: 88 }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

  const handleChange = (event) => {
    event.target.id === "name"
      ? setNewName(event.target.value)
      : setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name:{" "}
          <input
            onChange={handleChange}
            value={newName}
            id="name"
            type="text"
          />
        </div>
        <div>
          number:{" "}
          <input
            onChange={handleChange}
            value={newNumber}
            id="number"
            type="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
