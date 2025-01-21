import { Link } from "react-router-dom";
import { useUserLogout } from "../hooks/user/useLogout";
import speechObject from "../utils/speechObject";

const Navbar = () => {
  const logout = useUserLogout();
  const { isHovered, handleMouseEnter, handleMouseLeave } = speechObject();
  return (
    <div className="navbar h-[100px] bg-base-100 px-16">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold">KAINAKAP</a>
      </div>
      <div className="flex items-center gap-2 ">
        <Link
          to="/land"
          className="rounded-lg btn font-display btn-accent px-3 py-2 text-skin-invr transition-colors "
          onMouseEnter={() =>
            handleMouseEnter("Navigate to Get Started Page")
          }
          onMouseLeave={handleMouseLeave}
        >
          Get Started
        </Link>
        <button
          onClick={logout}
          className="btn btn-accent font-display text-white shadow-md">
          Log out
        </button>
      </div>
    </div>
  );
};
export default Navbar;
