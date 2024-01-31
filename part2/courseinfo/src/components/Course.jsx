const Course = ({ course }) => {
  //destructured the course object into three parts to reduce repititive code
  const { name, id, parts } = course;

  const total = parts.reduce((acc, curr) => {
    return (acc += curr.exercises);
  }, 0);

  return (
    <>
      <h1>{name}</h1>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name}
          <span> {part.exercises}</span>
        </p>
      ))}
      <p>
        total of <strong>{total}</strong> exercises
      </p>
    </>
  );
};

export default Course;
