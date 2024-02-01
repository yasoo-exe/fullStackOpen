import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "ali", number: 88 }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setNewQuery] = useState("");

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
      <label htmlFor="search">
        search for a number:{" "}
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={handleSearchChange}
        />
      </label>
      <h2>Add a new number</h2>
      <form onSubmit={addContact}>
        <div>
          name:{" "}
          <input
            onChange={handleDataChange}
            value={newName}
            id="name"
            type="text"
            required
          />
        </div>
        <div>
          number:{" "}
          <input
            onChange={handleDataChange}
            value={newNumber}
            id="number"
            type="number"
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {query === ""
          ? persons.map((person) => (
              <li key={person.name}>
                {person.name} {person.number}
              </li>
            ))
          : persons
              .filter((x) => {
                const regex = new RegExp(query, "gi");
                const contactName = x.name;
                return regex.test(contactName);
              })
              .map((x) => (
                <li key={x.name}>
                  {x.name} {x.number}
                </li>
              ))}
      </ul>
    </div>
  );
};

export default App;
