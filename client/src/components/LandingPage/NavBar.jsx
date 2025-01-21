import { useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const NavBar = () => {
  return (
    <nav className="bg-secondary-container dark:bg-dark-secondary-container flex h-16 flex-row items-center justify-between px-10 py-10">
      <ul className="flex gap-5">
        <li>
          <a
            href="AdminLogin"
            className="primary text-on-surface-variant hover:text-surface-tint dark:text-dark-on-surface-variant dark:hover:text-dark-surface-tint px-3 py-3 font-sans"
          >
            Admin
          </a>
        </li>
        <li>
          <a
            href="UserLogin"
            className="text-on-surface-variant hover:text-surface-tint dark:text-dark-on-surface-variant dark:hover:text-dark-surface-tint px-3 py-3 font-sans"
          >
            Login
          </a>
        </li>
        <li>
          <button
            href="#"
            className="text-on-primary hover:bg-primary-fixed hover:text-on-primary-fixed dark:bg-dark-primary dark:text-dark-on-primary dark:hover:bg-dark-on-primary-fixed-variant dark:hover:text-dark-surface-tint rounded-lg bg-primary px-3 py-3 font-sans transition"
          >
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
