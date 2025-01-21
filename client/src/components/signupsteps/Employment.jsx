import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { stepFiveSchema } from "../../schema/userSignupSchema";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import speechObject from "../../utils/speechObject";

const Employment = ({ setCurrentStep }) => {
  const { isFocused, isHovered, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur} = speechObject();
  
  const { newUser, setNewUser } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepFiveSchema),
    defaultValues: {
      employment: newUser.employment,
      occupation: newUser.occupation,
      yearEmploy: newUser.yearEmploy,
      skill1: newUser.skill1,
      skill2: newUser.skill2,
      yearUnemploy: newUser.yearUnemploy,
      skill3: newUser.skill3,
      skill4: newUser.skill4,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setNewUser({ ...newUser, ...data });
    toast.success("Employment Information done!");
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-4 gap-2 p-4"
    >
      <h1 className="col-span-4 flex w-full font-display items-center gap-2 border-b text-3xl font-bold text-skin-prim" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Employment Attainment: Optional Section")}>
        Employment Attainment{" "}
        <span className="text-sm font-normal text-skin-prim font-sans">*optional</span>
      </h1>

      <label className="form-control col-span-4 w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Employment Type")}>
          <span className="label-text font-sans text-skin-mute">Employment type</span>
        </div>
        <select className="select select-bordered font-sans" {...register("employment")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Employment Type")}
        >
          <option value={""}>Select your employment type</option>
          <option>Student</option>
          <option>Employed</option>
          <option>Unemployed</option>
        </select>{" "}
        {errors.employment && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.employment.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Occupation")}>
          <span className="label-text font-sans text-skin-mute">Occupation</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Occupation")}
          disabled={watch().employment === "Employed" ? false : true}
          type="text"
          placeholder="type your occupation here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("occupation")}
        />
        {errors.occupation && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.occupation.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Months slash Years of being employed")}>
          <span className="label-text font-sans text-skin-mute">Months/Years of being employed</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Months slash Years of being employed")}
          disabled={watch().employment === "Employed" ? false : true}
          type="text"
          placeholder="type your months/years here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("yearEmploy")}
        />
        {errors.yearEmploy && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.yearEmploy.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First skill while being employed")}>
          <span className="label-text font-sans text-skin-mute"> 1. Skills while being employed</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First skill while being employed")}
          disabled={watch().employment === "Employed" ? false : true}
          type="text"
          placeholder="type your skill here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("skill1")}
        />
        {errors.skill1 && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.skill1.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Second skill while being employed")}>
          <span className="label-text font-sans text-skin-mute"> 2. Skills while being employed</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Second skill while being employed")}
          disabled={watch().employment === "Employed" ? false : true}
          type="text"
          placeholder="type your skill here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("skill2")}
        />
        {errors.skill2 && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.skill2.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control col-start-2 w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Months slash Years of being unemployed")}>
          <span className="label-text font-sans text-skin-mute">Months/Years of being unemployed</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Months slash Years of being unemployed")}
          disabled={watch().employment === "Unemployed" ? false : true}
          type="text"
          placeholder="type your months/years here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("yearUnemploy")}
        />
        {errors.yearUnemploy && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.yearUnemploy.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label"  onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First skill while being unemployed")}>
          <span className="label-text font-sans text-skin-mute"> 1. Skills while being unemployed</span>
        </div>
        <input  onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First skill while being unemployed")}
          disabled={watch().employment === "Unemployed" ? false : true}
          type="text"
          placeholder="type your skill here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("skill3")}
        />
        {errors.skill3 && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.skill3.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Second skill while being unemployed")}>
          <span className="label-text font-sans text-skin-mute"> 2. Skills while being unemployed</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Second skill while being unemployed")}
          disabled={watch().employment === "Unemployed" ? false : true}
          type="text"
          placeholder="type your skill here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("skill4")}
        />
        {errors.skill4 && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.skill4.message}
            </span>
          </div>
        )}
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
export default Employment;
