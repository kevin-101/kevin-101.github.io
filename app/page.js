"use client";

import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { useEffect } from "react";

export default function Home() {
  // smooth scrolling
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="mt-72 mb-28 mx-[2vw] md:mx-[10vw] lg:mx-[18vw] flex flex-col items-center">
      <Intro />
      <About />
      <Projects />
    </main>
  );
}
