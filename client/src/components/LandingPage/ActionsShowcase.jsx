import { useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const ActionsShowcase = () => {
  return (
    <div>
      <article className="dark:bg-dark-secondary-container bg-secondary-container h-96 w-1/2 flex-1 rounded-2xl px-3 pt-4 text-justify">
        <img className="pb-2" src={Rectangle} alt="" />
        <h3 className="dark:text-dark-on-secondary-container text-on-secondary-container pb-3 text-center font-display text-lg font-bold">
          Equipment and accomodations
        </h3>
        <p className="dark:text-dark-on-surface text-on-surface text-sm">
          We provide equipment and accomodations for our members who relies on
          special equipment to interact with others and their surrounding.
        </p>
      </article>
      <article className="dark:bg-dark-secondary-container bg-secondary-container h-96 flex-1 rounded-2xl px-3 pt-4 text-justify">
        <img src={Rectangle} alt="" />
        <h3 className="dark:text-dark-on-secondary-container text-on-secondary-container pb-3 text-center font-display text-lg font-bold">
          Support programs
        </h3>
        <p className="dark:text-dark-on-surface text-usm text-on-surface">
          We provide equipment and accomodations for our members who relies on
          special equipment to interact with others and their surrounding.
        </p>
      </article>
      <article className="dark:bg-dark-secondary-container bg-secondary-container h-96 flex-1 rounded-2xl px-3 pt-4 text-justify">
        <img src={Rectangle} alt="" />
        <h3 className="dark:text-dark-on-secondary-container text-on-secondary-container pb-3 text-center font-display text-lg font-bold">
          Representation
        </h3>
        <p className="dark:text-dark-on-surface text-on-surface text-sm">
          With more members, the organization becomes a representative for
          people living with disabilities and allows us to directly influence
          the decisions of local governments to accomodate for the struggles of
          our stakeholders.
        </p>
      </article>
    </div>
  );
};

export default ActionsShowcase;
