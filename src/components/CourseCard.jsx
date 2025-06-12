import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import { Link } from "react-router";

function CourseCard({ course }) {
  const { registeredCourses } = useContext(RegistrationContext);
  const alreadyRegistered = registeredCourses.some(
    (registeredCourse) => registeredCourse.courseId === course.courseId
  );
  return (
    <div className="card shadow-sm h-100">
      <div className={`card-header ${alreadyRegistered ? "bg-success" : ""}`}>
        {alreadyRegistered ? "Registered" : course.level}
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.courseName}</h5>
        <p className="card-text flex-grow-1">{course.shortDescription}</p>
        <Link
          to={`/courses/${course.courseId}`}
          className="btn btn-primary mt-auto"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
