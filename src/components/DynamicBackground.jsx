import React, { useEffect } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../public/images/img1.png";
import img2 from "../../public/images/img2.png";
import waves from "../../public/images/waves.jpg";
import waves2 from "../../public/images/waves2.jpg";
import ripple from "../../public/images/ripple.jpg";
import ripple2 from "../../public/images/ripple2.jpg";
import swap from "../../public/images/swap.jpg";
import tint from "../../public/images/tint.jpg";

const DynamicBackground = () => {
  return (
    <>
      <section className="pt-[100px] pb-[97px] px-[30px] md:py-[170px]">
        <div className="flex flex-col items-center arrow">
          <div className="h-[70px] w-[70px] rounded-full text-white bg-black flex justify-center items-center">
            <FaArrowDownLong />
          </div>
          <p className="mt-[35px] text-white text-[1rem] md:text-[1.063rem] ">
            Dynamic Background
          </p>
        </div>
      </section>

      <section className="bg-black lg:pt-[170px] lg:pb-[160px] lg:px-[30px] md:py-[100px] md:px-[30px] py-[60px] px-[20px]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-12">
            {/* image hover and text */}
            <div className="relative md:col-span-6 col-span-12">
              <div>
                <img
                  src={img2}
                  className="w-[80%] max-w-[439px] rounded-[10px]"
                  alt=""
                />
              </div>
              <div className="text-right">
                <div className="mt-[-50%] flex justify-end">
                  <img
                    src={img1}
                    className="w-[85%] max-w-[450px] shadow-lg shadow-[rgba(0,0,0,0.5)] rounded-[10px] relative z-[2]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="mt-[25px] md:mt-0 md:ml-[15px] lg:pl-[115px]
          flex flex-col justify-center items-center md:col-span-6 col-span-12
          "
            >
              <h1 className="lg:text-[3.563rem] lg:leading-[1em] md:text-[2.7rem] md:leading-[1.1em] text-[2.2rem] font-[400] text-white lg:mb-[33px] md:mb-[22px] mb-[18px] text-center">
                Image hovers with OpenGL effects
              </h1>
              <p className="text-center text-[#c0bfc0] lg:text-[1.125rem] lg:leading-[1.611em] text-[1rem] leading-[1.4em]">
                Amazing image hover effects for creatives. Make your website
                stand out from the crowd!
              </p>
            </div>
          </div>
          <div className="card-container">
            {/* images */}
            <div className="grid grid-cols-12 mt-[50px] md:mt-[80px] lg:mt-[120px]">
              <div className="col-span-12 md:col-span-6">
                <div className="card bg-[#181623] lg:px-[40px] lg:pt-[40px] lg:pb-[36px] md:px-[30px] md:pt-[30px] md:pb-[26px] p-[25px] md:mr-[15px]">
                  <img src={waves} width={"100%"} alt="" />
                  <h4 className="mt-[17px] md:mt-[24px] lg:mt-[36px] text-[1.5rem] lg:text-[1.75rem] leading-[1em] text-white text-center">
                    Waves
                  </h4>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 ">
                <div className="mt-[20px] md:mt-0 card bg-[#181623] lg:px-[40px] lg:pt-[40px] lg:pb-[36px] md:px-[30px] md:pt-[30px] md:pb-[26px] p-[25px] md:ml-[15px] ">
                  <img src={waves2} width={"100%"} alt="" />
                  <h4 className="mt-[17px] md:mt-[24px] lg:mt-[36px] text-[1.5rem] lg:text-[1.75rem] leading-[1em] text-white text-center">
                    Waves
                  </h4>
                </div>
              </div>
            </div>
            {/* images */}
            <div className="grid grid-cols-12 mt-[20px] md:mt-[30px] ">
              <div className="col-span-12 md:col-span-6">
                <div className="card bg-[#181623] lg:px-[40px] lg:pt-[40px] lg:pb-[36px] md:px-[30px] md:pt-[30px] md:pb-[26px] p-[25px] md:mr-[15px]">
                  <img src={ripple} width={"100%"} alt="" />
                  <h4 className="mt-[17px] md:mt-[24px] lg:mt-[36px] text-[1.5rem] lg:text-[1.75rem] leading-[1em] text-white text-center">
                    Ripple
                  </h4>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 ">
                <div className="mt-[20px] md:mt-0 card bg-[#181623] lg:px-[40px] lg:pt-[40px] lg:pb-[36px] md:px-[30px] md:pt-[30px] md:pb-[26px] p-[25px] md:ml-[15px] ">
                  <img src={ripple2} width={"100%"} alt="" />
                  <h4 className="mt-[17px] md:mt-[24px] lg:mt-[36px] text-[1.5rem] lg:text-[1.75rem] leading-[1em] text-white text-center">
                    Ripple2
                  </h4>
                </div>
              </div>
            </div>
            {/* images */}
            <div className="grid grid-cols-12 mt-[20px] md:mt-[30px] ">
              <div className="col-span-12 md:col-span-6">
                <div className="card bg-[#181623] lg:px-[40px] lg:pt-[40px] lg:pb-[36px] md:px-[30px] md:pt-[30px] md:pb-[26px] p-[25px] md:mr-[15px]">
                  <img src={swap} width={"100%"} alt="" />
                  <h4 className="mt-[17px] md:mt-[24px] lg:mt-[36px] text-[1.5rem] lg:text-[1.75rem] leading-[1em] text-white text-center">
                    Swap
                  </h4>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 ">
                <div className="mt-[20px] md:mt-0 card bg-[#181623] lg:px-[40px] lg:pt-[40px] lg:pb-[36px] md:px-[30px] md:pt-[30px] md:pb-[26px] p-[25px] md:ml-[15px] ">
                  <img src={tint} width={"100%"} alt="" />
                  <h4 className="mt-[17px] md:mt-[24px] lg:mt-[36px] text-[1.5rem] lg:text-[1.75rem] leading-[1em] text-white text-center">
                    Tint
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicBackground;
