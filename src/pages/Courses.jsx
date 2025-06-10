import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

function Courses() {
  return (
    <>
      <h1>Our Courses</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-4 align-items-stretch">
          {courses.map((course) => {
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
