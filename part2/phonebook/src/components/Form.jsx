const Form = ({ onEnter, onType, newName, newNumber }) => {
  return (
    <form onSubmit={onEnter}>
      <div>
        name:{" "}
        <input
          onChange={onType}
          value={newName}
          id="name"
          type="text"
          required
        />
      </div>
      <div>
        number:{" "}
        <input
          onChange={onType}
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
  );
};

export default Form;
