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
          <a href="" className="hover:scale-90">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_679_101)">
                <path
                  d="M7.34557 16.1974C7.34557 15.44 7.96779 14.8178 8.72392 14.8178H11.0487C11.8062 14.8178 12.4547 15.44 12.4547 16.225V24.9927C12.7251 24.9113 13.0493 24.8299 13.4287 24.7485C13.942 24.6133 14.3214 24.1538 14.3214 23.6117V12.7332C14.3214 11.9757 14.9436 11.3259 15.7273 11.3259H18.0521C18.8095 11.3259 19.458 11.9482 19.458 12.7332V22.828C19.458 22.828 20.0264 22.5838 20.5935 22.341C21.0267 22.1519 21.2971 21.7463 21.2971 21.258V9.2164C21.2971 8.45896 21.9194 7.80917 22.6768 7.80917H25.0016C25.7591 7.80917 26.3813 8.43139 26.3813 9.2164V19.1484C28.3819 17.6874 30.4376 15.9283 32.0601 13.8175C32.5472 13.1953 32.6824 12.3827 32.4119 11.6252C29.4373 3.07418 20.0829 -1.47307 11.5384 1.50417C2.9939 4.48142 -1.54811 13.8437 1.4252 22.3961C1.74944 23.3701 2.18264 24.2904 2.69591 25.183C3.10154 25.8866 3.85898 26.2923 4.67024 26.2109C5.10344 26.1833 5.64428 26.1295 6.31902 26.0481C6.91368 25.9943 7.34688 25.4797 7.34688 24.8837L7.34557 16.1974Z"
                  fill="black"
                />
                <path
                  d="M7.29102 30.27C14.6186 35.601 24.867 33.9771 30.1927 26.6443C32.2209 23.8298 33.3288 20.4469 33.3288 16.984C33.3288 16.6046 33.3012 16.2265 33.275 15.8472C27.3008 24.8039 16.2411 28.998 7.29102 30.27Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_679_101">
                  <rect
                    width="32.818"
                    height="32.818"
                    fill="white"
                    transform="translate(0.511719 0.59082)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" className="hover:scale-90">
            <svg
              width="29"
              height="34"
              viewBox="0 0 29 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_679_107)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9319 2.464C8.97906 3.48129 7.38135 4.34212 7.38169 4.37713C7.38256 4.4675 12.0686 6.84071 12.235 6.83493C12.3106 6.83239 12.8595 6.57974 13.4546 6.27355L14.5367 5.71695L15.7186 6.32445L16.9004 6.93206L18.8359 6.06238C21.7522 4.75191 22.0551 4.60831 22.0076 4.56006C21.9446 4.49605 20.8986 3.93411 18.0606 2.44003C16.6891 1.71793 15.3579 1.00993 15.1024 0.866663C14.8468 0.723399 14.6029 0.608153 14.5603 0.610383C14.5177 0.612614 12.8848 1.44675 10.9319 2.464ZM2.36666 6.89939L0.333746 7.94946V12.558C0.333746 15.0928 0.36044 17.1666 0.393184 17.1666C0.425814 17.1666 1.42601 16.733 2.61579 16.2031L4.77904 15.2396V10.3818L5.83615 10.9578C6.65074 11.4012 7.46582 11.8437 8.28139 12.2853L9.66948 13.0368L10.2872 12.7575C10.6745 12.5821 11.0611 12.4049 11.447 12.2261C11.7451 12.0872 12.4769 11.7576 13.0733 11.4934C13.6696 11.2291 14.2216 10.9633 14.2998 10.9028C14.4038 10.8223 13.1359 10.1217 9.61038 8.31123C6.95288 6.94654 4.69329 5.83431 4.58908 5.83964C4.48488 5.84497 3.48479 6.3218 2.36666 6.89939ZM22.374 7.19428C20.9894 7.81932 19.8557 8.3557 19.8544 8.38629C19.8532 8.41684 20.6078 8.86554 21.5314 9.38324C22.455 9.90105 23.2106 10.3524 23.2106 10.3864C23.2106 10.4203 22.3934 10.8163 21.3946 11.2665C20.3957 11.7167 17.8709 12.8569 15.7838 13.8004L8.79062 16.9614C7.03149 17.7566 5.44583 18.4734 5.26695 18.5544C1.67382 20.181 0.686215 20.6323 0.550589 20.7098C0.414206 20.7878 0.383315 21.241 0.359041 23.5154L0.330078 26.228L2.148 27.1543L3.96589 28.0806L6.48668 26.9429C7.87315 26.3173 9.00746 25.7726 9.00746 25.7325C9.00746 25.6925 8.75126 25.5255 8.43826 25.3614C8.12512 25.1972 7.47871 24.8338 7.00165 24.5536C6.52464 24.2734 6.04898 24.0163 5.94455 23.9822C5.84016 23.9482 5.75625 23.8887 5.75796 23.8499C5.75969 23.8112 6.86973 23.284 8.22456 22.6781C10.8561 21.5016 12.8699 20.5948 17.1933 18.6396C19.1265 17.7656 21.0601 16.892 22.9938 16.019C24.6933 15.2519 26.6693 14.356 27.3849 14.0281L28.6859 13.4319L28.7149 10.6884L28.7439 7.94493L26.9001 6.99853C25.886 6.47807 25.0191 6.0535 24.9737 6.05505C24.9283 6.05649 23.7584 6.56908 22.374 7.19428ZM28.1919 17.092C27.9202 17.2247 27.3836 17.4732 26.9993 17.6441C26.6151 17.8151 25.886 18.1441 25.3791 18.3754L24.4575 18.7957L24.4365 21.2043C24.4249 22.529 24.3761 23.607 24.3281 23.6C24.219 23.5837 22.4917 22.6979 20.7555 21.7676C19.5023 21.0962 19.4236 21.0695 19.1291 21.2153C18.9589 21.2996 17.9414 21.756 16.868 22.2296C15.7946 22.7031 14.8814 23.1214 14.8385 23.1593C14.7956 23.1971 16.9559 24.368 19.6393 25.7614L24.5179 28.2948L26.602 27.2167C27.7481 26.6238 28.7227 26.083 28.7676 26.015C28.8686 25.862 28.8599 16.8297 28.7588 16.8419C28.7188 16.8467 28.4637 16.9593 28.1919 17.092ZM16.6512 27.6937C16.2897 27.8491 15.9283 28.0047 15.567 28.1606C14.4759 28.6326 14.6897 28.6483 13.3917 28.0021C12.5272 27.5718 12.1545 27.439 11.9927 27.5034C11.8714 27.5518 10.8272 28.0215 9.67209 28.5474C8.51706 29.0732 7.53195 29.5034 7.48294 29.5034C6.99833 29.5034 7.80399 29.9848 10.9129 31.553L14.5589 33.392L16.0929 32.6346C16.9366 32.2181 18.6384 31.384 19.8747 30.781C21.111 30.178 22.1072 29.6689 22.0885 29.6497C22.0697 29.6306 21.0339 29.0987 19.7865 28.4677L17.5186 27.3206L16.6512 27.6937Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_679_107">
                  <rect
                    width="28.5385"
                    height="32.818"
                    fill="white"
                    transform="translate(0.330078 0.59082)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        <div className="text-black  font-normal text-center">
          Copyright © {new Date().getFullYear()} HEARD. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
