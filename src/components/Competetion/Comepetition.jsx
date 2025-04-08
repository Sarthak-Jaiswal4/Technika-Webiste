import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import SplitType from "split-type";
import NavBar from '../NavBar'
gsap.registerPlugin(ScrollTrigger);

function Comepetition() {
  const [windowopen, setwindowopen] = useState(false);
  const [windowinfo, setwindowinfo] = useState({});
  const competitionInfo = [
    {
      name: "Code Sprint",
      img: "/clay-banks-0VfnZbQd98c-unsplash-min.jpeg",
      quote: "Code fast, think faster!",
      prize: "₹25,000",
      registrationFee: "₹200",
      instructions: [
        "Each team can have up to 3 members.",
        "You will be given a problem statement at the start.",
        "You must submit your solution within the given time limit.",
        "Use of AI tools is not allowed.",
      ],
      bgColor: "bg-yellow-300",
      accentColor: "text-yellow-200",
    },
    {
      name: "Hackathon",
      img: "/c-f-photography-iV_oBbfZNmg-unsplash-min.jpeg",
      quote: "Innovate, build, disrupt.",
      prize: "₹50,000",
      registrationFee: "₹500",
      instructions: [
        "Maximum team size: 4 members.",
        "Projects must be developed during the event.",
        "Judging criteria include innovation, feasibility, and presentation.",
        "You must present a working prototype.",
      ],
      bgColor: "bg-green-800",
      accentColor: "text-green-700",
    },
    {
      name: "Tech Quiz",
      img: "/safar-safarov-koOdUvfGr4c-unsplash-min.jpeg",
      quote: "Knowledge is power—prove it!",
      prize: "₹10,000",
      registrationFee: "₹100",
      instructions: [
        "Individual or team participation (max 2 per team).",
        "The quiz will have 3 rounds: MCQs, rapid-fire, and buzzer round.",
        "Negative marking is applicable.",
        "Use of mobile phones is strictly prohibited.",
      ],
      bgColor: "bg-sky-500",
      accentColor: "text-sky-400",
    },
    {
      name: "App Development Challenge",
      img: "/jason-leung-1DjbGRDh7-E-unsplash-min.jpeg",
      quote: "Turning ideas into apps!",
      prize: "₹30,000",
      registrationFee: "₹300",
      instructions: [
        "Solo or team participation (max 3 members).",
        "The app must be developed during the competition.",
        "Judging criteria include UI/UX, functionality, and originality.",
        "Apps must be deployed and demonstrated at the end.",
      ],
      bgColor: "bg-amber-500",
      accentColor: "text-amber-400",
    },
  ];

  const pageref = useRef();
  const sectionref = useRef([]);
  const cursorRef = useRef();
  const targetImgRef = useRef(null);
  const windowref = useRef(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const windowOpening = useCallback((clickedEl) => {
    const targetImg = targetImgRef.current;
    if (!targetImg) return;

    const clickedRect = clickedEl.getBoundingClientRect();
    const targetRect = targetImg.getBoundingClientRect();
    const deltaX = targetRect.left - clickedRect.left;
    const deltaY = targetRect.top - clickedRect.top;

    gsap.to(clickedEl, {
      x: deltaX,
      y: deltaY,
      duration: 0.5,
      ease: "power2.in",
    });
  }, []);

  // --- Function: Search for competition info based on an image's src ---
  const searchImageForWindow = useCallback(
    (imageEl) => {
      const src = imageEl.src;
      const relativeSrc = src.replace("http://localhost:5173", "");
      const info = competitionInfo.find((item) => item.img === relativeSrc);
      setwindowinfo(info);
    },
    [competitionInfo, setwindowopen]
  );

  // --- Effect: Custom Cursor Follow ---
  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const moveCursor = (e) => {
      gsap.to(cursorEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out",
        xPercent: -50,
        yPercent: -50,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // --- Effect: Toggle Custom Cursor Visibility Based on Card Hover ---
  useEffect(() => {
    const cursorEl = cursorRef.current;
    const containerEl = pageref.current;
    if (!cursorEl || !containerEl) return;

    if (isHoveringCard) {
      gsap.to(cursorEl, {
        scale: 1,
        opacity: 0.8,
        duration: 0.3,
        ease: "power1.out",
      });
      containerEl.style.cursor = "none";
    } else {
      gsap.to(cursorEl, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      });
      containerEl.style.cursor = "auto";
    }
  }, [isHoveringCard]);

  // --- Effect: Animate Modal Window Opening ---
  useEffect(() => {
    if (!windowopen) return;
    // Use a GSAP context for scoping animation
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          windowref.current,
          { scaleX: 0, transformOrigin: "left", opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: "power3.out" }
        )
        .fromTo(
          targetImgRef.current,
          { scaleX: 0, transformOrigin: "left", opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: "power3.out" }
        );
    });
    return () => ctx.revert();
  }, [windowopen]);

  // --- Effect: Close Modal if Clicked Outside ---
  useEffect(() => {
    if (!windowopen) return;

    const handleClickOutside = (e) => {
      if (windowref.current && !windowref.current.contains(e.target)) {
        setwindowopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [windowopen, setwindowopen]);

  // --- Callbacks: Card Hover Effects ---
  const handleMouseEnterCard = useCallback(
    (e) => {
      setIsHoveringCard(true);
      gsap.to(e.currentTarget, {
        scale: 1.2,
        duration: 0.3,
        ease: "power1.out",
        overwrite: "auto",
      });
    },
    [setIsHoveringCard]
  );

  const handleMouseLeaveCard = useCallback(
    (e) => {
      setIsHoveringCard(false);
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
        overwrite: "auto",
      });
    },
    [setIsHoveringCard]
  );

  useGSAP(
    () => {
      const length = sectionref.current.length;
      const cards = document.querySelectorAll(".card");

      gsap.set(sectionref.current[0], { y: "0%" });

      for (let i = 1; i < length; i++) {
        gsap.set(sectionref.current[i], { y: "100%" });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: pageref.current,
          start: "top top",
          end: `+=${window.innerHeight * (length - 1)}`,
          pin: true,
          scrub: true,
          snap: {
            snapTo: 1 / (length - 1), // Snaps to each section
            ease: "power1.inOut",
            duration: { min: 0.2, max: 0.3 }, // Control snap animation duration
            delay: 0,
          },
          // markers:true,
        },
      });
      const splitInstances = [];
      for (let i = 0; i < length - 1; i++) {
        let current = cards[i];
        let nextcard = cards[i + 1];
        let currentimg = current.children[1];
        let nextimg = nextcard.children[1];
        let prevheading = current.children[0];
        let previnfo = current.children[2];
        let nextheading = current.children[0];
        let nextinfo = current.children[2];

        // scrollTimeline.to(currentimg, {
        //     y: "-100%",
        //     opacity: 0
        // }, i);

        const nameElement = prevheading;
        const infoElement = previnfo;
        if (nameElement) {
          const infoSplit = new SplitType(infoElement, { type: "lines" });
          const nameSplit = new SplitType(nameElement, { type: "lines" });

          splitInstances.push(nameSplit, infoSplit); // Store for cleanup

          scrollTimeline.to(
            [nameSplit.lines, infoSplit.lines],
            {
              opacity: 0,
              y: "-100%",
              // duration: 0.4,
              stagger: 0.05,
            },
            i
          );
        }

        scrollTimeline.to(
          nextcard,
          {
            y: "0%",
            opacity: 1,
            duration: 0.4,
          },
          i
        );
      }
      return () => {
        splitInstances.forEach((split) => split.revert()); // Revert SplitText changes
        scrollTimeline.kill(); // Kill the timeline
        ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill associated ScrollTriggers
        // Optionally clear GSAP properties if needed
        gsap.set(cards, { clearProps: "all" });
      };
    },
    { scope: pageref }
  );

  return (
    <div className="w-full h-full text-black bg-gray-900 font-[main-font] relative">
      {window.innerWidth >= 768 && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-24 h-24 bg-gray-600 rounded-full flex justify-center items-center text-white text-sm font-semibold pointer-events-none opacity-0 scale-0 z-50" // Style the cursor
          style={{ opacity: 0, scale: 0 }} // Initial GSAP state (redundant but safe)
        >
          View More
        </div>
      )}
      <NavBar Page={'Events'}/>
      <div
        ref={pageref}
        className="w-full h-screen flex flex-col justify-center items-center md:px-40 px-4 bg-blur gap-40 relative"
        style={{
          backgroundImage: `url('/2cbc84d3-7541-40fa-99a9-69234be52e94.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {windowopen && windowinfo && (
          <div
            ref={windowref}
            className={`flex flex-col md:flex-row h-[75%] md:h-[70vh] w-[90%] md:w-[65vw] justify-center items-center bg-gray-800 rounded-3xl shadow-lg z-50 p-4 overflow-scroll`}
          >
            <div className={`w-full md:w-1/3`}>
              <div ref={targetImgRef} className={`w-full h-full`}>
                <img
                  src={`${windowinfo.img}`} // Replace with your image path
                  alt="Random Info"
                  className={`w-full h-auto bg-${windowinfo.accentColor}-400 hover:scale-125 rounded-xl transition duration-500 cursor-pointer ease-in-out overflow-hidden py-4`}
                />
              </div>
            </div>
            <div className={`flex flex-col gap-4 w-full md:w-2/3`}>
              <h2
                className={`text-xl md:text-[2.5vw] font-extrabold ${windowinfo.accentColor} uppercase`}
              >
                {windowinfo.name}
              </h2>
              <p className={`text-gray-300 text-base md:text-lg leading-relaxed`}>
                Participate in this thrilling competition and stand a chance to
                win exciting prizes!
              </p>

              {/* Prize Money */}
              <div
                className={`${windowinfo.accentColor} text-lg md:text-xl font-semibold`}
              >
                🏆 Prize Money:{" "}
                <span className={`text-white`}>{windowinfo.prize}</span>
              </div>

              {/* Instructions */}
              <ul className={`list-disc pl-5 text-gray-300 text-base md:text-lg space-y-2`}>
                {windowinfo.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className={`hover:${windowinfo.accentColor} transition duration-300`}
                  >
                    {instruction}
                  </li>
                ))}
              </ul>

              {/* Apply Button */}
              <button
                className={`mt-4 px-4 md:px-6 py-2 text-white text-base md:text-lg font-bold ${windowinfo.bgColor} rounded-lg shadow-lg hover:bg-${windowinfo.accentColor}-600 transition-all duration-300`}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
        {competitionInfo.map((e, index) => (
          <>
            <div
              ref={(el) => (sectionref.current[index] = el)}
              key={index}
              className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4 absolute card overflow-hidden md:top-0 -top-5"
            >
              <h1 className="text-white text-5xl lg:text-[4vw] w-full md:w-[30%] font-black flex flex-col justify-center items-center text-center leading-10 gap-3 sm:leading-[65px] md:py-0 py-4 overflow-hidden">
                {e.name}
              </h1>
              <Tilt>
                <img
                  src={e.img}
                  onMouseEnter={handleMouseEnterCard}
                  onMouseLeave={handleMouseLeaveCard}
                  onClick={(e) => {
                    setwindowopen(true);
                    windowOpening(e.currentTarget);
                    searchImageForWindow(e.currentTarget);
                  }}
                  className="w-[100%] md:w-[20vw] md:h-[30vw] h-[100vw] bg-orange-400 hover:scale-125 rounded-2xl transition duration-500 cursor-pointer ease-in-out overflow-hidden flex justify-center items-center"
                  alt=""
                />
              </Tilt>
              <h1 className="text-white text-5xl lg:text-[4vw] w-full md:w-[30%] font-black flex flex-col justify-center items-center text-center leading-12 sm:leading-[65px]">
                {e.quote}
              </h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Comepetition;
