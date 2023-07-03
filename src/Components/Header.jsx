import React from "react";
import HeaderLogo from "../assets/header-logo.png";
import HeaderImg from "../assets/headerimg.png";

const Header = () => {
  function getCurrentDateFormatted() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("en-US", { month: "long" });
    const year = currentDate.getFullYear();

    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    }

    const formattedDate = `${day}${daySuffix} of ${month}, ${year}`;
    return formattedDate;
  }
  return (
    <header className="pt-3 w-full">
      <a href="">
        <img src={HeaderImg} alt="" className="w-full" />
      </a>
      {/* <nav className="container ">
        <div className="w-ful border-y py-3 gap-5 border-black flex justify-center flex-col lg:flex-row items-center lg:items-start">
          <img src={HeaderLogo} alt="" className="lg:order-2" />
          <div className="flex flex-col b-red-500 w-full justify-center lg:gap-4 items-center gap-3">
            <a href="" className=" text-5xl md:text-6xl font-galorine">
              HEARD
            </a>
            <div className="w-full h-[47px] pt-[7px] pb-[13px] bg-zinc-600 justify-center items-center inline-flex">
              <div className="text-black font-medium">
                WE ALL WANT TO BE $HEARD
              </div>
            </div>
            <div className="flex items-center gap-8 md:gap-14 w-full justify-between">
              <p className="text-xl font-serif">{getCurrentDateFormatted()}</p>
              <p className=" text-xl font-medium">$2,500</p>
            </div>
          </div>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
