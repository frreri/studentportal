import { useContext, useState } from "react";
import { courses } from "../data/courses";
import {
  Button,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { RegistrationContext } from "../contexts/RegistrationContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function RegistrationForm({ courseId }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState(courseId);

  const { registeredCourses, setRegisteredCourses } =
    useContext(RegistrationContext);

  const allreadyRegistered = registeredCourses.some(
    (course) => course.courseId === selected
  );

  const handleSelectChange = (e) => setSelected(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = courses.find((course) => course.courseId === selected);
    setRegisteredCourses((registered) => [...registered, course]);
    setFullName("");
    setEmail("");
  };

  const handleRemove = () => {
    setRegisteredCourses((courses) =>
      courses.filter((course) => course.courseId !== selected)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center justify-content-md-start my-3">
            <div className="col-12 col-md-6">
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-start my-3">
            <div className="col-12 col-md-6">
              <TextField
                required
                fullWidth
                variant="outlined"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-start my-3">
            <div className="col-12 col-md-6">
              <FormControl fullWidth>
                <InputLabel id="course-select-label">Course</InputLabel>
                <Select
                  required
                  labelId="course-select-label"
                  id="course-select"
                  value={selected}
                  label="Course"
                  onChange={handleSelectChange}
                >
                  {courses.map((course) => (
                    <MenuItem value={course.courseId} key={course.courseId}>
                      {course.courseName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-start my-3">
            <div className="col-12 col-md-6 d-flex justify-content-between">
              <Button
                type="submit"
                variant="contained"
                disabled={allreadyRegistered}
              >
                {allreadyRegistered ? "Allready Registered" : "Register"}
              </Button>
              {allreadyRegistered && (
                <Button variant="outlined" color="error" onClick={handleRemove}>
                  Remove Registration
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default RegistrationForm;
