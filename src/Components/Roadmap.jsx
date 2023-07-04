import React from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Roadmap = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col justify-center items-center">
        <div className="w-full justify-center items-center gap-[39px] inline-flex">
          <div className="w-48 h-[0px] border border-black"></div>
          <h1 className="text-black font-galorine capitalize text-5xl md:text-6xl font-bold leading-10">
            roadmap
          </h1>
          <div className="w-48 h-[0px] border border-black"></div>
        </div>{" "}
        <div className="flex flex-col gap-28 lg:grid lg:grid-cols-2 lg:justify-between mt-24 justify-center items-center">
          <article className="flex flex-col gap-11 justify-between relative ">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 md:-left-28 -top-20 md:-top-10"
            >
              <path
                d="M27.6519 5.61816C16.311 6.41507 0.00896 8.22574 0 30.4365V58.3815H25.3069V28.4823H16.9038C16.3715 20.4987 22.9456 18.4372 30.0946 16.8548L27.6519 5.61816ZM61.5572 5.61816C50.2163 6.41507 33.9142 8.22579 33.9053 30.4365V58.3815H59.2123V28.4823H50.8092C50.2767 20.4987 56.851 18.4372 64 16.8548L61.5572 5.61816Z"
                fill="black"
              />
            </svg>
            <h1 className="text-black text-3xl font-bold font-galorine leading-10 tracking-wider">
              PHASE 1
            </h1>
            <article className="flex flex-col gap-6">
              <div className=" text-black text-xl font-normal leading-10 tracking-wide">
                • LAUNCH HEARD!
              </div>
              <div className=" text-black text-xl font-normal leading-10 tracking-wide">
                • SPREAD THE WORD AND LET’S BE HEARD.
              </div>
              <div className=" text-black text-xl font-normal leading-10 tracking-wide">
                • IT’S NOT A MEME BUT A MOVEMENT.
              </div>
            </article>
          </article>
          <article className="flex flex-col gap-11 justify-between relative ">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 md:-left-28 -top-20 md:-top-10"
            >
              <path
                d="M27.6519 5.61816C16.311 6.41507 0.00896 8.22574 0 30.4365V58.3815H25.3069V28.4823H16.9038C16.3715 20.4987 22.9456 18.4372 30.0946 16.8548L27.6519 5.61816ZM61.5572 5.61816C50.2163 6.41507 33.9142 8.22579 33.9053 30.4365V58.3815H59.2123V28.4823H50.8092C50.2767 20.4987 56.851 18.4372 64 16.8548L61.5572 5.61816Z"
                fill="black"
              />
            </svg>
            <h1 className="text-black text-3xl font-bold font-galorine leading-10 tracking-wider">
              PHASE 2
            </h1>
            <article className="flex flex-col gap-6">
              <div className=" text-black text-xl font-normal leading-10 tracking-wide">
                • PUSH ON TWITTER/REACH OUT TO INFLUENCERS.
              </div>
              <div className=" text-black text-xl font-normal leading-10 tracking-wide">
                • HEARD COMMUNITY IS THE MARKETING, WE MAKE ENOUGH NOISE WE
                WON’T BE IGNORED.
              </div>
              <div className=" text-black text-xl font-normal leading-10 tracking-wide">
                • CEX LISTINGS!
              </div>
            </article>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
