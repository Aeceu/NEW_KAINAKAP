import { Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useState } from "react";
import { handleFile } from "../../utils/HandleFile";
import axios from "../../api/axios";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import speechObject from "../../utils/speechObject";

const Verification = ({ setCurrentStep }) => {
  const { isFocused, isHovered, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur} = speechObject();
  
  const { files, setFiles, setidData } = useContext(UserContext);
  const [isValidID, setIsValidID] = useState(false);
  const [id, setID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && isValidID) {
      setCurrentStep((prev) => prev + 1);
    } else {
      toast.error("Please upload and validate your ID before proceeding.");
      setValidationMessage(
        "Please upload and validate your ID before proceeding.",
      );
    }
  };

  const handleFileChange = async (e, fileType) => {
    await handleFile(e).then(async (res) => {
      try {
        setFiles((prevFiles) => ({ ...prevFiles, [fileType]: res }));
        if (fileType === "valid_id") {
          setFailed(false);
          setLoading(true);
          setValidationMessage("");
          setID(res);
          const idResult = await axios.post("/id/extract", {
            file: res,
          });
          if (idResult.status === 200) {
            setLoading(false);
            setIsValidID(true);
            setidData(idResult.data.resultData);
            setValidationMessage(idResult.data.message);
          } else {
            setFailed(true);
            setID(null);
            setIsValidID(false);
            setLoading(false);
            setValidationMessage("Failed to verify ID. Please try again.");
          }
        }
      } catch (error) {
        console.log(error);
        setValidationMessage(error.response.data.message);
        setFailed(true);
      } finally {
        setLoading(false);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-full w-full grid-cols-2 place-content-start gap-4 p-4"
    >
      <div className="relative col-span-2 flex w-full items-center justify-between p-4">
        <div className="flex w-1/4 flex-col items-center gap-4 rounded-lg border border-red-500 bg-red-100 p-4 text-xs font-sans  tracking-widest text-red-500 shadow-lg"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Important Application Guidelines - Please ensure the following as you proceed with your application: Ensure images are valid and clear, and text should be legible")}
        >
          <h1 className="flex items-center gap-2 font-extrabold">
            <Bell className="h-4 w-4 shrink-0 text-red-500" />
            Important Application Guidelines:
          </h1>
          <p className="text-xs">
            Please ensure the following requirements are met to proceed with
            your application:
          </p>
          <ul className="flex w-full list-disc flex-col gap-2 pl-5">
            <li>Upload clear images</li>
            <li>Ensure images are valid</li>
            <li>Text in images should be legible</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center"
        onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Upload your Valid ID")}
        >
          <h1
            className={`mb-2 text-4xl font-extrabold font-display text-skin-prim ${loading && "animate-pulse text-skin-prim"}`}
          >
            {loading ? "Validating...." : "Upload your valid ID"}
          </h1>
          <div
            className={`${
              failed && "animate-shake border-red-500"
            } flex h-[250px] w-[500px] items-center justify-center overflow-hidden rounded-xl border shadow-md`}
          >
            <img
              src={id ? id : "/id.svg"}
              alt="id"
              className="h-full w-full rounded-xl shadow-md bg-white"
            />
          </div>
          <input
            onChange={(e) => handleFileChange(e, "valid_id")}
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            className="file-input file-input-bordered file-input-primary file-input-md mt-2 w-3/4"
          />

          {validationMessage && (
            <p className="my-2 text-xs font-bold text-red-500">
              {validationMessage}
            </p>
          )}
        </div>

        <div className="flex w-1/4 flex-col items-center gap-4 rounded-lg border border-emerald-500 bg-emerald-100 p-4 text-xs font-sans  tracking-widest text-emerald-500 shadow-lg"
        onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Important Application Guidelines - Please ensure the ID uploaded are one of the following: PhilHealth ID, National ID, or Driver's License")}
        >
          <h1 className="flex items-center gap-2 font-extrabold">
            <Bell className="h-4 w-4 shrink-0 text-emerald-500" />
            Important Application Guidelines:
          </h1>
          <p className="text-xs">
            Please ensure the uploaded id are in the following:
          </p>
          <ul className="flex w-full list-disc flex-col gap-2 pl-5">
            <li>PhilHealth ID</li>
            <li>National ID</li>
            <li>Driver's License</li>
          </ul>
        </div>
      </div>

      <span className="flex flex-col gap-4 font-display text-skin-prim">
        <h1 className="border-b text-xl font-extrabold" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Profile Photo")}>Profile Photo</h1>
        <input
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Profile Photo")}
          onChange={(e) => handleFileChange(e, "profilePhoto")}
          accept="image/png, image/jpg, image/jpeg"
          type="file"
          className="file-input file-input-bordered file-input-primary file-input-md w-3/4"
        />
      </span>

      <span className="flex flex-col gap-4 font-display text-skin-prim">
        <h1 className="border-b text-xl font-extrabold" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Réshiumaé")}>Résumé</h1>
        <input
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Réshiumaé")}
          onChange={(e) => handleFileChange(e, "resume")}
          accept="image/png, image/jpg, image/jpeg"
          type="file"
          className="file-input file-input-bordered file-input-primary file-input-md w-3/4"
        />
      </span>

      <span className="flex flex-col gap-4 font-display text-skin-prim">
        <h1 className="border-b text-xl font-extrabold" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("PWD ID")}>PWD ID</h1>
        <input
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("PWD ID")}
          onChange={(e) => handleFileChange(e, "pwd_id")}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          className="file-input file-input-bordered file-input-primary file-input-md w-3/4"
        />
      </span>

      <span className="flex flex-col gap-4 font-display text-skin-prim">
        <h1 className="border-b text-xl font-extrabold" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Baranggay Residence Certificate")}>
          Baranggay Residence Certificate
        </h1>
        <input
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Baranggay Residence Certificate")}
          onChange={(e) =>
            handleFileChange(e, "baranggay_residence_certificate")
          }
          accept="image/png, image/jpg, image/jpeg"
          type="file"
          className="file-input file-input-bordered file-input-primary file-input-md w-3/4"
        />
      </span>

      <span className="flex flex-col gap-4 font-display text-skin-prim">
        <h1 className="border-b text-xl font-extrabold" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Medical Certificate")}>Medical Certificate</h1>
        <input
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Medical Certificate")}
          onChange={(e) => handleFileChange(e, "medical_certificate")}
          accept="image/png, image/jpg, image/jpeg"
          type="file"
          className="file-input file-input-bordered file-input-primary file-input-md w-3/4"
        />
      </span>

      <span className="flex flex-col gap-4 font-display text-skin-prim">
        <h1 className="border-b text-xl font-extrabold" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Proof of Disability")}>Proof of Disability</h1>
        <input
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Proof of Disability")}
          onChange={(e) => handleFileChange(e, "proof_of_disability")}
          accept="image/png, image/jpg, image/jpeg"
          type="file"
          className="file-input file-input-bordered file-input-primary file-input-md w-3/4"
        />
      </span>

      <span className="col-span-2 mt-8 flex w-full items-center justify-end gap-4">
        <button onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Previous Step")}
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="btn w-max gap-1 bg-skin-btnBGhov text-skin-prim mb-4"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>
        <button type="submit" className="btn w-max gap-2 text-skin-invr bg-skin-btnBG mb-4"
        onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Proceed to Next Step.")}
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </span>
    </form>
  );
};
export default Verification;
