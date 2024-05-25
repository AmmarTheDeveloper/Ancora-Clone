import React, { useRef, useState } from "react";
import logo from "../../public/images/ancoraLogo.png";
import CrossIcon from "./CrossIcon";
import MenuIcon from "./MenuIcon";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const crossIconRef = useRef(null);

  // useGSAP(() => {
  //   let tl = gsap.timeline();
  //   tl.pause();

  //   menuRef.current.addEventListener("click", () => {
  //     setIsVisible(true);
  //     tl.play(true);
  //   });

  //   crossIconRef.current.addEventListener("click", () => {
  //     tl.reversed();
  //     setIsVisible(false);
  //   });

  //   tl.from(
  //     navRef.current.querySelectorAll(".animate-link"),
  //     {
  //       duration: 2.5,
  //       stagger: 0.3,
  //       delay: 0.2,
  //       opacity: 0,
  //       ease: "Expo.easeInOut",
  //     },
  //     "-=0.5"
  //   );
  // }, [isVisible]);

  return (
    <>
      <div className="block lg:hidden">
        <MenuIcon ref={menuRef} onClick={() => setIsVisible(true)} />
        <nav
          ref={navRef}
          className={` fixed z-[99] top-0 left-0 w-full h-screen bg-white  ${
            isVisible ? "" : "hidden"
          }`}
        >
          <CrossIcon ref={crossIconRef} onClick={() => setIsVisible(false)} />

          <div className="logo mt-[60px] flex justify-center">
            <a href="#" className="animate-link">
              <img width={128} src={logo} alt="image not found" />
            </a>
          </div>
          <div className="transition mt-[45px] flex flex-col items-center">
            <a
              href="#"
              className="animate-link text-[22px] p-[10px] transition hover:text-[#ff628c] text-[#152035]"
            >
              Dynamic Background
            </a>
            <a
              href="#"
              className="animate-link  text-[22px] p-[10px] transition hover:text-[#ff628c] text-[#152035]"
            >
              Image Effects
            </a>
            <a
              href="#"
              className="animate-link  text-[22px] p-[10px] transition hover:text-[#ff628c] text-[#152035]"
            >
              Background Text
            </a>
            <a
              href="#"
              className="animate-link  text-[22px] p-[10px] transition hover:text-[#ff628c] text-[#152035]"
            >
              Image Mask
            </a>
            <a
              href="#"
              className="animate-link text-[22px] p-[10px] transition hover:text-[#ff628c] text-[#152035]"
            >
              Mouse Helper
            </a>
            <a
              href=""
              className="animate-link  text-[22px] p-[10px] transition hover:text-[#ff628c] text-[#152035]"
            >
              Background Slides
            </a>
            <a
              href=""
              className="animate-link  text-[22px] p-[10px] transition hover:text-[#ff628c] text-[#152035]"
            >
              Buy Now
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
