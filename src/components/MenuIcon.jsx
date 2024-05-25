import React, { forwardRef } from "react";

const MenuIcon = forwardRef(({ onClick }, ref) => {
  return (
    <div>
      <div
        className="relative group w-[22px] h-[30px] cursor-pointer"
        onClick={onClick}
        ref={ref}
      >
        <div className="absolute transition group-hover:bg-[#ff628c] left-0 top-[25%] bg-black w-[100%] h-[2px]"></div>
        <div className="absolute left-0 transition group-hover:bg-[#ff628c] top-[50%] bg-black w-[100%] h-[2px]"></div>
        <div className="absolute left-0 transition group-hover:bg-[#ff628c] top-[75%] bg-black w-[100%] h-[2px]"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});

export default MenuIcon;
