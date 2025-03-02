import { Html5QrcodeScanner } from "html5-qrcode";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bounce from "../components/animation/bounce";
import { Loader2 } from "lucide-react";
import axios from "../api/axios";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import AccessibilityPanel from "../components/accessibility/AccessibilityPanel";

const ScanQR = () => {
  const { setUser, setToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 500,
          height: 500,
        },
        disableFlip: true,
        fps: 10,
      },
      false,
    );

    const success = (decodedText) => {
      setScanResult(decodedText);
      scanner.clear();
    };

    const error = (err) => {
      console.warn(err);
    };

    scanner.render(success, error);

    return () => {
      scanner.clear().catch((error) => {
        console.error("Failed to clear qr code scanner.", error);
      });
    };
  }, []);

  useEffect(() => {
    if (scanResult) {
      const fetchUser = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            `/user/login/qrcode/${scanResult.split("/user/")[1]}`,
            {
              withCredentials: true,
            },
          );
          console.log(res.data);
          setUser(res.data.user);
          setToken(res.data.accessToken);
          toast.success(res.data.message);
          navigate("/");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [scanResult]);

  return (
    <div className="flex h-full w-full flex-col items-center bg-skin-btnBGhov gap-10 justify-center">
      <div id="reader" className="bg-white rounded-2xl font-sans" style={{ width: "500px" }}></div>
      {scanResult && (
        <div className="flex flex-col items-center justify-center gap-1">
          {loading ? (
            <Loader2 className="h-10 w-10 animate-spin" />
          ) : (
            <>
              <Bounce>
                <img src="/done.svg" alt="done" className="h-20 w-20" />
              </Bounce>
              <Bounce delay={0.1}>
                <h1 className="label font-sans text-3xl font-bold text-green-500">
                  Verified Successfully!
                </h1>
              </Bounce>
              <Bounce delay={0.2}>
                <Link to={"/"} className="btn btn-success text-white shadow-md">
                  Go to Home page
                </Link>
              </Bounce>
            </>
          )}
        </div>
      )}
      <AccessibilityPanel />
    </div>
  );
};

export default ScanQR;
