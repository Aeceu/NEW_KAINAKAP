import { ChevronLeft, ChevronRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { stepTwoSchema } from "../../schema/userSignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import WatchAddress from "../../hooks/watchAddress";
import { UserContext } from "../../context/UserContext";
import speechObject from "../../utils/speechObject";

const Address = ({ setCurrentStep }) => {
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
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      region: newUser.region,
      province: newUser.province,
      city: newUser.city,
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
    setNewUser({ ...newUser, ...data });
    toast.success("Address information done!");
    console.log(data);
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
      className="grid w-full grid-cols-4 gap-2 p-4"
    >
      <h1 className="col-span-4 w-full border-b fomt-display text-3xl font-display text-skin-prim"
       onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Home slash Permanent Address Information")}
      >
        Home/Permanent Address Information
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
            <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Barangay")}>
              <span className="label-text font-sans text-skin-mute">Barangay</span>
            </div>
            <select onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Barangay")}
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
          className="input input-bordered font-sans w-full max-w-xs"
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
        <div className="label" onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("House number, A P T, Court side")}>
          <span className="label-text font-sans text-skin-mute">House no., apt, courtside</span>
        </div>
        <input onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("House number, A P T, Court side")}
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
          className="input font-sans input-bordered w-full max-w-xs"
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
        <button type="submit" className="btn w-max gap-2 bg-skin-btnBG text-skin-invr mb-4"
          onMouseLeave={handleMouseLeave} onMouseEnter={()=>handleMouseEnter("Proceed to Next Step.")}
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </span>
    </form>
  );
};

export default Address;
