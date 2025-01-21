import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { adminSignup } from "../schema/adminSchema";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import axios from "../api/axios";

const AdminSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(adminSignup),
  });
  const nav = useNavigate();
  const onSubmit = async (data) => {
    try {
      const { repassword, ...adminData } = data;
      const res = await axios.post("/admin/signup", { newAdmin: adminData });
      console.log(res.data);
      toast.success(res.data.message);
      nav("/auth/admin/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-2">
      <div className="absolute left-36 top-10 h-[700px] w-[700px] rounded-full bg-red-500 opacity-20 blur-[80px] filter"></div>
      <div className="absolute bottom-10 h-[700px] w-[700px] rounded-full bg-violet-500 opacity-20 blur-[80px] filter"></div>
      <h1 className="text-center text-4xl font-bold">Welcome to KAINAKAP</h1>
      <p className="mb-4 text-lg">Create your admin account</p>
      <div className="card w-[700px] bg-base-100 p-4 shadow-2xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body grid grid-cols-4 gap-4"
        >
          <label className="form-control col-span-2 w-full">
            <input
              type="text"
              placeholder="First name"
              className={`input input-bordered h-[60px] w-full rounded-2xl font-sans ${
                errors.email && "input-error"
              }`}
              {...register("firstName")}
            />
            {errors.firstName && (
              <div className="label">
                <span className="text-md label-text text-red-500">
                  {errors.firstName.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control col-span-2 w-full">
            <input
              type="text"
              placeholder="Last name"
              className={`input input-bordered h-[60px] w-full rounded-2xl font-sans ${
                errors.email && "input-error"
              }`}
              {...register("lastName")}
            />
            {errors.lastName && (
              <div className="label">
                <span className="text-md label-text text-red-500">
                  {errors.lastName.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control col-span-2 w-full">
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
          <label className="form-control col-span-2 w-full">
            <input
              type="text"
              placeholder="user name"
              className={`input input-bordered h-[60px] w-full rounded-2xl font-sans ${
                errors.email && "input-error"
              }`}
              {...register("userName")}
            />
            {errors.username && (
              <div className="label">
                <span className="text-md label-text text-red-500">
                  {errors.username.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control col-span-4 w-full">
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
          <label className="form-control col-span-4 w-full">
            <input
              type="password"
              placeholder="re-type password"
              className={`input input-bordered h-[60px] w-full rounded-2xl font-sans ${
                errors.repassword && "input-error"
              }`}
              {...register("repassword")}
            />
            {errors.repassword && (
              <div className="label">
                <span className="text-md label-text text-red-500">
                  {errors.repassword.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control col-span-4 w-full">
            <input
              type="text"
              placeholder="phone"
              className={`input input-bordered h-[60px] w-full rounded-2xl font-sans ${
                errors.email && "input-error"
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <div className="label">
                <span className="text-md label-text text-red-500">
                  {errors.phone.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control col-span-4 w-full">
            <select
              className={`select select-bordered h-[60px] w-full rounded-2xl ${
                errors.role && "select-error"
              }`}
              {...register("role")}
            >
              <option disabled selected>
                What's your role?
              </option>
              <option>Administrative</option>
              <option>Employee</option>
            </select>
            {errors.role && (
              <div className="label">
                <span className="text-md label-text rounded-2xl text-red-500">
                  {errors.role.message}
                </span>
              </div>
            )}
          </label>

          <div className="form-control col-span-4 mt-6 flex items-center justify-center gap-2">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn w-max rounded-full bg-orange-400 px-16 font-display text-white"
            >
              {isSubmitting ? (
                <Loader2 className="h-10 w-10 animate-spin" />
              ) : (
                "Sign up"
              )}
            </button>
            <p className="label flex items-center gap-2 font-sans text-sm">
              Already have an account ?
              <Link
                to="/auth/admin/login"
                className="font-sans font-semibold text-primary"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminSignup;
