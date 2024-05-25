import React, { forwardRef } from "react";

const CrossIcon = forwardRef(({ onClick }, ref) => {
  return (
    <div>
      <div
        className="absolute right-[35px] top-[35px] group w-[22px] h-[30px] cursor-pointer"
        onClick={onClick}
        ref={ref}
      >
        <div className="absolute left-0 rotate-[45deg] transition group-hover:bg-[#ff628c] top-[50%] transition-y-[-50%] bg-black w-[100%] h-[2px]"></div>
        <div className="absolute left-0 rotate-[-45deg] transition group-hover:bg-[#ff628c] top-[50%] transition-y-[-50%] bg-black w-[100%] h-[2px]"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});

export default CrossIcon;
