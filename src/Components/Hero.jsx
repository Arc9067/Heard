import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Banner1 from "../assets/banner1.png";
import BannerM1 from "../assets/bannerM1.png";
import Banner2 from "../assets/banner2.png";
import { GrFormClose } from "react-icons/gr";

const Hero = () => {
  const [div1, setDiv1] = useState(true);
  const [div2, setDiv2] = useState(true);
  const [div3, setDiv3] = useState(true);
  return (
    <section className="w-full min-h-screen border-b border-white">
      <div className="container grid gap-10 lg:grid-cols-3 justify-between items-center">
        <article className="border-b lg:border-none border-white py-8 flex flex-col gap-6">
          <h1 className="text-4xl font-galorine leading-10">TODAY’S NEWS</h1>
          <h3 className=" text-xl font-galorine">
            HEARD IS THE LATEST ETHETH BASED TOKEN RELEASED ON THE ERC 20ERC 20
            NETWORK
          </h3>
          <p className=" font-normal leading-loose">
            I initiated the $HEARD project with the understanding that being
            heard is a fundamental human need. Throughout history, individuals
            have made transformative changes by simply having their voices
            acknowledged and others listening. Anyone and everyone can make a
            difference. $HEARD is a 0/0 tax token and without pre-sale,
            airdrops, team tokens, or tax farming. This project aims to empower
            the community to be $HEARD and collectively push as one voice.
          </p>
          <img alt="" className="w-[15rem] mx-auto" src={Logo} />
        </article>
        <article className="h-full px-5 border-white lg:border-x py-8 flex flex-col gap-6  items-center">
          <div className="flex flex-col gap-7">
            <img src={Banner1} alt="" />
            <p className=" font-normal">
              Rosa Parks is known for her refusal to give up her seat to a white
              passenger on December 1, 1955, which sparked the Montgomery Bus
              Boycott and became a symbol of the Civil Rights Movement. $HEARD
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <img src={Banner2} alt="" />
            <p className=" font-normal">
              Newly divorced and struggling to make ends meet, single mom Joanne
              Rowling turned to work on the novel she had been outlining for
              five years. She never thought she would find herself among other
              people who changed the world and influenced generations of people.
              $HEARD
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-6 h-full py-8">
          <div
            className={`w-full h-[232px] bg-[#6A4F4F] relative ${
              div1 ? "flex" : "hidden"
            }`}
          >
            <button
              className={`text-white absolute top-3 cursor-pointer right-3 `}
              onClick={() => {
                setDiv1(false);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75781 17.243L12.0008 12L17.2438 17.243M17.2438 6.757L11.9998 12L6.75781 6.757"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full h-[385px] bg-[#6A4F4F] relative ${
              div2 ? "flex" : "hidden"
            }`}
          >
            <button
              className={`text-white absolute top-3 cursor-pointer right-3 `}
              onClick={() => {
                setDiv2(false);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75781 17.243L12.0008 12L17.2438 17.243M17.2438 6.757L11.9998 12L6.75781 6.757"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full h-[232px] bg-[#6A4F4F] relative ${
              div3 ? "flex" : "hidden"
            }`}
          >
            <button
              className={`text-white absolute top-3 cursor-pointer right-3 `}
              onClick={() => {
                setDiv3(false);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75781 17.243L12.0008 12L17.2438 17.243M17.2438 6.757L11.9998 12L6.75781 6.757"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
