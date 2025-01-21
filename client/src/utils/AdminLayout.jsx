import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
const AdminLayout = () => {
  return (
    <div
      data-theme="light"
      className="poppins-regular flex h-screen w-full flex-col"
    >
      <AdminNavbar />
      <Outlet />
    </div>
  );
};
export default AdminLayout;
