import { useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const History = () => {
  return (
    <article className="mx-20 flex h-[63rem] flex-col items-center gap-6 rounded-2xl">
      <div>
        <h2 className="dark:text-dark-primary font-display text-2xl text-primary">
          Our History
        </h2>
      </div>
      <div className="flex flex-row gap-3">
        <img src={Rectangle3} alt="" />
        <p className="text-on-surface dark:text-dark-on-surface pt-8 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          non\npellentesque purus. Curabitur malesuada elementum ornare.
          Vestibulum\naliquet lectus ex, a dignissim urna sodales nec. Lorem
          ipsum dolor sit\namet, consectetur adipiscing elit. Aliquam viverra
          velit nisl, in\nplacerat turpis luctus vitae. Suspendisse vitae
          posuere tortor,\nblandit eleifend massa. Morbi ac lectus quis elit
          aliquet tincidunt\nsit amet nec felis. Suspendisse potenti. Proin
          venenatis nulla ac\nvarius posuere. Donec ut mattis est, ullamcorper
          bibendum nisl.\nQuisque est dolor, pharetra sit amet luctus et,
          venenatis sit amet\nodio. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices\nposuere cubilia curae; Sed id ultrices augue,
          id finibus quam. Mauris\nsodales ipsum arcu, in scelerisque quam
          suscipit eget. Nullam\ndignissim, magna vitae sollicitudin posuere,
          risus ante sagittis\nturpis, sagittis consectetur augue massa non
          odio. Ut et mi dapibus\nmagna pretium tincidunt. Phasellus et quam
          congue sem varius commodo\nac sed nisl. Quisque bibendum, sapien eu
          tincidunt aliquam, mauris\nante egestas tortor, nec faucibus urna
          turpis non velit. Nunc at leo\ntellus. Donec ut euismod lorem.
          Maecenas rhoncus aliquam vulputate.\nInteger vehicula sapien sed
          maximus pellentesque. Vivamus id lacus\nornare, auctor mi sit amet,
          finibus eros. Nulla dapibus consectetur\nnisl ut convallis. Donec eu
          laoreet lacus. Lorem ipsum dolor sit amet,\nconsectetur adipiscing
          elit. Praesent finibus hendrerit eros, vitae\ndignissim eros molestie
          vel. Vivamus vestibulum, lorem sit amet\nfeugiat tempus, lacus lorem
          aliquam nibh, eget ultrices metus mauris\nvitae urna. Nunc mi mi,
          semper quis turpis sit amet, ultrices\nmalesuada metus. Phasellus
          sodales risus tincidunt, finibus massa at,\nvulputate augue. Phasellus
          auctor nisi elit, sit amet maximus dolor\nlaoreet at. Vestibulum
          consequat augue.
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <img src={Rectangle3} alt="" />
        <p className="text-on-surface dark:text-dark-on-surface pt-8 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          non\npellentesque purus. Curabitur malesuada elementum ornare.
          Vestibulum\naliquet lectus ex, a dignissim urna sodales nec. Lorem
          ipsum dolor sit\namet, consectetur adipiscing elit. Aliquam viverra
          velit nisl, in\nplacerat turpis luctus vitae. Suspendisse vitae
          posuere tortor,\nblandit eleifend massa. Morbi ac lectus quis elit
          aliquet tincidunt\nsit amet nec felis. Suspendisse potenti. Proin
          venenatis nulla ac\nvarius posuere. Donec ut mattis est, ullamcorper
          bibendum nisl.\nQuisque est dolor, pharetra sit amet luctus et,
          venenatis sit amet\nodio. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices\nposuere cubilia curae; Sed id ultrices augue,
          id finibus quam. Mauris\nsodales ipsum arcu, in scelerisque quam
          suscipit eget. Nullam\ndignissim, magna vitae sollicitudin posuere,
          risus ante sagittis\nturpis, sagittis consectetur augue massa non
          odio. Ut et mi dapibus\nmagna pretium tincidunt. Phasellus et quam
          congue sem varius commodo\nac sed nisl. Quisque bibendum, sapien eu
          tincidunt aliquam, mauris\nante egestas tortor, nec faucibus urna
          turpis non velit. Nunc at leo\ntellus. Donec ut euismod lorem.
          Maecenas rhoncus aliquam vulputate.\nInteger vehicula sapien sed
          maximus pellentesque. Vivamus id lacus\nornare, auctor mi sit amet,
          finibus eros. Nulla dapibus consectetur\nnisl ut convallis. Donec eu
          laoreet lacus. Lorem ipsum dolor sit amet,\nconsectetur adipiscing
          elit. Praesent finibus hendrerit eros, vitae\ndignissim eros molestie
          vel. Vivamus vestibulum, lorem sit amet\nfeugiat tempus, lacus lorem
          aliquam nibh, eget ultrices metus mauris\nvitae urna. Nunc mi mi,
          semper quis turpis sit amet, ultrices\nmalesuada metus. Phasellus
          sodales risus tincidunt, finibus massa at,\nvulputate augue. Phasellus
          auctor nisi elit, sit amet maximus dolor\nlaoreet at. Vestibulum
          consequat augue.
        </p>
      </div>
    </article>
  );
};

export default History;
