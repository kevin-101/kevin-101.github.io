import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function About() {
  const about = useRef(null);

  useGSAP(
    () => {
      const animDuration = 2;
      gsap.registerPlugin(ScrollTrigger);

      // gsap.from("#about h1", {
      //   scrollTrigger: "#about h1",
      //   opacity: 0,
      //   x: "100px",
      //   duration: animDuration,
      //   ease: "power4.out",
      // });

      // gsap.from("#about p", {
      //   scrollTrigger: "#about p",
      //   x: "-100px",
      //   duration: animDuration,
      //   opacity: "0",
      //   ease: "power4.out",
      // });

      gsap.from("#about *", {
        scrollTrigger: "#about",
        opacity: 0,
        x: "300px",
        duration: animDuration,
        ease: "power4.out",
        stagger: 0.2,
      });
    },
    { scope: about.current }
  );

  return (
    <section
      ref={about}
      id="about"
      className="flex flex-col min-h-screen justify-center relative items-center text-center"
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
