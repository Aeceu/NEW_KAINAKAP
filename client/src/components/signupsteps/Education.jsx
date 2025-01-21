import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { stepFourSchema } from "../../schema/userSignupSchema";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import speechObject from "../../utils/speechObject";

const Education = ({ setCurrentStep }) => {
  const { isFocused, isHovered, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur} = speechObject();
  
  const { newUser, setNewUser } = useContext(UserContext);
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(stepFourSchema),
    defaultValues: {
      elementary: newUser.elementary,
      attain: newUser.attain,
      highschool: newUser.highschool,
      attain1: newUser.attain1,
      senior: newUser.senior,
      attain2: newUser.attain2,
      college: newUser.college,
      attain3: newUser.attain3,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setNewUser({ ...newUser, ...data });
    toast.success("Education information done!");
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-4 gap-2 p-4"
    >
      <h1 className="col-span-4 flex w-full font-display items-center gap-2 border-b text-3xl font-bold text-skin-prim" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Educational Attainment: Optional Section")}>
        Educational Attainment{" "}
        <span className="text-sm font-normal text-skin-prim font-sans">*optional</span>
      </h1>

      <label className="form-control col-span-3 w-full">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of Elementary School")}>
          <span className="label-text font-sans text-skin-mute">Name of elementary school</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of Elementary School")}
          type="text"
          placeholder="type your elementary here..."
          className="input input-bordered font-sans w-full"
          {...register("elementary")}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("School Attainment.")}>
          <span className="label-text font-sans text-skin-mute">School Attainment</span>
        </div>
        <select className="select select-bordered font-sans" {...register("attain")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("School Attainment.")}
        >
          <option disabled selected>
            Select your school Attainment
          </option>
          <option>Graduate</option>
          <option>UnderGraduate</option>
        </select>
      </label>

      <label className="form-control col-span-3 w-full">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of High School School")}>
          <span className="label-text font-sans text-skin-mute">Name of highschool school</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of High School School")}
          type="text"
          placeholder="type your highschool here..."
          className="input input-bordered font-sans w-full"
          {...register("highschool")}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-sans text-skin-mute">School Attainment</span>
        </div>
        <select className="select select-bordered font-sans" {...register("attain1")}>
          <option disabled selected>
            Select your school Attainment
          </option>
          <option>Graduate</option>
          <option>UnderGraduate</option>
        </select>
      </label>

      <label className="form-control col-span-3 w-full">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of Senior Highs chool School")}>
          <span className="label-text font-sans text-skin-mute">Name of senior highschool school</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of Senior High school School")}
          type="text"
          placeholder="type your senior highschool here..."
          className="input input-bordered font-sans w-full"
          {...register("senior")}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("School Attainment")}>
          <span className="label-text font-sans text-skin-mute">School Attainment</span>
        </div>
        <select className="select select-bordered font-sans" {...register("attain2")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("School Attainment")}
        >
          <option disabled selected>
            Select your school Attainment
          </option>
          <option>Graduate</option>
          <option>UnderGraduate</option>
        </select>
      </label>

      <label className="form-control col-span-3 w-full">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of College School")}>
          <span className="label-text font-sans text-skin-mute">Name of college school</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Name of College School")}
          type="text"
          placeholder="type your college here..."
          className="input input-bordered font-sans w-full"
          {...register("college")}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("School Attainment")}>
          <span className="label-text font-sans text-skin-mute">School Attainment</span>
        </div>
        <select className="select select-bordered font-sans" {...register("attain3")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("School Attainment")}
        >
          <option disabled selected>
            Select your school Attainment
          </option>
          <option>Graduate</option>
          <option>UnderGraduate</option>
        </select>
      </label>

      <span className="col-span-4 mt-8 flex w-full items-center justify-end gap-4">
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
export default Education;
