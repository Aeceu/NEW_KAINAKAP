import { Outlet, Link } from "react-router-dom";
import speechObject from "./utils/speechObject";
import AccessibilityPanel from "./components/accessibility/AccessibilityPanel";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const PublicLayout = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = speechObject();
  const { user } = useContext(UserContext)
  return (
    <div className="bg-green-50 text-grn950">
      <nav className="flex items-center justify-between bg-skin-pnlAltBG px-10 py-5 shadow-md">
        <Link
          to="/auth/user/login"
          className="font-display text-skin-prim"
          onMouseEnter={() => handleMouseEnter("Ka enah kap Home")}
          onMouseLeave={handleMouseLeave}
        >
          KAINAKAP
        </Link>
        <AccessibilityPanel />
        <ul className="item-center flex gap-10">
          {
            user ? (
              <li>
                <Link
                  to="/home"
                  onMouseEnter={() =>
                    handleMouseEnter("Navigate to Home Page")
                  }
                  onMouseLeave={handleMouseLeave}
                  className="rounded-lg bg-skin-btnBG px-3 py-2 font-sans text-skin-invr transition-colors hover:bg-skin-btnBGhov hover:text-skin-invrHov active:bg-skin-btnBGact active:text-skin-invrAct"
                  >
                  Home
                </Link>
              </li>
            ):(
              <>
              <li>
                <Link
                  to="/auth/user/login"
                  onMouseEnter={() =>
                    handleMouseEnter("Navigate to Member Log In Page")
                  }
                  onMouseLeave={handleMouseLeave}
                  className="text-skin-prim font-sans"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/land"
                  className="rounded-lg bg-skin-btnBG px-3 py-2 font-sans text-skin-invr transition-colors hover:bg-skin-btnBGhov hover:text-skin-invrHov active:bg-skin-btnBGact active:text-skin-invrAct"
                  onMouseEnter={() =>
                    handleMouseEnter("Navigate to Get Started Page")
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  Get Started
                </Link>
              </li>
              </>
            )
          }
        </ul>
      </nav>
      <Outlet />
      <footer className="flex justify-between bg-skin-pnlAltBG px-10 py-5 text-skin-prim">
        <p
          onMouseEnter={() =>
            handleMouseEnter("Ka enah kap Organization, All rights reserved.")
          }
          onMouseLeave={handleMouseLeave}
        >
          KAINAKAP Organization, All rights reserved &copy; 2024
        </p>
        <ul className="flex gap-10">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>User Agreement</li>
          <li>
            <Link
              onMouseEnter={() => handleMouseEnter("Navigate to admin log in page")}
              onMouseLeave={handleMouseLeave}
              to="/auth/admin/login"
            >
              Administrator
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default PublicLayout;
