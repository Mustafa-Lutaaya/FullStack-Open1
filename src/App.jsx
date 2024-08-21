const Header = ({ course }) => {
  return <h1>{course}</h1>;
};


const Part = ({ partName, exercises }) => {
  return (
    <p>
      {partName} {exercises}
    </p>
  );
};


const Content = ({ parts }) => {
  return(
    <div>
      {parts.map((part, index) => (
        <Part key={index} partName={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};


const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7},
    { name: 'State of a component', exercises: 14 },
  ];

  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return(
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={total} />
    </div>
  );
};

export default App;