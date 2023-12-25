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
          { x: "500px", opacity: 0, duration: 2, ease: "power4.out" },
          ".2"
        );
    },
    { scope: intro.current }
  );

  return (
    <section
      ref={intro}
      id="intro"
      className="flex flex-col min-h-screen justify-center items-center text-center font-extrabold"
    >
      <div className="flex flex-col relative md:flex-row items-center justify-center">
        <div ref={textBox} className="flex flex-col">
          <div data-scroll data-scroll-speed=".5">
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
        <div ref={imgBox} className={`-z-10 absolute`}>
          <div data-scroll data-scroll-speed=".3">
            <Image src="/html.svg" alt="intro-img" width="300" height="300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
