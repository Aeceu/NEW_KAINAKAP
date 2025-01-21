import VerifiedAndNoneVerified from "../components/charts/VerifiedAndNoneVerified";
import AdminUserChart from "../components/charts/AdminUserChart";
import AdminTable from "../components/tables/AdminTable";
import UserTable from "../components/tables/UserTable";
import UserModal from "../components/modals/userModal";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AdminDashboard = () => {
  const { admin } = useContext(UserContext);
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
            <h1 className="w-full text-center text-3xl font-display text-orange-500">
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
            <UserModal />
          </div>
          <div className="col-span-3 flex w-full flex-col items-center">
            <div className="grid h-1/2 w-full grid-cols-3 gap-2 p-4">
              <div className="flex h-full w-full flex-col items-center rounded-md border shadow-md">
                <h1 className="w-full py-2 text-center">
                  Verified and Non-Verified Users
                </h1>
                <VerifiedAndNoneVerified />
              </div>
              <div className="col-span-2 w-full rounded-md border shadow-md">
                <span className="flex items-center p-2">
                  <h1 className="w-full p-2 text-center">
                    Verified and Non-Verified User
                  </h1>
                </span>
                <UserTable />
              </div>
            </div>
            <div className="grid h-1/2 w-full grid-cols-3 gap-4 p-4">
              <div className="col-span-2 w-full border shadow-md">
                <AdminTable />
              </div>

              <div className="h-full w-full rounded-md border p-2 shadow-md">
                <AdminUserChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
