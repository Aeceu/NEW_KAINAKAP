import { BellRing, ChevronLeft, ChevronRight } from "lucide-react";
import { stepThreeSchema } from "../../schema/userSignupSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WatchAddress from "../../hooks/watchAddress";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import speechObject from "../../utils/speechObject";

const Emergency = ({ setCurrentStep }) => {
  const { newUser, setNewUser } = useContext(UserContext);
  const { isFocused, isHovered, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur} = speechObject();

  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [baranggays, setBarangays] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBaranggay, setSelectedBaranggay] = useState("");
  const [zipCode, setZipCode] = useState("");

  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepThreeSchema),
    defaultValue: {
      firstName: newUser.firstName,
      middleName: newUser.middleName,
      lastName: newUser.lastName,
      suffix: newUser.suffix,
      age: newUser.age,
      gender: newUser.gender,
      relationship: newUser.relationship,
      religion: newUser.religion,
      email: newUser.email,
      phone: newUser.phone,
      landline: newUser.landline,
      region: newUser.region,
      province: newUser.provinced,
      city: newUser.cityd,
      baranggay: newUser.baranggay,
      houseno: newUser.houseno,
      street: newUser.street,
      zipcode: newUser.zipcode,
    },
  });

  const onSubmit = (data) => {
    data.region = selectedRegion;
    data.province = selectedProvince;
    data.city = selectedCity;
    data.baranggay = selectedBaranggay;
    console.log(data);
    setNewUser({ ...newUser, emergencyPerson: data });
    toast.success("Emergency information done!");
    setCurrentStep((prev) => prev + 1);
  };

  const watchRegion = watch("region");
  const watchProvince = watch("province");
  const watchCity = watch("city");

  WatchAddress({
    watchCity,
    watchProvince,
    watchRegion,
    selectedBaranggay,
    selectedCity,
    zipCode,
    setZipCode,
    setBarangays,
    setCities,
    setProvinces,
    setRegions,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid h-full w-full grid-cols-4 gap-2 p-4"
    >
      <h1 className="col-span-4 w-full font-display border-b text-3xl font-bold text-skin-prim"
        onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Person to contact in case of emergency")}
      >
        Person to contact in case of Emergency
      </h1>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Last name")}>
          <span className="label-text font-sans text-skin-mute">Lastname</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Last name")}
          type="text"
          placeholder="type your lastname here..."
          className="input font-sans input-bordered w-full max-w-xs"
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
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First name")}>
          <span className="label-text font-sans text-skin-mute">Firstname</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("First name")}
          type="text"
          placeholder="type your firstname here..."
          className="input font-sans input-bordered w-full max-w-xs"
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
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Middle name")}>
          <span className="label-text font-sans text-skin-mute">Middlename</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Middle name")}
          type="text"
          placeholder="type your middlename here..."
          className="input font-sans input-bordered w-full max-w-xs"
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
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Suffix")}
          type="text"
          placeholder="type your suffix here..."
          className="input font-sans input-bordered w-full max-w-xs"
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
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Age")}
          type="number"
          placeholder="type your age here..."
          className="input font-sans input-bordered w-full max-w-xs"
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
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Gender")}>
          <span className="label-text font-sans text-skin-mute">Gender</span>
        </div>
        <select className="select font-sans select-bordered" {...register("gender")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Gender")}
        >
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
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Relationship")}>
          <span className="label-text font-sans text-skin-mute">Relationship</span>
        </div>
        <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Relationship")}
          className="select font-sans select-bordered"
          {...register("relationship")}
        >
          <option value={""}>Pick one</option>
          <option>Mother</option>
          <option>Father</option>
          <option>Brother</option>
          <option>Sister</option>
          <option>Guardian</option>
          <option>Wife</option>
          <option>Husband</option>
          <option>Son</option>
          <option>Daugher</option>
          <option>Grand Children</option>
          <option>Friend</option>
          <option>Other Relative</option>
        </select>
        {errors.relationship && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.relationship.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Religion")}>
          <span className="label-text font-sans text-skin-mute">Religion</span>
        </div>
        <select className="select font-sans select-bordered" {...register("religion")}
         onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Religion")}
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

      <h1 className="col-span-4 mt-4 w-full border-b font-display text-3xl font-bold text-skin-prim"
      onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Emergency Person Contact Information")}>
        Emergency Person Contact Information
      </h1>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Email")}>
          <span className="label-text font-sans text-skin-mute">Email</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Email")}
          type="email"
          placeholder="type your email here..."
          className="input font-sans input-bordered w-full max-w-xs"
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
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Mobile Number")}>
          <span className="label-text font-sans text-skin-mute">Mobile No.</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Mobile Number")}
          type="number"
          placeholder="type your phone number here..."
          className="input font-sans input-bordered w-full max-w-xs"
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
          className="input font-sans input-bordered w-full max-w-xs"
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

      <span className="flex items-end justify-center gap-2 text-skin-prim">
        <BellRing className="mb-2 h-8 w-8" />
        <label className="text-xs font-sans" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Kindly type 'NA' in boxes where there are no possible answer to the information being requested.")}>
          Kindly type 'NA' in boxes where there are no possible answer to the
          information being requested.
        </label>
      </span>

      <h1 className="col-span-4 font-display mt-4 w-full border-b text-3xl font-bold text-skin-prim"
       onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Emergency Person Home slash Permanent Address Information")}
      >
        Emergency Person Home/Permanent Address Information
      </h1>

      <Controller
        name="region"
        control={control}
        render={({ field }) => (
          <label className="form-control w-full max-w-xs">
            <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Region")}>
              <span className="label-text font-sans text-skin-mute">Region</span>
            </div>
            <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Region")}
              className="select font-sans select-bordered"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setSelectedRegion(e.target[e.target.selectedIndex].innerText);
                setProvinces([]);
                setCities([]);
                setBarangays([]);
              }}
            >
              <option value="">Select a region</option>
              {regions.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.region && (
              <div className="label">
                <span className="label-text text-xs text-red-500">
                  {errors.region.message}
                </span>
              </div>
            )}
          </label>
        )}
      />

      <Controller
        name="province"
        control={control}
        render={({ field }) => (
          <label className="form-control w-full max-w-xs">
            <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Province")}>
              <span className="label-text font-sans text-skin-mute">Province</span>
            </div>
            <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Province")}
              className="select font-sans select-bordered"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setSelectedProvince(e.target[e.target.selectedIndex].innerText);
                setCities([]);
                setBarangays([]);
              }}
              disabled={provinces.length <= 0}
            >
              <option value="">Select a province</option>
              {provinces.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.province && (
              <div className="label">
                <span className="label-text text-xs text-red-500">
                  {errors.province.message}
                </span>
              </div>
            )}
          </label>
        )}
      />

      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <label className="form-control w-full max-w-xs">
            <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("City slash Municipality")}>
              <span className="label-text font-sans text-skin-mute">City/Municipality</span>
            </div>
            <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("City slash Municipality")}
              className="select font-sans select-bordered"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setSelectedCity(e.target[e.target.selectedIndex].innerText);
                setBarangays([]);
              }}
              disabled={cities.length <= 0}
            >
              <option value="">Select a city/municipality</option>
              {cities.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.city && (
              <div className="label">
                <span className="label-text text-xs text-red-500">
                  {errors.city.message}
                </span>
              </div>
            )}
          </label>
        )}
      />

      <Controller
        name="baranggay"
        control={control}
        render={({ field }) => (
          <label className="form-control w-full max-w-xs">
            <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Baranggay")}>
              <span className="label-text font-sans text-skin-mute">Barangay</span>
            </div>
            <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Baranggay")}
              className="select font-sans select-bordered"
              {...field}
              disabled={baranggays.length <= 0}
              onChange={(e) => {
                field.onChange(e);
                setSelectedBaranggay(
                  e.target[e.target.selectedIndex].innerText,
                );
              }}
            >
              <option value="">Select a baranggay</option>
              {baranggays.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.baranggay && (
              <div className="label">
                <span className="label-text text-xs text-red-500">
                  {errors.baranggay.message}
                </span>
              </div>
            )}
          </label>
        )}
      />

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Street")}>
          <span className="label-text font-sans text-skin-mute">Street</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Street")}
          type="text"
          disabled={!watch().baranggay}
          placeholder="type your street here..."
          className="input font-sans input-bordered w-full max-w-xs"
          {...register("street")}
        />
        {errors.street && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.street.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("House number, A P T, court side")}>
          <span className="label-text font-sans text-skin-mute">House no., apt, courtside</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("House number, A P T, court side")}
          type="text"
          disabled={!watch().baranggay}
          placeholder="type your house no., apartment, etc here..."
          className="input input-bordered font-sans w-full max-w-xs"
          {...register("houseno")}
        />
        {errors.houseno && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.houseno.message}
            </span>
          </div>
        )}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Zipcode")}>
          <span className="label-text font-sans text-skin-mute">Zipcode</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Zipcode")}
          type="text"
          disabled={!watch().baranggay}
          placeholder="type your zipcode here..."
          className="input input-bordered font-sans w-full max-w-xs"
          defaultValue={zipCode}
          {...register("zipcode")}
        />
        {errors.zipcode && (
          <div className="label">
            <span className="label-text text-xs text-red-500">
              {errors.zipcode.message}
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
export default Emergency;
