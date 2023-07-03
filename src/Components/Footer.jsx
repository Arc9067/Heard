import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 py-5">
      <div className="container gap-10 flex flex-col lg:flex-row justify-between items-center">
        <a href="" className=" text-4xl md:text-5xl font-galorine">
          HEARD
        </a>

        <div className="flex justify-center items-center gap-7">
          <a href="" className="hover:scale-90">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_668_366)">
                <path
                  d="M17.4012 0.59082C8.33931 0.59082 0.992188 7.93795 0.992188 16.9998C0.992188 26.0617 8.33931 33.4088 17.4012 33.4088C26.463 33.4088 33.8102 26.0617 33.8102 16.9998C33.8102 7.93795 26.463 0.59082 17.4012 0.59082ZM25.4607 11.8323L22.7669 24.522C22.5686 25.4217 22.0326 25.6405 21.2846 25.2166L17.1824 22.1946L15.2051 24.1008C15.1082 24.2262 14.9839 24.3278 14.8417 24.3977C14.6995 24.4676 14.5431 24.5041 14.3847 24.5042H14.3778L14.6691 20.3281L22.2719 13.4609C22.6001 13.1697 22.1981 13.0042 21.7619 13.2955L12.3691 19.2109L8.32154 17.9474C7.44639 17.6698 7.42178 17.0723 8.50614 16.6429L24.3217 10.547C25.0573 10.279 25.6973 10.722 25.4594 11.8337L25.4607 11.8323Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_668_366">
                  <rect
                    width="32.818"
                    height="32.818"
                    fill="white"
                    transform="translate(0.992188 0.59082)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" className="hover:scale-90">
            <svg
              width="42"
              height="34"
              viewBox="0 0 42 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.1895 4.47729C39.7056 5.13682 38.1072 5.58098 36.4315 5.78288C38.1443 4.75658 39.4532 3.13469 40.0757 1.19987C38.474 2.14877 36.7007 2.83858 34.813 3.20872C33.3055 1.59693 31.1486 0.59082 28.7696 0.59082C23.4194 0.59082 19.4892 5.58099 20.6972 10.7629C13.8159 10.4164 7.70862 7.11875 3.62361 2.1084C1.45325 5.82999 2.49973 10.7024 6.18768 13.1689C4.83162 13.1251 3.55632 12.7516 2.43916 12.1325C2.34831 15.9685 5.10081 19.5588 9.08487 20.3597C7.92061 20.676 6.64194 20.75 5.34308 20.501C6.3963 23.7919 9.46174 26.1843 13.0824 26.2516C9.59297 28.9839 5.20849 30.2054 0.810547 29.6872C4.4783 32.0393 8.82913 33.4088 13.5064 33.4088C28.8907 33.4088 37.5789 20.4169 37.054 8.76419C38.6759 7.59993 40.0791 6.13956 41.1895 4.47729V4.47729Z"
                fill="black"
              />
            </svg>
          </a>{" "}
          <a href="" className="hover:scale-90">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5373 6.06055H5.65866C4.1545 6.06055 2.9375 7.29122 2.9375 8.79538L2.92383 25.2044C2.92383 26.7085 4.1545 27.9392 5.65866 27.9392H27.5373C29.0415 27.9392 30.2722 26.7085 30.2722 25.2044V8.79538C30.2722 7.29122 29.0415 6.06055 27.5373 6.06055ZM27.5373 11.5302L16.598 18.3673L5.65866 11.5302V8.79538L16.598 15.6325L27.5373 8.79538V11.5302Z"
                fill="black"
              />
            </svg>
          </a>
        </div>

        <div className="text-black  font-normal text-center">
          Copyright © {new Date().getFullYear()} HEARDS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
