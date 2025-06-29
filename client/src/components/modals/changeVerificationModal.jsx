import { useState } from "react";
import axios from "../../api/axios";
import toast from "react-hot-toast";

const ChangeVerificationModal = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [newStatus, setNewStatus] = useState(user.verificationStatus);

  const handleUpdateUserVerificationStatus = async () => {
    const modal = document.getElementById(`modal-${user.id}`);
    try {
      setLoading(true);
      const res = await axios.put("/update-verification", {
        userId: user.id,
        newStatus,
      });
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      modal.close();
    }
  };

  const openModal = () => {
    const modal = document.getElementById(`modal-${user.id}`);
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
      {/* Open the modal using the openModal function */}
      <button
        onClick={openModal}
        className="btn btn-warning btn-sm text-xs text-white shadow-md"
      >
        Change
      </button>
      <dialog id={`modal-${user.id}`} className="modal">
        <div className="modal-box h-max">
          <h1 className="mb-4 flex items-center justify-center text-xl font-bold">
            Change User's Status
          </h1>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setNewStatus("verified")}
              className={`btn rounded-md p-2 ${newStatus === "verified" && "bg-emerald-500 text-white"}`}
            >
              Verified
            </button>
            <button
              onClick={() => setNewStatus("not verified")}
              className={`btn rounded-md p-2 ${newStatus === "not verified" && "bg-emerald-500 text-white"}`}
            >
              Not Verified
            </button>
          </div>
          <form
            method="dialog"
            className="modal-backdrop mt-4 flex items-center justify-end gap-2"
          >
            <button
              disabled={loading}
              onClick={handleUpdateUserVerificationStatus}
              type="submit"
              className="btn btn-success btn-sm text-white"
            >
              {loading ? "loading..." : "save"}
            </button>
            <button className="btn btn-error btn-sm text-white">cancel</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ChangeVerificationModal;
