const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = ({ info }) => {
  const [part1, part2, part3] = info;
  return (
    <div>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </div>
  );
};

const Total = ({ info }) => {
  const [part1, part2, part3] = info;
  return (
    <p>
      Number of exercises {part1.exercises + part2.exercises + part3.exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content info={parts} />
      <Total info={parts} />
    </>
  );
};

export default App;
