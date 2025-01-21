import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../api/axios";

const Home = () => {
  const [showQR, setShowQR] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { user, setUser, setToken, setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      setDeleteLoading(true);
      await axios.delete(`/user/${user.id}`);
      setUser(null);
      setToken("");
      setUserId("");
      navigate("/auth/user/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete account");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="absolute left-[30%] z-0 h-[700px] w-[700px] rounded-full bg-blue-500 opacity-50 blur-[120px] filter" />
      <div className="absolute left-[5%] top-[10%] z-0 h-[700px] w-[700px] rounded-full bg-violet-500 opacity-50 blur-[120px] filter" />
      <div className="absolute left-[0%] top-[20%] z-0 h-[700px] w-[700px] rounded-full bg-indigo-500 opacity-50 blur-[120px] filter" />
      <div className="absolute left-[-10%] top-[30%] z-0 h-[700px] w-[700px] rounded-full bg-fuchsia-500 opacity-50 blur-[120px] filter" />
      <div className="absolute right-[5%] top-[10%] z-0 h-[700px] w-[700px] rounded-full bg-pink-500 opacity-50 blur-[120px] filter" />
      <div className="absolute right-[0%] top-[20%] z-0 h-[700px] w-[700px] rounded-full bg-orange-500 opacity-50 blur-[120px] filter" />

      <div className="z-10 flex h-[500px] w-full shrink-0 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">THE EMPOWERING PWDS</h1>
        <p className="mt-4 w-1/2 text-center">
          is a web-based system that aims to empower persons with disabilities
          (PWDs) by providing them with a secure and convenient way to
          authenticate account.
        </p>
        <span className="flex items-center justify-center gap-2">
          <Link to={"/"} className="btn btn-success mt-4 text-white">
            Go to Service HUB
          </Link>
          <Link to={"/"} className="btn btn-primary mt-4 text-white">
            Apply for membership
          </Link>
        </span>
      </div>

      <div className="z-10 flex w-full items-center justify-center p-8">
        <div className="mockup-browser w-3/4 border-2 bg-white">

          <div className="mockup-browser-toolbar relative">
            <div className="absolute left-24 top-1 flex w-max items-center gap-2">
              <div className="badge badge-success badge-md text-white">
                Status:
              </div>
              <p className="text-sm font-extrabold tracking-widest">
                {user.verificationStatus}
              </p>
            </div>

            <div className="input">https://pwd-kainakap.com</div>

            <div className="absolute right-12 top-0 flex w-max items-center gap-2">
                  <button
                    disabled={deleteLoading}
                    onClick={handleDeleteAccount}
                    className="rounded-lg bg-rose-500 px-2 py-1 text-sm text-white"
                  >
                    {deleteLoading ? "Deleting account...." : "Delete account"}
                  </button>
            </div>
          </div>

          <div className="flex h-full flex-col gap-4 bg-base-200 px-8 py-8">
            <div className="flex gap-4">
              <span className="flex shrink-0 flex-col gap-2">
                <img
                  src={
                    showQR
                      ? user.qr_code.secure_url
                      : user.userFiles.profilePhotoUrl
                  }
                  alt="qr_code"
                  className="col-span-2 h-[300px] w-[300px] rounded-md"
                />
                <span className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setShowQR(true)}
                    className="btn btn-info btn-md flex items-center justify-center text-white shadow-md"
                  >
                    Show QR Code
                  </button>
                  <button
                    onClick={() => setShowQR(false)}
                    className="btn btn-success btn-md flex items-center justify-center text-white shadow-md"
                  >
                    Show Profile Photo
                  </button>
                </span>
              </span>
              <div className="w-full">
                <ul className="grid w-full grid-cols-4 gap-4">
                  <h1 className="col-span-4 w-full border-b text-2xl font-bold">
                    Personal Information
                  </h1>
                  <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    First name: {user.firstName}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Middle name: {user.middleName}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Last name: {user.lastName}
                  </li>
                  <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Email: {user.email}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Age: {user.age}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Gender: {user.gender}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Birthdate: {user.birthdate}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Birthplace: {user.birthplace}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Religion: {user.religion}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Citizenship: {user.citizenship}
                  </li>
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Civil Status: {user.civil}
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <ul className="grid w-full grid-cols-4 gap-4">
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Contact Information
                </h1>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Phone no.: {user.phone}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Landline: {user.landline}
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="grid w-full grid-cols-4 gap-4">
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Address Information
                </h1>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  House no.: {user.houseno}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Street: {user.street}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Baranggay: {user.baranggay}
                </li>
                {user.city && (
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    City: {user.city}
                  </li>
                )}
                {user.province && (
                  <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                    Province: {user.province}
                  </li>
                )}
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Region: {user.region}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Zip code: {user.zipcode}
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="grid w-full grid-cols-4 gap-4">
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Education Information
                </h1>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Elementary school: {user.elementary}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Elementary school attainment:{" "}
                  {user.attain === "Select your school Attainment"
                    ? ""
                    : user.attain}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Junior Highschool: {user.highschool}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Junior Highschool attainment:{" "}
                  {user.attain === "Select your school Attainment"
                    ? ""
                    : user.attain1}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Senior Highschool: {user.senior}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Senior Highschool attainment:{" "}
                  {user.attain === "Select your school Attainment"
                    ? ""
                    : user.attain2}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  College: {user.college}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  College attainment:{" "}
                  {user.attain === "Select your school Attainment"
                    ? ""
                    : user.attain3}
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="grid w-full grid-cols-4 gap-4">
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Employment Information
                </h1>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Current employment: {user.employment}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Occupation: {user.occupation}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Year's employed: {user.yearEmploy}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Skill's attain: {user.skill1}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Skill's attain: {user.skill2}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Year's employed: {user.yearUnemploy}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Skill's attain: {user.skill1_1}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Skill's attain: {user.skill2_1}
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="grid w-full grid-cols-4 gap-4">
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Medical Information
                </h1>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Blood: {user.blood}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Height: {user.height}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Weight: {user.weight}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Disability: {user.disability}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Visibility: {user.visibility}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Made you disabled: {user.made_disabled}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Curent status: {user.status}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Device using: {user.device}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Specific Device using: {user.specificDevice}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Medicine using: {user.medicine}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Specific medicine using: {user.specificMedicine}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Others: {user.others}
                </li>
              </ul>
            </div>

            <div className="w-full">
              <ul className="grid w-full grid-cols-4 gap-4">
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Person to contact incase of emergency
                </h1>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Lastname: {user.emergencyPerson?.lastName}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Firstname: {user.emergencyPerson?.firstName}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Middlename: {user.emergencyPerson?.middleName}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Suffice: {user.emergencyPerson?.suffix}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Age: {user.emergencyPerson?.age}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Gender: {user.emergencyPerson?.gender}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Relationship: {user.emergencyPerson?.relationship}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Religion: {user.emergencyPerson?.religion}
                </li>
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Emergency Contact Information
                </h1>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Email: {user.emergencyPerson?.email}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Phone no.: {user.emergencyPerson?.phone}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Landline: {user.emergencyPerson?.landline}
                </li>
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  Home/Permanent Address
                </h1>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  House no.: {user.emergencyPerson?.houseno}
                </li>
                <li className="col-span-2 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Street: {user.emergencyPerson?.street}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Baranggay: {user.emergencyPerson?.baranggay}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  District: {user.emergencyPerson?.district}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  City: {user.emergencyPerson?.city}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Province: {user.emergencyPerson?.province}
                </li>
                <li className="col-span-1 h-max w-full rounded-md bg-white px-4 py-2 shadow-md">
                  Zip code: {user.emergencyPerson?.zipcode}
                </li>
              </ul>
            </div>

            <div className="w-full">
              <ul className="grid w-full grid-cols-4 gap-4">
                <h1 className="col-span-4 mt-2 w-full border-b text-2xl font-extrabold tracking-widest">
                  User Documents
                </h1>
                <span>
                  <h1 className="text-lg font-extrabold">Valid ID</h1>
                  <img
                    src={user.userFiles.validIdUrl}
                    alt={user.userFiles.validIdUrl}
                    className="h-[150px] w-[300px] rounded-md object-cover shadow-md"
                  />
                </span>
                <span>
                  <h1 className="text-lg font-extrabold">PWD ID</h1>
                  <img
                    src={user.userFiles.pwdIdUrl}
                    alt={user.userFiles.pwdIdUrl}
                    className="h-[150px] w-[300px] rounded-md object-cover shadow-md"
                  />
                </span>
                <span>
                  <h1 className="text-lg font-extrabold">
                    Brgy. Residence Certificate
                  </h1>
                  <img
                    src={user.userFiles.brgyResidenceCertificateUrl}
                    alt={user.userFiles.brgyResidenceCertificateUrl}
                    className="h-[150px] w-[300px] rounded-md object-cover shadow-md"
                  />
                </span>
                <span>
                  <h1 className="text-lg font-extrabold">Resume</h1>
                  <img
                    src={user.userFiles.resumeUrl}
                    alt={user.userFiles.resumeUrl}
                    className="h-[150px] w-[300px] rounded-md object-cover shadow-md"
                  />
                </span>
                <span>
                  <h1 className="text-lg font-extrabold">
                    Medical Certificate
                  </h1>
                  <img
                    src={user.userFiles.medicalCertificateUrl}
                    alt={user.userFiles.medicalCertificateUrl}
                    className="h-[150px] w-[300px] rounded-md object-cover shadow-md"
                  />
                </span>
                <span>
                  <h1 className="text-lg font-extrabold">
                    Proof of disability
                  </h1>
                  <img
                    src={user.userFiles.proofOfDisabilityUrl}
                    alt={user.userFiles.proofOfDisabilityUrl}
                    className="h-[150px] w-[300px] rounded-md object-cover shadow-md"
                  />
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
