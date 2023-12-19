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
    <main className="pt-60 md:pt-72 pb-28 overflow-x-hidden px-[0vw] md:px-[10vw] lg:px-[18vw] flex flex-col items-center">
      <Intro />
      <About />
      <Projects />
    </main>
  );
}
