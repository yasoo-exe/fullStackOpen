const Search = ({ query, onSmash }) => {
  return (
    <label htmlFor="search">
      search for a number:{" "}
      <input
        type="search"
        name="search"
        value={query}
        onChange={onSmash}
        id="search"
      />
    </label>
  );
};

export default Search;
