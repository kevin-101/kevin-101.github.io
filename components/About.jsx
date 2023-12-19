import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function About() {
  const about = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(about.current, {
        scrollTrigger: {
          trigger: about.current,
          start: "0px bottom",
          end: "bottom+=50px bottom",
          scrub: true,
          // markers: true,
        },
        x: "-500px",
        opacity: "0",
      });
    },
    { scope: about.current }
  );

  return (
    <section
      ref={about}
      id="about"
      className="flex flex-col relative items-center text-center pb-8 mt-56"
    >
      <h1 className="text-5xl mb-8">About Me</h1>
      <p className="md:px-20 text-3xl">
        I'm a beginner web developer eager to explore the realms of React,
        Next.js, and Tailwind CSS. Currently, I'm honing my skills in turning
        ideas into interactive web applications. I'm fascinated by the endless
        possibilities these technologies offer, and I'm excited to contribute to
        the world of web development
      </p>
    </section>
  );
}

export default About;
