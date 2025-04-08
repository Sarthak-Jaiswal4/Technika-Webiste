import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const hashtagref = useRef();
  const containerref = useRef();

  useGSAP(() => {
    const infoSplit = new SplitType(hashtagref.current, { type: "chars" });

    gsap.fromTo(
      infoSplit.chars,
      {
        opacity: 0, // Start with opacity 0
        y: "30%", // Start from above
        duration: 2,
        stagger: 0.3,
      },
      {
        scrollTrigger: {
          trigger: containerref.current,
          start: "top 60%",
          end: "bottom bottom",
          scrub:true,
        //   markers: true,
        },
        opacity: 1, // End with opacity 1
        y: "0%", // End at original position
        duration: 2,
        stagger: 0.3,
        yoyo:true,
        // repeat:-1
      }
    );
    return () => infoSplit.revert();
  });
  return (
    <div
      ref={containerref}
      className="bg-black pt-40 text-white h-[70vh] flex flex-col items-center justify-between bg-blur"
    >
      <h1 ref={hashtagref} className="text-9xl font-medium font-[main-font]">
        #TECHNIKA'25
      </h1>
      <div className="flex space-x-4 mb-4">
        <a href="#" className="text-white">
          Facebook Icon
        </a>
        <a href="#" className="text-white">
          Twitter Icon
        </a>
        <a href="#" className="text-white">
          Instagram Icon
        </a>
        <a href="#" className="text-white">
          LinkedIn Icon
        </a>
      </div>
    </div>
  );
}

export default Footer;
