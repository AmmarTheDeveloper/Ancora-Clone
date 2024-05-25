import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CursorAnimation = () => {
  let cursor = useRef(null);
  useGSAP(() => {
    function handleMouseMove(e) {
      gsap.to(cursor.current, {
        top: 0,
        left: 0,
        x: e.x,
        y: e.y,
        duration: 1,
        overwrite: "auto",
        ease: "power3.out",
        background: "white",
        mixBlendMode: "difference",
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <div
        ref={cursor}
        className="cursor hidden lg:block z-[9] fixed top-[50px] left-[50%] cursor h-[15px] w-[15px] rounded-full bg-[#07050f]"
      ></div>
    </>
  );
};

export default CursorAnimation;
