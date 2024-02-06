import { useState, useEffect } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import DisplayNumbers from "./components/DisplayNumbers";
import contactService from "./services/contacts";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setNewQuery] = useState("");

  //handle dynamic search/input-box change
  const handleSearchChange = (event) => {
    setNewQuery(event.target.value);
  };
  const handleDataChange = (event) => {
    event.target.id === "name"
      ? setNewName(event.target.value)
      : setNewNumber(event.target.value);
  };

  //get contacts
  useEffect(() => {
    contactService.getAll().then((initialNotes) => {
      setPersons(initialNotes);
    });
  }, []);

  //add contact
  const addContact = (event) => {
    event.preventDefault();
    const contactObject = { name: newName, number: newNumber };
    if (persons.find((x) => x.name === newName && x.number === newNumber)) {
      alert(`${newName} is already added to phonebook!`);
    } else if (
      persons.find((x) => x.name === newName && x.number !== newNumber)
    ) {
      if (window.confirm("replace the number with new one?")) {
        const personToUpdate = persons.find(
          (x) => x.name === newName && x.number !== newNumber
        );
        updateContact(personToUpdate);
      } else {
        return;
      }
    } else {
      contactService.create(contactObject).then((returnedContact) => {
        setPersons(persons.concat([returnedContact]));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  //updating
  const updateContact = (person) => {
    const changedPerson = { ...person, number: newNumber };

    contactService.update(changedPerson).then((returnedContact) => {
      setPersons(
        persons.map((person) =>
          person.id === returnedContact.id ? returnedContact : person
        )
      );
    });
  };

  //deletion
  const deletion = (id) => {
    contactService.del(id).then((deletedId) => {
      setPersons(persons.filter((person) => person.id !== deletedId));
    });
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
      <DisplayNumbers
        query={query}
        persons={persons}
        deleteContact={deletion}
      />
    </div>
  );
};

export default App;
