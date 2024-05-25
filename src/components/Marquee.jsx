import React from "react";

const Marquee = () => {
  return (
    <div>
      <marquee
        dir="left"
        scrollamount="12"
        className="text-left bg-[#0C0917] pt-[20px] pb-[13px] md:pb-[16px] text-white font-[500]"
      >
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
      </marquee>
    </div>
  );
};

export default Marquee;
