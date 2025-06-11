function CourseCard({ course }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-header">{course.level}</div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.courseName}</h5>
        <p className="card-text flex-grow-1">{course.shortDescription}</p>
        <a
          href={`/courses/${course.courseId}`}
          className="btn btn-primary mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default CourseCard;
