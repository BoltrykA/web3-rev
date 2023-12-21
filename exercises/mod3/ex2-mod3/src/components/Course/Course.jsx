import Header from "components/Header/Header.jsx";
import Content from "components/Content/Content.jsx";
import Total from "components/Total/Total.jsx";

const Course = ({course}) => {
    const sumExercises = course.parts.reduce((acc, part) => acc + part.exercises, 0);
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total total={sumExercises}/>
        </div>
    )
}

export default Course;