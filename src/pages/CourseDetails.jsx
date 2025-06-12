import { useContext } from "react";
import { courses } from "../data/courses";
import { Link, useParams } from "react-router";
import { RegistrationContext } from "../contexts/RegistrationContext";

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.courseId === courseId);

  const { registeredCourses } = useContext(RegistrationContext);
  const alreadyRegistered = registeredCourses.some(
    (registeredCourse) => registeredCourse.courseId === course.courseId
  );

  return (
    <>
      <h1 className="my-4">Course Details</h1>
      <article className="card shadow-sm">
        <div className={`card-header ${alreadyRegistered ? "bg-success" : ""}`}>
          {alreadyRegistered ? (
            <>
              <i className="fa-solid fa-circle-check me-2"></i>Registered
            </>
          ) : (
            course.level
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{course.courseName}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {course.duration}
          </h6>
          <p className="card-text mb-4">{course.longDescription}</p>
          <Link to="/courses" className="btn btn-outline-primary">
            <i className="fa-solid fa-arrow-left me-2"></i>Back to Courses
          </Link>
          <Link
            to={`/register/${course.courseId}`}
            className="btn btn-primary mx-2"
          >
            <i className="fa-solid fa-address-card me-2"></i>Registration
          </Link>
        </div>
      </article>
    </>
  );
}

export default CourseDetails;
