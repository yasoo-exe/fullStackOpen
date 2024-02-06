import axios from "axios";

const DisplayNumbers = ({ query, persons, deleteContact }) => {
  // const deleteContact = (id) => {
  //   console.log("works till here", id);
  //   axios.delete(`http://localhost:3001/persons/${id}`).then((response) => {});
  // };

  return (
    <ul>
      {query === ""
        ? persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}{" "}
              <button
                onClick={() => {
                  if (window.confirm(`Do you want to delete ${person.name}`)) {
                    deleteContact(person.id);
                  }
                }}
              >
                delete
              </button>
            </li>
          ))
        : persons
            .filter((x) => {
              const regex = new RegExp(query, "gi");
              return regex.test(x.name);
            })
            .map((person) => (
              <li key={person.id}>
                {person.name} {person.number}
                <button onClick={() => deleteContact(person.id)}>delete</button>
              </li>
            ))}
    </ul>
  );
};

export default DisplayNumbers;
