import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      data-theme="light"
      className="poppins-regular flex h-screen w-full items-center justify-center"
    >
      <Outlet />
    </div>
  );
};
export default AuthLayout;
