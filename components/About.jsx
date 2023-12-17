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
          markers: true,
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
      className="flex flex-col relative items-center text-center pb-8 mt-48"
    >
      <h1 className="text-5xl mb-8">About Me</h1>
      <p className="md:px-20 text-3xl">
        Code enthusiast on a mission: Turning lines into magic. With a passion
        for crafting elegant solutions, I thrive on transforming ideas into
        seamless digital experiences. Let's embark on this coding adventure
        together!
      </p>
    </section>
  );
}

export default About;
