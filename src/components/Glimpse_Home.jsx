import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Glimpse_Home() {
  const imagesRef = useRef([]);
  const h1Ref = useRef(null);
  const containerRef = useRef();

  useGSAP(() => {
    gsap.to(h1Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // adjust this value to control the pin duration
        pin: true,
        scrub: 0.5,
        // markers: true, // remove markers in production
      },
    });
    const images = imagesRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 0.5,
        // markers: true, // remove markers in production
      },
    });

    images.forEach((img, index) => {
      const speed = index % 2 === 0 ? 0.5 : 1.5; // Different speed for each image
      tl.to(
        img,
        {
          y: -window.innerHeight * speed,
          ease: "none",
        },
        "<" // All animations start together; adjust if needed
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[100vh] bg-black relative bg-blur overflow-hidden"
    >
      <div ref={h1Ref} className="w-full h-full flex justify-center items-center flex-col gap-6 md:gap-4 font-[main-font]">
        <h1 className="text-white text-2xl z-[999] font-bold">Get a Glimpse</h1>
        <h1 className="text-white text-4xl w-[85%] md:w-[45vw] text-center leading-10 lg:leading-11 tracking-widest z-[999]">Get a glimpse of the electrifying innovations, exciting challenges, and unforgettable moments that define our technical fest!</h1>
      </div>
      <div className="w-full h-full" id="smooth-content">
        <img
          ref={(el) => (imagesRef.current[0] = el)}
          data-speed="0.5"
          src={`/mariola-grobelska-gxcukNe9tKs-unsplash-min.jpeg`}
          alt="Image 1"
          className="absolute rounded-4xl md:w-[13%] w-[30vw]"
          style={{
            top: '20vh', // Specific top position
            left: '10vw', // Specific left position
            // width: '12.5%', // Adjusted width to maintain aspect ratio
            opacity: 1,
          }}
        />
        <img
          ref={(el) => (imagesRef.current[1] = el)}
          data-speed="1.5"
          src={`/piyanshu-sharma-j0PS3YTrZkU-unsplash-min.jpeg`}
          alt="Image 2"
          className="absolute rounded-4xl md:w-[13%] w-[35vw]"
          style={{
            top: '70vh', // Specific top position
            left: '30vw', // Specific left position
            // width: '12.5%', // Adjusted width to maintain aspect ratio
            opacity: 1,
          }}
        />
        <img
          ref={(el) => (imagesRef.current[2] = el)}
          data-speed="0.8"
          src={`/real_-jansen-LpnZ4I1TIKs-unsplash-min.jpeg`}
          alt="Image 3"
          className="absolute rounded-4xl md:w-[21%] w-[45vw]"
          style={{
            top: '70vh', // Specific top position
            left: '50vw', // Specific left position
            // width: '20.5%', // Adjusted width to maintain aspect ratio
            opacity: 1,
          }}
        />
        <img
          ref={(el) => (imagesRef.current[3] = el)}
          data-speed="1.2"
          src={`/jannes-jacobs-Vl0NVX9iKo0-unsplash-min.jpeg`}
          alt="Image 4"
          className="absolute rounded-4xl md:w-[13%] w-[30vw]"
          style={{
            top: '150vh', // Specific top position
            left: '80vw', // Specific left position
            // width: '12.5%', // Adjusted width to maintain aspect ratio
            opacity: 1,
          }}
        />
        <img
          ref={(el) => (imagesRef.current[4] = el)}
          data-speed="1.7"
          src={`/jason-jarrach-KLe3WJbdK4o-unsplash-min.jpeg`}
          alt="Image 4"
          className="absolute rounded-4xl md:w-[25%] w-[50vw]"
          style={{
            top: '90vh', // Specific top position
            right: '65vw', // Specific left position
            // width: '25%', // Adjusted width to maintain aspect ratio
            opacity: 1,
          }}
        />
        <img
          ref={(el) => (imagesRef.current[5] = el)}
          data-speed="1.1"
          src={`/jordan-madrid-yTdb-7MoyvM-unsplash-min.jpeg`}
          alt="Image 4"
          className="absolute rounded-4xl md:w-[21%] w-[50vw]"
          style={{
            top: '50vh', // Specific top position
            left: '70vw', // Specific left position
            // width: '20.5%', // Adjusted width to maintain aspect ratio
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}

export default Glimpse_Home;
