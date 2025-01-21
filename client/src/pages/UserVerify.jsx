import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "../api/axios";

const UserVerify = () => {
  const { setUser, setToken, userId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    console.log({ userId, otp });
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "/user/verify",
        { userId, otp },
        {
          withCredentials: true,
        },
      );
      console.log(res.data);
      setUser(res.data.user);
      setToken(res.data.accessToken);
      toast.success(res.data.message);
      navigate("/home");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <form onSubmit={handleVerify} className="flex w-1/2 flex-col gap-4">
        <h1 className="w-full"></h1>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-sans">
              Type the code receive from email
            </span>
          </div>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="input input-bordered h-[60px] w-full rounded-2xl"
          />
        </label>
        <button
          disabled={loading}
          type="submit"
          className="btn h-[60px] w-full rounded-2xl bg-black font-display text-2xl text-white"
        >
          {loading ? <Loader2 className="h-10 w-10 animate-spin" /> : "Verify"}
        </button>
      </form>
    </div>
  );
};
export default UserVerify;
