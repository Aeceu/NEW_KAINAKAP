import { useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const ArticleGallery = () => {
  return (
    <section className="flex flex-col items-center justify-items-center gap-3">
      <nav>
        <ul className="text-on-surface-variant dark:text-dark-on-surface-variant flex flex-row gap-x-32 font-sans">
          <li>Latest News Events Milestones</li>
        </ul>
      </nav>
      <article className="bg-secondary-container dark:bg-dark-secondary-container mx-20 flex h-[17rem] flex-row gap-6 rounded-2xl">
        <img className="m-5" src={Rectangle2} alt="" />
        <div>
          <h3 className="text-on-surface dark:text-dark-on-surface pt-5 font-display text-3xl">
            One thousand wheelchairs
            <br />
            distributed to KAINAKAP
            <br />
            members
          </h3>
          <time>
            className="pt-4 font-sans text-on-surface dark:text-dark-on-surface"
            dateTime="2023-11-21"
          </time>
          November 21, 2023
          <p className="text-on-surface dark:text-dark-on-surface pt-1 font-sans text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            non\npellentesque purus. Curabitur malesuada elementum ornare.
            Vestibulum\naliquet lectus ex, a dignissim urna sodales nec. Lorem
            ipsum dolor\nsit amet, consectetur adipiscing elit. Aliquam viverra
            velit nisl,\nin placerat turpis luctus vitae. Suspendisse vitae
            posuere tortor,\nblandit eliscipie dipiscing elit mun niam siam dun
            mecinario sham\nheliam aliguq mal...
          </p>
        </div>
      </article>
    </section>
  );
};

export default ArticleGallery;
