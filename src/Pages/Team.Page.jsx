import React, { useRef, useLayoutEffect } from "react";
import "../App.css";
import { gsap } from "gsap";
import SplitType from "split-type"
import TeamMember from "../components/Team Page/TeamMember";

function Team_Page() {
  const headingref = useRef();
  const headingimg=useRef()


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let split =new SplitType(headingref.current, { type: "words" });
      gsap.from(split.words, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.1,
      });
      return () => split.revert();
    }, headingref);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div className="w-full h-screen bg-blur">
      <div className="page-1 flex justify-center main-color items-center h-screen overflow-hidden">
        <div className="w-full h-full bg-blur flex justify-center items-center">
          <h1
            ref={headingref}
            className="font-[main-font] text-white text-[4.5vw] w-[50%]"
          >
            Meet the minds behind our technical fest,{" "}
            <span ref={headingimg} className="inline-block">
              <img
                ref={headingimg}
                src="/IMG_6029.JPG"
                alt="Team"
                className="w-30 h-13 object-cover rounded-full"
              />
            </span>{" "}
            shaping experiences that inspire and transform!
          </h1>

        </div>
      </div>
      <div className="w-full flex justify-center items-center team-color">
        <TeamMember/>
      </div>
    </div>
  );
}

export default Team_Page;
