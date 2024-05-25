import React from "react";

const Marquee = () => {
  return (
    <div className="bg-[#0C0917] flex justify-center w-full">
      <marquee
        dir="left"
        scrollamount="12"
        className="max-w-[1800px] mx-auto w-full text-left  pt-[20px] pb-[13px] md:pb-[16px] text-white font-[500]"
      >
        <div className="">
          <span className="text-[1rem] md:text-[1.25rem] px-[50px]">
            {" "}
            EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT{" "}
          </span>
          |
          <span className="text-[1rem] md:text-[1.25rem] px-[50px]">
            {" "}
            EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT{" "}
          </span>
          |
          <span className="text-[1rem] md:text-[1.25rem] px-[50px]">
            {" "}
            EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT{" "}
          </span>
          |
          <span className="text-[1rem] md:text-[1.25rem] px-[50px]">
            {" "}
            EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT{" "}
          </span>
          |
          <span className="text-[1rem] md:text-[1.25rem] px-[50px]">
            {" "}
            EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT{" "}
          </span>
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
