import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { userSignIn } from "../schema/userSignupSchema";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import axios from "../api/axios";
import speechObject from "../utils/speechObject";
import AccessibilityPanel from "../components/accessibility/AccessibilityPanel";

const UserLogin = () => {
  const { isHovered, isFocused, handleMouseEnter, handleMouseLeave, handleFocus} = speechObject();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSignIn),
  });

  const { setUserId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const res = await axios.post("/user/login", data, {
        withCredentials: true,
      });
      console.log(res.data);
      setUserId(res.data.id);
      toast.success(res.data.message);
      navigate("/auth/user/verify");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-skin-pageBG">
      <h1 className="font-display text-3xl font-bold text-skin-prim" onMouseEnter={()=>handleMouseEnter("Welcome!")} onFocus={()=>handleFocus("Welcome!")} onMouseLeave={handleMouseLeave}>Welcome!</h1>
      <p className="label mb-4 font-sans text-sm text-skin-base" onMouseEnter={()=>handleMouseEnter("Log in to manage your account, qr code and profile information.")} onFocus={()=>handleFocus("Log in to manage your account, qr code and profile information.")} onMouseLeave={handleMouseLeave}>
        Log in to manage your Account, QR Code, and Profile Information.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col gap-4"
      >
        <label className="form-control w-full">
          <input onMouseEnter={()=>handleMouseEnter("Email Field")} onFocus={()=>handleFocus("Focused On: Email Field.")} onMouseLeave={handleMouseLeave}
            type="email"
            placeholder="Email"
            className={`input input-bordered h-[60px] w-full rounded-2xl font-sans ${
              errors.email && "input-error"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <div className="label">
              <span className="text-md label-text text-red-500">
                {errors.email.message}
              </span>
            </div>
          )}
        </label>
        <label className="form-control w-full">
          <input onMouseEnter={()=>handleMouseEnter("Password Field")} onFocus={()=>handleFocus("Focused On: Password Field.")} onMouseLeave={handleMouseLeave}
            type="password"
            placeholder="Password"
            className={`input input-bordered h-[60px] w-full rounded-2xl font-sans ${
              errors.password && "input-error"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <div className="label">
              <span className="text-md label-text text-red-500">
                {errors.password.message}
              </span>
            </div>
          )}
        </label>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="label mb-4 flex w-max items-center justify-between gap-2  font-sans text-sm text-skin-base" onMouseEnter={()=>handleMouseEnter("Don't have an account?")} onFocus={()=>handleFocus("Don't have an account?")} onMouseLeave={handleMouseLeave}>
            Don&apos;t have an account ?
            <Link to="/auth/user/signup" className="transition font-semibold font-sans p-2 rounded-2xl hover:p-3 text-skin-base bg-skin-btnBG hover:text-skin-mute hover:bg-skin-btnBG" onMouseEnter={()=>handleMouseEnter("Sign Up!")} onMouseLeave={handleMouseLeave}>
              Sign up
            </Link>
          </p>
          <button
            disabled={loading}
            onMouseEnter={() => handleMouseEnter("Log in")} onFocus={()=> handleFocus("Log In")}
            onMouseLeave={handleMouseLeave}
            type="submit"
            className="btn h-[60px] w-full rounded-2xl bg-skin-pnlAltBG font-display text-2xl text-skin-base outline outline-1"
          >
            {loading ? (
              <Loader2 className="h-10 w-10 animate-spin" />
            ) : (
              "Log in"
            )}
          </button>
          <div className="my-4 flex w-full items-center gap-2">
            <div className="h-[1px] w-full border-b border-bg-skin-prim/50" />
            <h1 className="text-sm font-sans font-bold text-skin-prim">or</h1>
            <div className="h-[1px] w-full border-b border-black-bg-skin-prim/50" />
          </div>
          <Link
            to={"/auth/user/login/qrcode"} onMouseEnter={() => handleMouseEnter("Scan QR Code")} onFocus={()=> handleFocus("Scan QR Code")} onMouseLeave={handleMouseLeave}
            className="btn mb-5 h-[60px] w-full rounded-2xl bg-skin-btnBG font-display text-2xl text-skin-invr shadow-md hover:bg-skin-btnBGhov hover:text-skin-invrHov"
          >
            Scan QR Code
          </Link>
          <AccessibilityPanel />
        </div>
      </form>
    </div>
  );
};
export default UserLogin;

/* const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSignIn),
  });

  const { setUserId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const res = await axios.post("/user/login", data, {
        withCredentials: true,
      });
      console.log(res.data);
      setUserId(res.data.id);
      toast.success(res.data.message);
      navigate("/auth/user/verify");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Log in</h1>
      <p className="label text-sm mb-4">Manage your account, qr code and profile information.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex flex-col gap-4">
        <label className="form-control w-full">
          <input
            type="email"
            placeholder="Email"
            className={`rounded-none input input-bordered  w-full h-[60px] ${
              errors.email && "input-error"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <div className="label">
              <span className="text-md label-text text-red-500 ">{errors.email.message}</span>
            </div>
          )}
        </label>
        <label className="form-control w-full ">
          <input
            type="password"
            placeholder="Password"
            className={`rounded-none input input-bordered  w-full h-[60px] ${
              errors.password && "input-error"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <div className="label">
              <span className="text-md label-text text-red-500 ">{errors.password.message}</span>
            </div>
          )}
        </label>
        <div className=" flex flex-col items-end justify-center">
          <p className="mb-4 label flex items-center gap-2 text-sm w-max">
            Don&apos;t have an account ?
            <Link to="/auth/user/signup" className="text-primary font-semibold">
              Sign up
            </Link>
          </p>
          <button
            disabled={loading}
            type="submit"
            className="btn bg-black text-2xl text-white rounded-none w-full h-[60px]">
            {loading ? <Loader2 className="w-10 h-10 animate-spin" /> : "Log in"}
          </button>
          <div className="my-4 w-full flex items-center gap-2">
            <div className="w-full h-[1px] border-b border-black/50" />
            <h1 className="text-sm font-bold">or</h1>
            <div className="w-full h-[1px] border-b border-black/50" />
          </div>
          <Link
            to={"/auth/user/login/qrcode"}
            className="btn bg-[#4A00FF] hover:bg-violet-900 shadow-md text-2xl text-white rounded-none w-full h-[60px]">
            Scan QR Code
          </Link>
        </div>
      </form>
    </div>
  );
}; */
