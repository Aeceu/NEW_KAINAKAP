import VerifiedAndNoneVerified from "../components/charts/VerifiedAndNoneVerified";
import AdminUserChart from "../components/charts/AdminUserChart";
import AdminTable from "../components/tables/AdminTable";
import UserTable from "../components/tables/UserTable";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "../api/axios";

const AdminDashboard = () => {
  const { admin } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get("/user");
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getAllAdmins = async () => {
      try {
        const res = await axios.get("/admin");
        console.log(res.data);
        setAdmins(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
    getAllAdmins();
  }, []);

  return (
    <div className="flex h-[calc(100vh-100px)] w-full flex-col overflow-hidden">
      <div className="absolute left-[30%] z-0 h-[500px] w-[500px] rounded-full bg-blue-500 opacity-50 blur-[120px] filter" />
      <div className="absolute left-[5%] top-[20%] z-0 h-[500px] w-[500px] rounded-full bg-violet-500 opacity-50 blur-[120px] filter" />
      <div className="absolute left-[0%] top-[30%] z-0 h-[500px] w-[500px] rounded-full bg-indigo-500 opacity-50 blur-[120px] filter" />
      <div className="absolute left-[-10%] top-[30%] z-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500 opacity-50 blur-[120px] filter" />
      <div className="absolute right-[5%] top-[20%] z-0 h-[500px] w-[500px] rounded-full bg-pink-500 opacity-50 blur-[120px] filter" />
      <div className="absolute right-[0%] top-[30%] z-0 h-[500px] w-[500px] rounded-full bg-orange-500 opacity-50 blur-[120px] filter" />
      <div className="z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="grid h-3/4 w-3/4 grid-cols-4 gap-2 rounded-md bg-white shadow-lg">
          <div className="flex h-full w-full flex-col items-center gap-2 p-8">
            <h1 className="w-full text-center font-display text-3xl text-orange-500">
              Admin's Profile
            </h1>
            <img
              src="/profile_img.png"
              alt="profile"
              className="h-[140px] w-[140px] rounded-full object-cover"
            />
            <span className="flex flex-col items-center leading-none">
              <h1 className="text-lg font-medium">{admin?.username}</h1>
            </span>
            <span className="flex w-full flex-col gap-2">
              <h1>
                <b>Name:</b> {admin?.firstName} {admin?.lastName}
              </h1>
              <h1>
                <b>Email:</b> {admin?.email}
              </h1>
              <h1>
                <b>Role:</b> {admin?.role}
              </h1>
              <h1>
                <b>Phone No.:</b> {admin?.phone}
              </h1>
            </span>
          </div>
          <div className="col-span-3 flex w-full flex-col items-center">
            <div className="grid h-1/2 w-full grid-cols-3 gap-2 p-4">
              <div className="flex h-[300px] w-full flex-col items-center overflow-y-auto rounded-md border shadow-md">
                <h1 className="w-full py-2 text-center">
                  Verified and Non-Verified Users
                </h1>
                <VerifiedAndNoneVerified users={users} />
              </div>
              <div className="col-span-2 h-[300px] w-full overflow-y-auto rounded-md border shadow-md">
                <span className="flex items-center p-2">
                  <h1 className="w-full p-2 text-center">
                    Verified and Non-Verified User
                  </h1>
                </span>
                <UserTable users={users} />
              </div>
            </div>
            <div className="grid h-1/2 w-full grid-cols-3 gap-4 p-4">
              <div className="col-span-2 h-[300px] w-full overflow-y-auto rounded-md border shadow-md">
                <AdminTable admins={admins} />
              </div>

              <div className="flex h-[300px] w-full flex-col items-center overflow-y-auto rounded-md border shadow-md">
                <AdminUserChart admins={admins} users={users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
