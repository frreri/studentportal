import { useState } from "react";
import { RegistrationContext } from "./contexts/RegistrationContext";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import News from "./pages/News";
import NavBar from "./components/NavBar";
import CourseDetails from "./pages/CourseDetails";
import Register from "./pages/Register";

function App() {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  return (
    <RegistrationContext.Provider
      value={{ registeredCourses, setRegisteredCourses }}
    >
      <NavBar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:courseId" element={<Register />} />
        </Routes>
      </main>
    </RegistrationContext.Provider>
  );
}

export default App;
