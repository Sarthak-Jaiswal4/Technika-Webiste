import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useCallback } from "react";
const panels = [
  { name: "Code Sprint", img: "/clay-banks-0VfnZbQd98c-unsplash-min.jpeg" },
  { name: "Hackathon", img: "/c-f-photography-iV_oBbfZNmg-unsplash-min.jpeg" },
  { name: "Tech Quiz", img: "/safar-safarov-koOdUvfGr4c-unsplash-min.jpeg" },
  {
    name: "App Development Challenge",
    img: "/jason-leung-1DjbGRDh7-E-unsplash-min.jpeg",
  },
];

const AccordionSlider = () => {
  const panelsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const closeSlide = useCallback(() => {
    return new Promise((resolve) => {
      panelsRef.current.forEach((panel) => {
        gsap.killTweensOf(panel);
        gsap.to(panel, {
          ease: "power2.out",
          flex: 1,
        });
      });
      // Wait 100ms before resolving the promise
      setTimeout(() => resolve(), 100);
    });
  }, [panelsRef]);

  const activeSlide = useCallback(
    (index) => {
      closeSlide().then(() => {
        const slide = panelsRef.current[index];
        setActiveIndex(index); // Update activeIndex state
        gsap.to(slide, {
          duration: 1,
          ease: "power2.out",
          flex: 15,
        });
      });
    },
    [closeSlide, setActiveIndex]
  );

  return (
    <div className="flex h-screen w-full flex-col gap-20">
      <div className="h-full w-full bg-blur flex gap-20 flex-col">
        <h1 className="text-white font-bold text-7xl md:text-9xl text-center font-[main-font]">
          Events
        </h1>
        <div className="w-full h-full flex justify-center">
          {panels.map((image, index) => (
            <div
              key={index}
              ref={(el) => (panelsRef.current[index] = el)}
              onClick={() => activeSlide(index)}
              className="w-[10%] h-[65%] shrink-0 cursor-pointer relative m-1 bg-gray-300 overflow-hidden"
            >
              <img
                src={image.img}
                alt={`Panel ${index + 1}`}
                className="w-full h-full flex object-cover overflow-hidden aspect-2/3" // Changed h-full to h-auto to maintain aspect ratio
              />
              <div
                className={`absolute bottom-4 left-4 font-[main-font] text-white font-medium ${
                  index == activeIndex ? "text-5xl md:text-6xl sm:text-4xl" : "hidden"
                } px-2 py-1 rounded`}
              >
                {image.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSlider;
