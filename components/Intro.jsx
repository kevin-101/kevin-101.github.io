import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Intro() {
  const intro = useRef();
  const textBox = useRef();
  const imgBox = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const timeLine = gsap.timeline();

      timeLine
        .from(textBox.current, {
          opacity: 0,
          x: "-500px",
          duration: 2,
          ease: "power4.out",
        })
        .from(
          imgBox.current,
          { x: "500px", opacity: 0, duration: 1, ease: "power4.out" },
          ".2"
        );

      gsap.from(
        imgBox.current,
        {
          scrollTrigger: {
            trigger: imgBox.current,
            start: "-=200px top",
            end: "bottom-=300px top",
            scrub: true,
            // markers: true,
          },
          x: "0px",
          y: "0px",
          opacity: 1,
          ease: "power4.in",
        },
        6
      );
    },
    { scope: intro.current }
  );

  return (
    <section
      ref={intro}
      id="intro"
      className="flex flex-col items-center text-center pb-20 font-extrabold"
    >
      <div className="flex flex-col relative md:flex-row items-center justify-center">
        <div ref={textBox} className="flex flex-col">
          <div data-scroll data-scroll-speed=".3">
            <h1 className="text-5xl mb-8">Hello, I'm Kevin</h1>
            <p className="text-3xl md:px-20">
              A budding web developer navigating the vast world of Web
              Development.
            </p>
          </div>
        </div>
        {/* <pre className="text-green-500 animate-float will-change-transform whitespace-pre">
          {textArt}
        </pre> */}
        <div
          ref={imgBox}
          className={`-z-10 absolute left-[50%] -ml-[150px] top-[50%] -mt-[150px]`}
        >
          <div data-scroll data-scroll-speed=".1">
            <Image
              src="/react.svg"
              width="300"
              height="300"
              className="animate-float will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
