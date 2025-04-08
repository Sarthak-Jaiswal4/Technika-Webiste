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
import { Link } from "react-router-dom";
import FlagshipEvent from "../FlagshipEvent";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [openMenu, setopenMenu] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
    const cursorRef=useRef()
  const imageRef = useRef(null);
  const videoconatiner = useRef();

  useEffect(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: videoconatiner.current,
        start: "top center", // Start animation when the top of the image hits the center of the viewport
        toggleActions: "play none none reverse", // Play on enter, do nothing on leave, reverse on re-enter
        //   markers: true,
        scrub: true,
        end: "bottom 80%",
      },
      y: window.innerHeight / 3, // Move down to half the window height
      width: "1000%", // Increase width to 3 times
      height: "70%",
      borderRadius: "9999px", // Change border radius to 50% for a circular shape
      duration: 6, // Duration of the animation
      ease: "expoScale(0.5,7,none)", // Easing function for smooth animation
      x: "-50%", // Center the image horizontally
    });
  }, []);

  useEffect(() => {
    if (openMenu) {
      // Animate container height to auto to fill according to the data
      gsap.to(containerRef.current, {
        height: "auto",
        duration: 0.3,
        ease: "power2.out",
      });
      // Animate the inner content fading and sliding in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.4, ease: "none" }
      );
    } else {
      // Collapse the container's height
      gsap.to(containerRef.current, {
        height: "5.5vh",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [openMenu]);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    if (!cursorElement) return;

    const moveCursor = (e) => {
      // Use GSAP to smoothly follow the mouse
      gsap.to(cursorElement, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, // Small duration for smoothing, use 0 for instant
        ease: "power1.out",
        // To center the cursor on the pointer:
        xPercent: -50,
        yPercent: -50,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.8 }}>
      <div className="flex flex-col min-h-screen bg-black relative ">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-7 h-7 border-2  bg-gray-800 rounded-full flex justify-center items-center text-white text-sm font-semibold pointer-events-none opacity-0 scale-0 z-50" // Style the cursor
        style={{ opacity: 1, scale: 1 }} // Initial GSAP state (redundant but safe)
      >
      </div>
        <div ref={containerRef}
          className={`w-[40vw] bottom-12 left-1/2 transform -translate-x-1/2 ${
            openMenu ? "h-60vh" : "h-5.5vh"
          } rounded-xl bg-white px-2 py-1 flex flex-col justify-between items-center fixed z-[9999] transition-all duration-300`}
        >
          {openMenu && (
            <div ref={contentRef} className="w-full flex flex-col items-center pb-4 pt-2">
              {/* Header with a related image */}
              <div className="w-full flex flex-col items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Technika</h1>
              </div>
              {/* Menu Items */}
              <div className="w-full">
                {[
                  {
                    to: "/",
                    label: "Home",
                    icon: "/yvette-de-wit-8XLapfNMW04-unsplash.jpeg",
                  },
                  {
                    to: "/about",
                    label: "About",
                    icon: "/annie-spratt-sggw4-qDD54-unsplash.jpeg",
                  },
                  {
                    to: "/competetion",
                    label: "Competition",
                    icon: "/jason-mavrommatis-XYrjl3j7smo-unsplash.jpeg",
                  },
                  {
                    to: "/gallery",
                    label: "Gallery",
                    icon: "/zalfa-imani-1xp5VxvyKL0-unsplash.jpeg",
                  },
                ].map(({ to, label, icon }) => (
                    <div
                    key={label}
                    className="flex items-center group hover:bg-gray-100 px-3 py-2 transition-all duration-300 rounded-md mb-2 border-b border-gray-300"
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="mr-2 w-24 h-16 transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <Link
                      to={to}
                      className="text-black text-lg font-medium w-full transition-transform duration-300 group-hover:translate-x-2"
                    >
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-full h-full flex items-center justify-between px-2">
            <h1 className="text-black">Home</h1>
            <span
              className="text-black text-3xl cursor-pointer"
              onClick={() => setopenMenu(!openMenu)}
            >
              {openMenu ? "-" : "+"}
            </span>
          </div>
        </div>

        <div className="relative flex w-full h-2/3">
          <img
            src="/hometopfull3.png"
            alt="Image 1"
            className="flex w-full h-2/3"
          />
          <img
            src="/tehnika 2025.png"
            alt="Image 2"
            className="absolute top-[6vw] opacity-80 left-1/2 transform -translate-x-1/2 h-[21vw]"
          />
        </div>
        <div ref={videoconatiner} className="flex h-screen w-full mb-40">
          <h1 className="text-white px-28 py-[6vw] flex text-4xl w-1/2 font-[main-font]">
            Immerse yourself in a world of innovation, technology, and limitless
            possibilities. Experience thrilling competitions, inspiring talks,
            and hands-on workshops like never before!
          </h1>
          <div className="w-1/2 h-full rounded-full flex justify-center items-start py-10">
            <video
              playsInline
              muted
              autoPlay
              loop
              ref={imageRef}
              src="/New Project 37 Warriors Copy [69E06C6].mp4#t=33"
              alt="Full Width"
              className="h-[20vw] w-[18vw] m-10 flex justify-center items-center rounded-full bg-orange-300 object-fill"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div>
          <Glimpse_Home />
        </div>
        <AccordionSlider />
        <FlagshipEvent/>
        <Sponsor/>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Home;
