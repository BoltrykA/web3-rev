import Header from "components/Header/Header.jsx";
import Content from "components/Content/Content.jsx";
import Total from "components/Total/Total.jsx";



const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const parts = [
    {name: part1, exercises: exercises1},
    {name: part2, exercises: exercises2},
    {name: part3, exercises: exercises3}
  ];

  const sumExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
        <h1>Greetings</h1>
        <Header course={course} />
        <Content parts={parts}/>
        <Total total={sumExercises}/>
    </div>
  );
};

export default App;