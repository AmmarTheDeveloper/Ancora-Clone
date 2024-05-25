import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(".up", {
      y: -60,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    }).to(".up", {
      y: 60,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    tl.to(
      ".down",
      {
        y: 60,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      },
      0
    ).to(".down", {
      y: -60,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    const button = document.querySelectorAll(".animate-heading  span h6");

    button.forEach((btn) => {
      let boundingRect = btn.getBoundingClientRect();
      window.addEventListener("resize", () => {
        boundingRect = btn.getBoundingClientRect();
      });

      btn.addEventListener("mousemove", (e) => {
        const mousePosX = e.x - boundingRect.left;
        const mousePosY = e.y - boundingRect.top;

        gsap.to(btn, {
          x: (mousePosX - boundingRect.width / 2) * 0.4,
          y: (mousePosY - boundingRect.height / 2) * 0.4,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      btn.addEventListener("mouseenter", () => {
        gsap.to(document.querySelector(".cursor"), {
          scale: 2,
          mixBlendMode: "difference",
          background: "white",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1,0.3)",
        });

        gsap.to(document.querySelector(".cursor"), {
          scale: 1,
          background: "black",
          mixBlendMode: "normal",
        });
      });
    });
  });

  return (
    <>
      <section className="pt-[100px] md:pt-[150px] lg:pt-[238px]">
        <div className="flex flex-col ">
          <h1 className="text-[3rem] md:text-[4.5rem] md:leading-[1em] lg:leading-[.633em] md:px-[30px] lg:text-[5rem] text-center px-[20px] font-[400] text-[#152035]">
            Visual Effects & Animation Kit
          </h1>

          {/* large screen text */}
          <h2 className="animate-heading hidden lg:flex lg:mt-8 justify-center w-[100%] lg:pt-[30px] lg:px-[60px] lg:pb-[222px] md:pt-[35px] md:px-[30px] md:pb-[84px] pt-[29px] px-[20px] pb-[65px] text-[21vw]  leading-[.8em]  text-center">
            <span className="sofia md:mx-2 up relative">
              P
              <h6
                className="z-[2] absolute left-[-50%] transform translate-x-[15%]  top-[20px] rotate-[25deg] rounded-[90px]  py-[1.2em] px-[2.5em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #A364F2 0%, #F8CBE8 100%)",
                }}
              >
                Text
              </h6>
            </span>
            <span className="sofia md:mx-2 down relative">
              L
              <h6
                className="z-[2] absolute left-[30%] transform translate-x-[-50%] bottom-[-10px] rotate-[-20deg] rounded-[90px]  py-[1.2em] px-[2.5em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #F0C0E5 0%, #B1F8F5 100%)",
                }}
              >
                Mouse
              </h6>
            </span>
            <span className="sofia md:mx-2 up">U</span>
            <span className="sofia md:mx-2 down relative">
              G
              <h6
                className="z-[2] absolute left-[-50%] transform translate-x-[15%]  top-[20px] rotate-[20deg] rounded-[90px]  py-[1.2em] px-[2.5em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FDD4B2 0%, #FF628C 100%)",
                }}
              >
                Dynamic
              </h6>
            </span>
            <span className="sofia md:mx-8 up relative">
              I
              <h6
                className="z-[2] absolute left-[50%] transform translate-x-[-50%] bottom-[-10px] rotate-[-20deg] rounded-[90px]  py-[1.2em] px-[2.5em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FDD2B1 0%, #A465F2 100%)",
                }}
              >
                Image
              </h6>
            </span>
            <span className="sofia md:mx-2 down relative">
              N
              <h6
                className="z-[2] absolute right-[-10px] top-[-10px] rotate-[20deg] rounded-[90px]  py-[1.2em] px-[2em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #F0C0E5 0%, #B1F8F5 100%)",
                }}
              >
                Background
              </h6>
            </span>
          </h2>

          {/* medium and small screen text */}
          <h2 className="flex lg:hidden lg:mt-8 justify-center md:justify-start lg:justify-center w-[100%] lg:pt-[30px] lg:px-[60px] lg:pb-[222px] md:pt-[35px] md:px-[40px] md:pb-[84px] pt-[29px] px-[20px] pb-[65px] text-[21vw]  leading-[.8em]  text-center">
            <span className="sofia md:mx-2 relative ">
              P
              <h6
                className="hidden md:block  z-[2] absolute left-[-20%] transform translate-x-[15%]  bottom-[20px] rotate-[25deg] rounded-[90px]  py-[1.2em] px-[2.5em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #A364F2 0%, #F8CBE8 100%)",
                }}
              >
                Text
              </h6>
            </span>
            <span className="sofia md:mx-2 relative">L</span>
            <span className="sofia md:mx-2 ">U</span>
            <span className="sofia md:mx-2 relative">
              G
              <h6
                className="hidden md:block  z-[2] absolute left-[30%] transform translate-x-[-50%] top-[20px] rotate-[-20deg] rounded-[90px]  py-[1.2em] px-[2.5em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FDD2B1 0%, #A465F2 100%)",
                }}
              >
                Image
              </h6>
            </span>
            <span className="sofia md:mx-2 relative">I</span>
            <span className="sofia md:mx-2  relative">
              N
              <h6
                className="hidden md:block z-[2] absolute left-[-12%] transform translate-x-[15%]  bottom-[20px] rotate-[20deg] rounded-[90px]  py-[1.2em] px-[2.5em] leading-[0.5rem] text-[#07050f] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.3rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FDD4B2 0%, #FF628C 100%)",
                }}
              >
                Dynamic
              </h6>
            </span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
