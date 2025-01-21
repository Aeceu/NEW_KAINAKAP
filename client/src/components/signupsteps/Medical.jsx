import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BellRing, ChevronLeft, ChevronRight } from "lucide-react";
import { stepSixSchema } from "../../schema/userSignupSchema";
import {
  disabilityTypeNotVisible,
  disabilityTypeVisible,
} from "../../data/disabilityType";
import { assistiveDevices } from "../../data/assistiveDevices";
import { medications } from "../../data/medications";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import speechObject from "../../utils/speechObject";

const Medical = ({ setCurrentStep }) => {
  const { isFocused, isHovered, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur} = speechObject();
  
  const { newUser, setNewUser } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepSixSchema),
    defaultValues: {
      blood: newUser.blood,
      height: newUser.height,
      weight: newUser.weight,
      visibility: newUser.visibility,
      disability: newUser.disability,
      made_disabled: newUser.made_disabled,
      status: newUser.status,
      device: newUser.device,
      specificDevice: newUser.specificDevice,
      medicine: newUser.medicine,
      specificMedicine: newUser.specificMedicine,
      others: newUser.others,
    },
  });

  const onSubmit = (data) => {
    setNewUser({ ...newUser, ...data });
    toast.success("Medical Information done!");
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-4 gap-2 p-4"
    >
      <h1 className="col-span-4 flex w-full font-display items-center gap-2 border-b text-3xl font-bold text-skin-prim" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Medical Information")}>
        Medical Information
      </h1>

      <label className="form-control w-full max-w-xs">
        <div className="label"onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Blood Type")}>
          <span className="label-text font-sans text-skin-mute">Blood type</span>
        </div>
        <select className="select select-bordered font-sans" {...register("blood")}
        onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Blood Type")}
        >
          <option disabled selected>
            Select your blood type
          </option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
          <option>AB+</option>
          <option>A-</option>
          <option>B-</option>
          <option>O-</option>
          <option>AB-</option>
        </select>{" "}
        {errors.blood && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.blood.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Height in centimeters")}>
          <span className="label-text font-sans text-skin-mute">Height in CM</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Height in centimeters")}
          type="text"
          placeholder="type your height here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("height")}
        />
        {errors.height && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.height.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Weight in kilograms")}>
          <span className="label-text font-sans text-skin-mute">Weight in kg</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Weight in kilograms")}
          type="text"
          placeholder="type your weight here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("weight")}
        />
        {errors.weight && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.weight.message}
            </span>
          </div>
        )}
      </label>

      <span className="flex items-end justify-center gap-2 text-skin-prim">
        <BellRing className="mb-2 h-8 w-8" />
        <label className="mb-2 text-xs font-sans" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Kindly type '0' in boxes where there are no possible answer to the information being requested.")}>
          Kindly type '0' in boxes where there are no possible answer to the
          information being requested.
        </label>
      </span>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Disability Visibility")}>
          <span className="label-text font-sans text-skin-mute">Disability Visibility</span>
        </div>
        <select className="select select-bordered font-sans" {...register("visibility")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Disability Visibility")}
        >
          <option disabled selected>
            Select your disability ability
          </option>
          <option>Visible</option>
          <option>Not Visible</option>
        </select>
        {errors.visibility && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.visibility.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label"  onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Disability Type")}>
          <span className="label-text font-sans text-skin-mute">Disability Type</span>
        </div>
        <select  onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Disability Type")}
          disabled={
            watch().visibility === "Not Visible" ||
            watch().visibility === "Visible"
              ? false
              : true
          }
          className="select select-bordered font-sans"
          {...register("disability")}
        >
          <option disabled selected>
            Select your disability type
          </option>
          {watch().visibility === "Visible" &&
            disabilityTypeVisible.map((item, i) => (
              <option key={i}>{item.value}</option>
            ))}
          {watch().visibility === "Not Visible" &&
            disabilityTypeNotVisible.map((item, i) => (
              <option key={i}>{item.value}</option>
            ))}
        </select>
        {errors.disability && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.disability.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("What made you disabled?")}>
          <span className="label-text font-sans text-skin-mute">What made you disabled?</span>
        </div>
        <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("What made you disabled?")}
          className="select select-bordered font-sans"
          {...register("made_disabled")}
        >
          <option disabled selected>
            Select your what made you disabled
          </option>
          <option>Inborn</option>
          <option>Sickness</option>
          <option>Accident</option>
        </select>
        {errors.made_disabled && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.made_disabled.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Health Status")}>
          <span className="label-text font-sans text-skin-mute">Health Status</span>
        </div>
        <select className="select select-bordered font-sans" {...register("status")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Health Status")}
        >
          <option disabled selected>
            Select your health status
          </option>
          <option>Good Condition</option>
          <option>Required Assistance</option>
          <option>Confine to bed</option>
        </select>
        {errors.status && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.status.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Assistive Devices")}>
          <span className="label-text font-sans text-skin-mute">Assistive Devices</span>
        </div>
        <select className="select select-bordered font-sans" {...register("device")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Assistive Devices")}
        >
          <option disabled selected>
            Select your assistive devices
          </option>
          <option disabled className="text-lg font-bold">
            NO/SPECIFIC DEVICES
          </option>
          {assistiveDevices[0].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
          <option disabled className="text-lg font-bold">
            MOBILITY DEVICES
          </option>
          {assistiveDevices[1].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
          <option disabled className="text-lg font-bold">
            COGNITIVE DEVICES
          </option>
          {assistiveDevices[2].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
          <option disabled className="text-lg font-bold">
            COMMUNICATION DEVICES
          </option>
          {assistiveDevices[3].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
          <option disabled className="text-lg font-bold">
            HEARING DEVICES
          </option>
          {assistiveDevices[4].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
          <option disabled className="text-lg font-bold">
            VISION DEVICES
          </option>
          {assistiveDevices[5].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
        </select>
        {errors.device && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.device.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Specify Device Used")}>
          <span className="label-text font-sans text-skin-mute">Specific device used</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Specify Device Used")}
          disabled={watch().device === "Specify device used" ? false : true}
          type="text"
          placeholder="type your specific device used here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("specificDevice")}
        />
        {errors.specificDevice && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.specificDevice.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Current Medicine Used")}>
          <span className="label-text font-sans text-skin-mute">Current Medicine used</span>
        </div>
        <select className="select select-bordered font-sans" {...register("medicine")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Current Medicine Used")}
        >
          {medications[0].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
          <option className="text-lg font-bold">MEDICATION</option>
          {medications[1].options.map((item, i) => (
            <option key={i}>{item.value}</option>
          ))}
        </select>
        {errors.medicine && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.medicine.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label"  onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Specific Medicine Used")}>
          <span className="label-text font-sans text-skin-mute">Specific medicine used</span>
        </div>
        <input  onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Specific Medicine Used")}
          disabled={watch().medicine === "Specify Medicine Used" ? false : true}
          type="text"
          placeholder="type your specific medicine used here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("specificMedicine")}
        />
        {errors.specificMedicine && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.specificMedicine.message}
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

export default Medical;
