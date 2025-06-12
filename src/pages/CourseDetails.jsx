import { courses } from "../data/courses";
import { Link, useParams } from "react-router";

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.courseId === courseId);

  return (
    <>
      <h1 className="my-4">Course Details</h1>
      <article className="card shadow-sm">
        <div className="card-header">{course.level}</div>
        <div className="card-body">
          <h5 className="card-title">{course.courseName}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {course.duration}
          </h6>
          <p className="card-text mb-4">{course.longDescription}</p>
          <Link to="/courses" className="btn btn-outline-primary">
            Back to Courses
          </Link>
          <Link
            to={`/register/${course.courseId}`}
            className="btn btn-primary mx-2"
          >
            Registration
          </Link>
        </div>
      </article>
    </>
  );
}

export default CourseDetails;
