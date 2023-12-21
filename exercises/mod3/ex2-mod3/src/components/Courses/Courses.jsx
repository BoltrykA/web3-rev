import Course from "components/Course/Course.jsx";

const Courses = ({courses}) => {
    return (
        <>
            <h2>Courses</h2>
            {courses.map(course => <Course key={course.id} course={course}/>)}
        </>
    )
}

export default Courses;