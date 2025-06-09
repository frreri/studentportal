import { useState } from "react";
import { RegistrationContext } from "./contexts/RegistrationContext";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import News from "./pages/News";
import NavBar from "./components/NavBar";

function App() {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  return (
    <RegistrationContext.Provider
      value={{ registeredCourses, setRegisteredCourses }}
    >
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </RegistrationContext.Provider>
  );
}

export default App;
