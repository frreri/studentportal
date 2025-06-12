import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const displayedCourses =
    searchTerm.length > 0
      ? courses.filter(
          (course) =>
            course.courseName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            course.shortDescription
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      : courses;

  return (
    <>
      <h1 className="my-4">Our Courses</h1>
      <div className="container">
        <div className="input-group input-group-lg mb-4">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-4 align-items-stretch">
          {displayedCourses.map((course) => {
            return (
              <div className="col" key={course.courseId}>
                <CourseCard course={course} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Courses;
