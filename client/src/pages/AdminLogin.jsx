import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLogin } from "../schema/adminSchema";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "../api/axios";

const AdminLogin = () => {
  const { setAdmin, setAdminToken } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(adminLogin),
  });

  const nav = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/admin/login", data, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setAdmin(res.data.admin);
      setAdminToken(res.data.accessToken);

      nav("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-2">
      <div className="absolute left-36 top-10 h-[700px] w-[700px] rounded-full bg-red-500 opacity-20 blur-[80px] filter"></div>
      <div className="absolute bottom-10 h-[700px] w-[700px] rounded-full bg-violet-500 opacity-20 blur-[80px] filter"></div>
      <h1 className="text-center font-display text-4xl font-bold">
        Welcome to KAINAKAP
      </h1>
      <p className="mb-4 font-sans text-lg">Login to your admin account</p>
      <div className="card w-[500px] bg-base-100 p-4 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-4">
          <label className="form-control w-full">
            <input
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
            <input
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
          <span className="flex w-full items-center justify-between">
            <div className="form-control">
              <label className="label cursor-pointer gap-2">
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-sm"
                />
                <span className="label-text font-sans">Remember me</span>
              </label>
            </div>
            <Link to={"/"} className="link font-sans text-sm">
              Forgot password?
            </Link>
          </span>

          <div className="form-control mt-6 flex items-center justify-center gap-2">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn w-max rounded-full bg-orange-400 px-16 font-display text-white"
            >
              {isSubmitting ? (
                <Loader2 className="h-10 w-10 animate-spin" />
              ) : (
                "Login"
              )}
            </button>
            <p className="label flex items-center gap-2 font-sans text-sm">
              Don't have an account ?{" "}
              <Link
                to="/auth/admin/signup"
                className="font-sans font-semibold text-primary"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminLogin;
