import { useState, useEffect } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import DisplayNumbers from "./components/DisplayNumbers";
import contactService from "./services/contacts";
import Message from "./components/Message";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setNewQuery] = useState("");
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");

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
    const newObj = { name: newName, number: Number(newNumber) };
    if (
      persons.find(
        (contact) =>
          contact.name === newObj.name && contact.number === newObj.number
      )
    ) {
      alert(`${newName} is already added to phonebook!`);
    } else if (
      persons.find(
        (contact) =>
          contact.name === newObj.name && contact.number !== newObj.number
      )
    ) {
      if (window.confirm("replace the number with new one?")) {
        const personToUpdate = persons.find(
          (x) => x.name === newObj.name && x.number !== newObj.number
        );
        updateContact(personToUpdate);
      } else {
        return;
      }
    } else {
      contactService.create(newObj).then((returnedContact) => {
        setPersons(persons.concat([returnedContact]));
        setNewName("");
        setNewNumber("");
        setMessage(`${returnedContact.name} added successfully!`);
        setMessageStyle("success");
        setTimeout(() => {
          setMessage(null);
          setMessageStyle(null);
        }, 2000);
      });
    }
  };

  //updating
  const updateContact = (person) => {
    const changedPerson = { ...person, number: Number(newNumber) };

    contactService.update(changedPerson).then((returnedContact) => {
      setPersons(
        persons.map((person) =>
          person.id === returnedContact.id ? returnedContact : person
        )
      );
      setMessage(
        `${returnedContact.name}'s phone number updated successfully!`
      );
      setMessageStyle("success");
      setTimeout(() => {
        setMessage(null);
        setMessageStyle(null);
      }, 2000);
    });
  };

  //deletion
  const deletion = (person) => {
    contactService
      .del(person)
      .then((deletedPerson) => {
        setPersons(persons.filter((person) => person.id !== deletedPerson.id));
        setMessage(`${deletedPerson.name} has been deleted successfully!`);
        setMessageStyle("success");
        setTimeout(() => {
          setMessageStyle(null);
          setMessage(null);
        }, 2000);
      })
      .catch(() => {
        setMessageStyle("error");
        setMessage(`${person.name} has already been deleted!`);
        setTimeout(() => {
          setMessageStyle(null);
          setMessage(null);
        }, 2000);
      });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Message message={message} messageStyle={messageStyle} />
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
