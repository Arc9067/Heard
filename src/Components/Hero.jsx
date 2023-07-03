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
    <section className="w-full min-h-screen border-b border-black">
      <div className="container grid gap-10 lg:grid-cols-3 justify-between items-center">
        <article className="border-b lg:border-none border-black py-8 flex flex-col gap-6">
          <h1 className="text-4xl font-galorine leading-10 font-bold">
            TODAY’S NEWS
          </h1>
          <h3 className=" text-xl font-galorine font-medium">
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
        <article className="h-full px-5 border-black lg:border-x py-8 flex flex-col gap-6  items-center">
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
          <img src={Logo} alt="" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
