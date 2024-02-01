const DisplayNumbers = ({ query, persons }) => {
  return (
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
              return regex.test(x.name);
            })
            .map((x) => (
              <li key={x.name}>
                {x.name} {x.number}
              </li>
            ))}
    </ul>
  );
};

export default DisplayNumbers;
