import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ReactLenis from "lenis/react";
import Glimpse_Home from "../Glimpse_Home";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sponsor from "../Sponsor";
import Event_section from "../Event_section";
import AccordionSlider from "../Event_section";
import Footer from "../Footer";
import FlagshipEvent from "../FlagshipEvent";
import NavBar from "../NavBar";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const cursorRef = useRef();
  const imageRef = useRef(null);
  const videoconatiner = useRef();

  useEffect(() => {
    // Create a GSAP context for the scroll-triggered animation.
    const ctx = gsap.context(() => {
      // Check if the window width is greater than or equal to 1024px (laptop view)
      if (window.innerWidth >= 768) { // Adjusted for md screen width
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: videoconatiner.current,
            start: "top center", // Begin when the top of the element hits center of viewport
            end: "bottom 80%",
            toggleActions: "play none none reverse",
            scrub: true,
            // markers: true, // Uncomment for debugging positions
          },
          y: window.innerHeight / 3, // Move down
          width: "200%", // Increase width (adjust as needed)
          height: "70%",
          borderRadius: "9999px", // Fully rounded effect
          duration: 6,
        //   ease: "expoScale(0.5,7,none)",
          x: "-50%", // Center horizontally
        });
      }
    });
    return () => ctx.revert();
  }, []);

  // --- Cursor Follow Animation ---
  useEffect(() => {
    const cursorElement = cursorRef.current;
    if (!cursorElement) return;
    const moveCursor = (e) => {
      gsap.to(cursorElement, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out",
        xPercent: -50,
        yPercent: -50,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.8 }}>
      <div className="flex flex-col min-h-screen bg-black relative font-sans text-white">
        {" "}
        {/* Default font and text color */}
        {/* Custom Cursor - Hidden on small screens (touch devices usually) */}
        <div
          ref={cursorRef}
          // Use white border on black bg, initial state hidden, only block on md+
          className="fixed top-0 left-0 w-6 h-6 border-2 border-white rounded-full pointer-events-none opacity-0 scale-0 z-[10000] transition-transform duration-100 ease-out inline-block"
        ></div>
        {/* Expandable Menu */}
        <NavBar Page={"Home"}/>
        {/* Hero Section */}
        <div className="relative flex flex-col w-full h-auto">
          {" "}
          {/* Removed md:flex-row, let image dictate height */}
          {/* Background Image */}
          <img
            src="/hometopfull3.png"
            alt="Technika stage background" // Descriptive alt text
            // Responsive height, object cover to fill area
            className="w-full h-[50vh] object-cover"
          />
          {/* Overlay Logo Image */}
          <img
            src="/tehnika 2025.png"
            alt="Technika 2025 Logo"
            // Centered absolutely, responsive width using vw with max limits
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto w-[90vw] md:w-[40vw] lg:w-[50vw]  opacity-85" // Adjusted opacity and max-width
          />
        </div>
        {/* Video Section */}
        <div ref={videoconatiner} className="flex md:h-screen w-full mb-40 md:flex-row flex-col">
          <h1 className="text-white px-8 md:px-28 py-[6vw] flex text-2xl md:text-4xl lg:w-1/2 w-full md:w-3/5 font-[main-font]">
            Immerse yourself in a world of innovation, technology, and limitless
            possibilities. Experience thrilling competitions, inspiring talks,
            and hands-on workshops like never before!
          </h1>
          <div className="lg:w-1/2 md:2/5 w-full h-full rounded-full flex justify-center items-center md:items-start py-8">
            <video
              playsInline
              muted
              autoPlay
              loop
              ref={imageRef}
              src="/New Project 37 Warriors Copy [69E06C6].mp4#t=33"
              alt="Full Width"
              className="md:h-[20vw] md:w-[18vw] w-[90vw] h-[50vw] m-10 flex justify-center items-center rounded-full bg-orange-300 object-fill"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Other Sections (Placeholders) */}
        <div className="w-full">
          <Glimpse_Home />
        </div>
        <div className="w-full">
          <AccordionSlider />
        </div>
        <div className="w-full">
          <FlagshipEvent />
        </div>
        <div className="w-full">
          <Sponsor />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

export default Home;
