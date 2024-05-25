import React, { useRef, useState, useEffect } from "react";
import logo from "../../public/images/ancoraLogo.png";
import { FaEllipsisV } from "react-icons/fa";
import MobileNav from "./MobileNav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  let [isVisible, setIsVisible] = useState(false);
  let [isBgVisible, setIsBgVisible] = useState(false);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 20) {
      setIsBgVisible(true);
    } else {
      setIsBgVisible(false);
    }
  });

  return (
    <>
      <div
        className={`z-[8] transition bg-cover fixed top-0 left-0 w-full ${
          isBgVisible ? "bg-white shadow" : ""
        }`}
      >
        <header className="relative pt-[33px] px-[30px] pb-[30px] flex justify-between items-center max-w-[1800px] mx-auto ">
          <a href="#">
            <img width={128} src={logo} alt="image not found" />
          </a>
          <nav className="large-device-nav flex hidden lg:block">
            <a
              href="#"
              className="font-[400] text-[14px] lg:text-[16px] mx-[15px] pb-[5px] transition link"
            >
              Dynamic Background
            </a>
            <a
              href="#"
              className="font-[400]  text-[14px] lg:text-[16px] mx-[15px] pb-[5px] transition link"
            >
              Image Effects
            </a>
            <a
              href="#"
              className="font-[400]  text-[14px] lg:text-[16px] mx-[15px] pb-[5px] transition link"
            >
              Background Text
            </a>
            <a
              href="#"
              className="font-[400]  text-[14px] lg:text-[16px] mx-[15px] pb-[5px] transition link"
            >
              Image Mask
            </a>
            <a
              href="#"
              className=" font-[400]  text-[14px] lg:text-[16px] mx-[15px] pb-[5px] transition link"
            >
              Mouse Helper
            </a>
            <button
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
              className="bg-tranpsarent border-none font-[400] mx-[15px] pb-[5px] transition hover:text-red-500 relative px-2"
            >
              <FaEllipsisV />
              <div
                style={{ right: 0 }}
                className={
                  "dropdown w-[200px] absolute top-[100%] transition  " +
                  `${!isVisible && "opacity-0"}`
                }
              >
                <a
                  href=""
                  className="inline-block bg-[#152035] text-white p-[25px] "
                >
                  Background Slides
                </a>
              </div>
            </button>
          </nav>
          <div className="hidden lg:block">
            <button className="relative buy-now-btn text-[14px] lg:text-[16px] border border-black text-[#152035] bg-transparent hover:bg-[#152035] hover:text-white transition py-[8px] px-[48px] rounded-[25px]">
              Buy Now
            </button>
          </div>
          <MobileNav />
        </header>
      </div>
    </>
  );
};

export default Navbar;
