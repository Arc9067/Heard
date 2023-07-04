import React from "react";
import mics from "../assets/mics.png";

const Mics = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col justify-center items-center">
        <div className="w-full justify-center items-center gap-[39px] inline-flex">
          <div className="w-48 h-[0px] border border-black"></div>
          <h1 className="text-black font-galorine capitalize text-4xl md:text-6xl font-bold leading-10">
            tokenomics
          </h1>
          <div className="w-48 h-[0px] border border-black"></div>
        </div>{" "}
        <div className="grid lg:grid-cols-2 justify-center items-center grid-cols-1 gap-14 mt-16">
          <img src={mics} alt="" className="lg:w-9/12" />
          <article className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl">
              LIQUIDITY POOL SUPPLY <span className="font-bold"> 85%</span>
            </h2>
            <h2 className="text-2xl md:text-4xl">
              MARKETING <span className="font-bold"> 10%</span>
            </h2>
            <h2 className="text-2xl md:text-4xl">
              CEX <span className="font-bold"> 5%</span>
            </h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Mics;
