"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import MobileNav from "./MobileNav";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navBar = useRef();
  const mobileNav = useRef();
  const navButton = useRef();
  const navMenuIcon = useRef();
  const navCloseIcon = useRef();

  const { contextSafe } = useGSAP({ scope: navBar.current });

  const openMobileNav = contextSafe(() => {
    setIsMobileNavOpen(!isMobileNavOpen);

    const timeLine = gsap.timeline();
    const animDuration = 0.1; // duration of icon switching animation
    const tlDelay = 0.1; // delay between animation of each icon

    if (isMobileNavOpen) {
      // button border and text color
      gsap.to(navButton.current, {
        borderColor: "#ECE3CE",
        color: "#ECE3CE",
      });

      // hamburber icon color
      gsap.to(".menu-icon div", { borderColor: "#ECE3CE" });

      gsap.to(mobileNav.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.3,
      });

      timeLine
        .to(navCloseIcon.current, {
          x: "-2.5rem",
          duration: animDuration,
          ease: "power4.in",
        })
        .to(
          navMenuIcon.current,
          {
            x: "0px",
            duration: animDuration,
            ease: "elastic.out",
          },
          tlDelay
        );
    } else {
      // button border and text color
      gsap.to(navButton.current, {
        borderColor: "#3A4D39",
        color: "#3A4D39",
      });

      // hamburber icon color
      gsap.to(".menu-icon div", { borderColor: "#3A4D39" });
      gsap.to(mobileNav.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.3,
      });

      timeLine
        .to(navMenuIcon.current, {
          x: "300px",
          duration: animDuration,
          ease: "power4.in",
        })
        .to(
          navCloseIcon.current,
          {
            x: "2.9rem",
            duration: animDuration,
            ease: "elastic.out",
          },
          tlDelay
        );
    }
  });

  return (
    <>
      <header
        ref={navBar}
        className="z-30 w-full fixed top-0 py-4 px-8 md:px-10 lg:px-20 text-2xl bg-[rgba(255, 255, 255, .1)] backdrop-blur border-b-white border-b-2 overflow-hidden"
      >
        <div className="flex justify-between items-center">
          <div className="">
            <Link href="/">Kevin K</Link>
          </div>
          <div className="hidden md:flex ">
            <ul className="flex justify-between">
              <li className="mr-8">
                <Link href="#about">About</Link>
              </li>
              <li className="">
                <Link href="#projects">Projects</Link>
              </li>
            </ul>
          </div>
          <button
            ref={navButton}
            className="z-50 relative flex justify-center items-center gap-1 md:hidden border-white border-2 px-4 py-3 overflow-hidden"
            onClick={openMobileNav}
          >
            <div ref={navMenuIcon} className="menu-icon flex flex-col gap-1">
              <div className="border-white border-[1px] w-7" />
              <div className="border-white border-[1px] w-7" />
              <div className="border-white border-[1px] w-7" />
            </div>
            <div ref={navCloseIcon} className="absolute -left-6">
              X
            </div>
          </button>
        </div>
      </header>
      <MobileNav ref={mobileNav} />
    </>
  );
}

export default Navbar;
