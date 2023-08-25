import React from "react";

const Call2Act = () => {
  return (
    <section
      id="cta"
      className="py-24 bg-boost_mbl md:bg-boost_dsk bg-no-repeat bg-cover"
    >
      <div className="flex flex-col p-2 space-y-6">
        <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
          Boost your links today
        </h5>
        <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight md:text-base md:py-3 focus:outline-none">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Call2Act;
