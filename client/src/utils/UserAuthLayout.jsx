import { Outlet } from "react-router-dom";
import speechObject from "./speechObject";

const UserAuthLayout = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave} = speechObject();
  
  return (
    <div className="flex h-screen w-full">
      <div
        className="h-full w-[40%] bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: "url(/bg_img.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-50" />
        <h1 className="absolute left-30 top-65 text-6xl font-bold font-display bg-skin-pnlBG p-5 rounded-2xl text-skin-prim"
          onMouseEnter={()=>handleMouseEnter("KAINAKAP")} onMouseLeave={handleMouseLeave}
        >
          KAINAKAP
        </h1>
      </div>

      <div className="flex h-full w-[60%] flex-col items-center justify-center gap-2 bg-skin-pnlAltBG">
        <Outlet />
        <span className="label w-1/2 p-4 text-center font-sans text-xs text-skin-mute" onMouseEnter={()=>handleMouseEnter("By signing in, I have read, understood, and agreed to the KAINAKAP Terms of Use and Privacy Policy (PH).")} onMouseLeave={handleMouseLeave}>
          By signing in, I have read, understood, and agreed to the
          KAINAKAP Terms of Use and Privacy Policy (PH).
        </span>
      </div>
    </div>
  );
};
export default UserAuthLayout;
