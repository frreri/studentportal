import { useParams } from "react-router";
import RegistrationForm from "../components/RegistrationForm";

function Register() {
  const { courseId } = useParams();
  return (
    <>
      <h1 className="my-4">Course Registration</h1>
      <RegistrationForm courseId={courseId ? courseId : ""} />
    </>
  );
}

export default Register;
