import React from "react";
import Banner from "../assets/Tailwind_CSS_Logo.svg.png";

const Analytics = () => {
  return (
    <div className="w-full py-16 bg-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Banner} alt="Tailwind" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Utility-First Fundamentals</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
            Building complex components from a constrained set of primitive
            utilities.
          </h1>
          <p>
            The utility-first concept refers to the main differentiating feature
            of Tailwind.Instead of creating classes around components (button,
            panel, menu, textbox ...), classes are built around a specific style
            element (yellow color, bold font, very large text, center
            element...).Each of these classes is called utility classes.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
