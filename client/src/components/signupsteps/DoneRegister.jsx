import Bounce from "../animation/bounce";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "../../api/axios";

const DoneRegister = ({ setCurrentStep }) => {
  const { newUser, files, registrationStatus, setRegistrationStatus, idData } =
    useContext(UserContext);

  useEffect(() => {
    const handleRegister = async () => {
      try {
        setRegistrationStatus("pending");
        const res = await axios.post("/user/signup", {
          newUser,
          files,
          idData,
        });
        console.log(res.data);
        setRegistrationStatus("completed");
      } catch (error) {
        setRegistrationStatus("failed");
        console.log(error);
      }
    };
    handleRegister();
  }, []);

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      {registrationStatus === "pending" ? (
        <span className="loading loading-spinner h-20 w-20 text-success"></span>
      ) : registrationStatus === "failed" ? (
        <>
          <Bounce>
            <img src="/cross.svg" alt="done" className="h-20 w-20" />
          </Bounce>
          <Bounce delay={0.1}>
            <h1 className="label text-3xl font-bold text-red-500">
              Register Failed!
            </h1>
          </Bounce>
          <Bounce delay={0.2}>
            <button
              onClick={handleReset}
              className="btn btn-error text-white shadow-md"
            >
              Register again
            </button>
          </Bounce>
        </>
      ) : (
        <>
          <Bounce>
            <img src="/done.svg" alt="done" className="h-20 w-20" />
          </Bounce>
          <Bounce delay={0.1}>
            <h1 className="label text-3xl font-bold text-green-500">
              Registered Successfully!
            </h1>
          </Bounce>
          <Bounce delay={0.2}>
            <Link
              to={"/auth/user/login"}
              className="btn btn-success text-white shadow-md"
            >
              Back to login
            </Link>
          </Bounce>
        </>
      )}
    </div>
  );
};

export default DoneRegister;
