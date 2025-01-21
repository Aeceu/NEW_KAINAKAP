import { useContext, useState } from "react";
import Personal from "../components/signupsteps/Personal";
import Address from "../components/signupsteps/Address";
import Emergency from "../components/signupsteps/Emergency";
import Education from "../components/signupsteps/Education";
import Employment from "../components/signupsteps/Employment";
import Medical from "../components/signupsteps/Medical";
import Verification from "../components/signupsteps/Verification";
import DoneRegister from "../components/signupsteps/DoneRegister";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { UserContext } from "../context/UserContext";
import AccessibilityPanel from "../components/accessibility/AccessibilityPanel";
import speechObject from "../utils/speechObject";

const UserSignup = () => {
  const { newUser } = useContext(UserContext);
  const [currentStep, setCurrentStep] = useState(0);
  const { isHovered, isFocused, handleMouseEnter, handleMouseLeave, handleFocus} = speechObject();

  return (
    <div className="transition flex h-screen w-full flex-col items-center overflow-hidden bg-skin-pnlBG">
      <h1
        onClick={() => console.log(newUser)} onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("KAINAKAP User Registration Form")}
        className="transition w-full border-b bg-skin-btnBG p-4 font-display text-2xl font-bold text-skin-invr flex flex-row justify-between items-center"
      >
        KAINAKAP User Registration Form
        <AccessibilityPanel />
      </h1>
      <Link
        to={"/auth/user/login"}
        className="font-display absolute left-0 top-[108px] text-skin-invr flex items-center gap-1 rounded-br-md rounded-tr-md bg-skin-btnBG p-2 font-bold shadow-md transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
        Return to login
      </Link>
      <div className="relative flex h-full w-3/4 flex-col items-center overflow-y-auto bg-skin-pnlAltBG p-8 font-sans shadow-md">
        <ul className="steps steps-vertical w-max shrink-0 gap-4 lg:steps-horizontal text-skin-prim font-sans bg-skin-pageBG rounded-2xl p-1 pr-3 mb-4">
          <li
            onClick={() => {
              if (currentStep > 0) {
                setCurrentStep(0);
              }
            }}
            onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("PERSONAL")}
            className={`step cursor-pointer hover:step-primary ${
              currentStep >= 0 && "step-primary"
            }`}
          >
            Personal{" "}
          </li>
          <li
            onClick={() => {
              if (currentStep > 1) {
                setCurrentStep(1);
              }
            }}
            onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("ADDRESS")}
            className={`step cursor-pointer hover:step-primary ${
              currentStep >= 1 && "step-primary"
            }`}
          >
            Address{" "}
          </li>
          <li
            onClick={() => {
              if (currentStep > 2) {
                setCurrentStep(2);
              }
            }}
            onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("EMERGENCY")}
            className={`step cursor-pointer hover:step-primary ${
              currentStep >= 2 && "step-primary"
            }`}
          >
            Emergency
          </li>
          <li
            onClick={() => {
              if (currentStep > 3) {
                setCurrentStep(3);
              }
            }}
            onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("EDUCATION")}
            className={`step cursor-pointer hover:step-primary ${
              currentStep >= 3 && "step-primary"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              if (currentStep > 4) {
                setCurrentStep(4);
              }
            }}
            onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("EMPLOYMENT")}
            className={`step cursor-pointer hover:step-primary ${
              currentStep >= 4 && "step-primary"
            }`}
          >
            Employment
          </li>
          <li
            onClick={() => {
              if (currentStep > 5) {
                setCurrentStep(5);
              }
            }}
            onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("MEDICAL")}
            className={`step cursor-pointer hover:step-primary ${
              currentStep >= 5 && "step-primary"
            }`}
          >
            Medical{" "}
          </li>
          <li
            onClick={() => {
              if (currentStep > 6) {
                setCurrentStep(6);
              }
            }}
            onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("VERIFICATION")}
            className={`step cursor-pointer hover:step-primary ${
              currentStep >= 6 && "step-primary"
            }`}
          >
            Verification
          </li>
        </ul>
        {currentStep === 0 && <Personal setCurrentStep={setCurrentStep} />}
        {currentStep === 1 && <Address setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <Emergency setCurrentStep={setCurrentStep} />}
        {currentStep === 3 && <Education setCurrentStep={setCurrentStep} />}
        {currentStep === 4 && <Employment setCurrentStep={setCurrentStep} />}
        {currentStep === 5 && <Medical setCurrentStep={setCurrentStep} />}
        {currentStep === 6 && <Verification setCurrentStep={setCurrentStep} />}
        {currentStep === 7 && <DoneRegister setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
};
export default UserSignup;
