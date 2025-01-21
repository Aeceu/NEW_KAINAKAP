import { useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const Footer = () => {
  return (
    <footer className="flex h-16 flex-row items-center justify-between bg-gray-400 px-10 py-10 font-sans text-white">
      <p>KAINAKAP Organization, All rights reserved &copy; 2024</p>
      <nav>
        <ul className="flex flex-row gap-x-8">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>User Agreement</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
