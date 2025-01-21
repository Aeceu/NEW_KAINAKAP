import { BellRing, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema } from "../../schema/userSignupSchema";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import speechObject from "../../utils/speechObject";

const Personal = ({ setCurrentStep }) => {
  const { newUser, setNewUser } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      firstName: newUser.firstName,
      middleName: newUser.middleName,
      lastName: newUser.lastName,
      suffix: newUser.suffix,
      age: newUser.age,
      birthdate: newUser.birthdatell,
      birthplace: newUser.birthplace,
      gender: newUser.gender,
      religion: newUser.religion,
      citizenship: newUser.citizenship,
      civil: newUser.civil,
      email: newUser.email,
      phone: newUser.phone,
      landline: newUser.landline,
      password: newUser.password,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setNewUser({ ...newUser, ...data });
    toast.success("Personal Information Done!");
    setCurrentStep((prev) => prev + 1);
  };

  const { isFocused, isHovered, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur } = speechObject();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid h-full w-full grid-cols-4 gap-2 p-4"
    >
      <h1 className="font-4xl col-span-4 w-full border-b font-display text-3xl font-bold text-skin-prim"
        onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Personal Information")}
      >
        Personal Information
      </h1>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Last Name")}>
          <span className="label-text font-sans text-skin-mute">Lastname</span>
        </div>
        <input
          type="text"
          placeholder="type your lastname here..."
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Last Name")}
          {...register("lastName")}
        />
        {errors.lastName && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.lastName.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First Name")}>
          <span className="label-text font-sans text-skin-mute">Firstname</span>
        </div>
        <input
          type="text"
          placeholder="type your firstname here..."
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First Name")}
          {...register("firstName")}
        />
        {errors.firstName && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.firstName.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Middle Name")}>
          <span className="label-text font-sans text-skin-mute">Middlename</span>
        </div>
        <input
          type="text"
          placeholder="type your middlename here..."
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Middle Name")}
          {...register("middleName")}
        />
        {errors.middleName && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.middleName.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Suffix")}>
          <span className="label-text font-sans text-skin-mute">Suffix</span>
        </div>
        <input
          type="text"
          placeholder="type your suffix here..."
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Suffix")}
          {...register("suffix")}
        />
        {errors.suffix && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.suffix.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Age")}>
          <span className="label-text font-sans text-skin-mute">Age</span>
        </div>
        <input
          type="number"
          placeholder="type your age here..."
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Age")}
          {...register("age")}
        />
        {errors.age && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.age.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Birth Date")}>
          <span className="label-text font-sans text-skin-mute">Birthdate</span>
        </div>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Birth Date")}
          {...register("birthdate")}
        />
        {errors.birthdate && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.birthdate.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Place of Birth")}>
          <span className="label-text font-sans text-skin-mute">Place of birth</span>
        </div>
        <input
          type="text"
          placeholder="type your birth place here..."
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Place of Birth")}
          {...register("birthplace")}
        />
        {errors.birthplace && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.birthplace.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Gender")}>
          <span className="label-text font-sans text-skin-mute">Gender</span>
        </div>
        <select className="select select-bordered" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Gender")} {...register("gender") }>
          <option value={""}>Pick one</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        {errors.gender && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.gender.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Religion")}>
          <span className="label-text font-sans text-skin-mute">Religion</span>
        </div>
        <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Religion")}
          className="select select-bordered font-sans"
          {...register("religion")}
        >
          <option value={""}>Pick one</option>
          <option>Roman Catholic</option>
          <option>Catholic</option>
          <option>Iglesia ni Cristo</option>
          <option>Born again</option>
          <option>Dating Daan</option>
          <option>Baptist</option>
          <option>Islam</option>
        </select>
        {errors.religion && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.religion.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Citizenship")}>
          <span className="label-text font-sans text-skin-mute">Citizenship</span>
        </div>
        <input
          type="text"
          placeholder="type your citizenship here..."
          className="input input-bordered w-full max-w-xs"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Citizenship")}
          {...register("citizenship")}
        />
        {errors.citizenship && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.citizenship.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Civil Status")}>
          <span className="label-text font-sans text-skin-mute">Civil Status</span>
        </div>
        <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Civil Status")}
          className="select select-bordered font-sans"
          {...register("civil")}
        >
          <option value={""}>Pick one</option>
          <option>Single</option>
          <option>Married</option>
          <option>Legally Separated</option>
          <option>Widowed</option>
          <option>Solo Parent</option>
        </select>
        {errors.civil && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.civil.message}
            </span>
          </div>
        )}
      </label>

      <h1 className="col-span-4 mt-4 w-full border-b font-display text-3xl font-bold text-skin-prim"
        onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Contact Information")}
      >
        Contact Information
      </h1>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Email")}>
          <span className="label-text font-sans text-skin-mute">Email</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Email")}
          type="email"
          placeholder="type your email here..."
          className="input input-bordered w-full max-w-xs"
          {...register("email")}
        />
        {errors.email && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.email.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Password")}>
          <span className="label-text font-sans text-skin-mute">Password</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Password")}
          type="password"
          placeholder="type your password here..."
          className="input input-bordered w-full max-w-xs"
          {...register("password")}
        />
        {errors.password && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.password.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Retype Password")}>
          <span className="label-text font-sans text-skin-mute">Retype Password</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Retype Password")}
          type="password"
          placeholder="re-type your password here..."
          className="input input-bordered w-full max-w-xs"
          {...register("repassword")}
        />
        {errors.repassword && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.repassword.message}
            </span>
          </div>
        )}
      </label>

      <span className="flex items-end justify-center gap-2 text-skin-prim">
        <BellRing className="mb-2 h-8 w-8" />
        <label className="font-sans text-xs" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Kindly type N A in boxes where there are no possible answer to the information being requested.")}>
          Kindly type 'NA' in boxes where there are no possible answer to the
          information being requested.
        </label>
      </span>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Mobile Number")}>
          <span className="label-text font-sans text-skin-mute">Mobile No.</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Mobile Number")}
          type="number"
          placeholder="type your phone number here..."
          className="input input-bordered w-full max-w-xs"
          {...register("phone")}
        />
        {errors.phone && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.phone.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Landline Number")}>
          <span className="label-text font-sans text-skin-mute">Landline No.</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Landline Number")}
          type="number"
          placeholder="type your landline number here..."
          className="input input-bordered w-full max-w-xs"
          {...register("landline")}
        />
        {errors.landline && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.landline.message}
            </span>
          </div>
        )}
      </label>

      <span className="col-span-4 mt-8 pb-4 flex w-full items-center justify-end">
        <button
          type="submit" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Proceed to the next step.")}
          className="btn w-max gap-2 bg-skin-btnBG font-sans text-skin-invr"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </span>
    </form>
  );
};
export default Personal;
