import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import { Link } from "react-router";

function Home() {
  const { registeredCourses } = useContext(RegistrationContext);
  return (
    <div className="container text-center">
      <h1 className="display-1 my-4">Welcome to CodeSchool</h1>
      <p className="lead">
        Start your journey to become a fulltime proffessional developer today
      </p>
      <div className="container my-5">
        <h2 className="mb-3">Your Courses</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <ul className="list-group">
              {registeredCourses.length > 0 ? (
                registeredCourses.map((registeredCourse) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-start py-3"
                    key={registeredCourse.courseId}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {registeredCourse.courseName}
                      </div>
                    </div>
                    <span className="badge text-bg-primary rounded-pill">
                      {registeredCourse.duration}
                    </span>
                  </li>
                ))
              ) : (
                <li className="list-group-item py-3">
                  You have not registered to any courses yet
                </li>
              )}
            </ul>
          </div>
        </div>
        {registeredCourses.length > 0 && (
          <p className="mt-4">
            If you want to remove a course, go to{" "}
            <Link to="/register">register</Link> and select the course in the
            dropdown menu.
          </p>
        )}
        <Link to="/courses" className="btn btn-primary my-4">
          To Courses<i className="fa-solid fa-arrow-right ms-2"></i>
        </Link>
      </div>
    </div>
  );
}

export default Home;
