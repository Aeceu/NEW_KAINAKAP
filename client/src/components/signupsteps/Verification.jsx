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
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
  };

  const handleFileChange = async (e, fileType) => {
    await handleFile(e).then(async (res) => {
      setFiles((prevFiles) => ({ ...prevFiles, [fileType]: res }));
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-full w-full grid-cols-2 place-content-start gap-4 p-4"
    >
      
      <span className="flex flex-col gap-4 font-display text-skin-prim">
        <h1 className="border-b text-xl font-extrabold" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Upload your Valid ID")}>Valid ID</h1>
        <input
            onChange={(e) => handleFileChange(e, "valid_id")}
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            className="file-input file-input-bordered file-input-primary file-input-md mt-2 w-3/4"
          />
      </span>

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
