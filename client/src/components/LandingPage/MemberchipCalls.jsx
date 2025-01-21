import { useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const MembershipCall = () => {
  return (
    <section className="bg-primary-container dark:bg-dark-primary-container m-5 flex h-[17rem] flex-col items-center rounded-2xl pt-5 text-center">
      <div>
        <h2 className="text-on-primary-container dark:text-dark-on-primary-container pb-8 pt-5 font-display text-3xl">
          Apply now to become a member of our
          <br />
          organization and become a
          <br />
          real voice in our community!
        </h2>
        <button className="text-on-primary hover:bg-on-primary-fixed hover:text-primary-container dark:bg-dark-primary dark:text-dark-on-primary dark:hover:bg-dark-on-primary-fixed dark:hover:text-dark-surface-tint h-10 w-28 rounded-lg bg-primary transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MembershipCall;
