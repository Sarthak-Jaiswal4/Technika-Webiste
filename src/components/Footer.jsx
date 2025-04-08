import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const hashtagref = useRef();
  const containerref = useRef();

  const gmail = 'mailto:technicalsubcouncil@hbtu.ac.in'
  const phonenumber = 'tel:9120657951'
  const threadlink = 'https://www.threads.net/@technika_24'
  const youtubeLink = 'https://youtube.com/@Technika_24?si=wu_E0a1S4GhV9TEU';
  const instaLink = 'https://www.instagram.com/technika_24?igsh=ZXkzYWdkdWVhM3g1';
  const linkedinLink = 'https://www.linkedin.com/company/technical-sub-council-hbtu/';

  const handleYoutubeClick = () => {
      window.open(youtubeLink, '_blank');
  };
  const handleInstaClick = () => {
      window.open(instaLink, '_blank');
  };
  const handlelinkedClick = () => {
      window.open(linkedinLink, '_blank');
  };
  const handleMailClick = () => {
      window.open(gmail, '_blank');
  };
  const handlePhoneClick = () => {
      window.open(phonenumber, '_blank');
  };
  const handleThreadsClick = () => {
      window.open(threadlink, '_blank');
  };

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
      className="bg-black pt-40 text-white h-[70vh] pb-[20vw] lg:gap-[2vw] flex flex-col items-center justify-between bg-blur"
    >
      <h1 ref={hashtagref} className="lg:text-8xl text-[12vw] font-semibold font-[main-font]">
        #TECHNIKA'25
      </h1>
      <div className=' flex gap-[4vw] md:gap-[2vw] justify-center items-center'>
        <CgMail className='md:w-[3vw] w-[9vw] h-[8vw] md:h-[3vw] hover:cursor-pointer'  onClick={handleMailClick}/>
        <FaPhone className='md:w-[3vw] w-[9vw] h-[8vw] md:h-[3vw] hover:cursor-pointer' onClick={handlePhoneClick}/>
        <BsYoutube className='md:w-[3vw] w-[9vw] h-[8vw] md:h-[3vw] hover:cursor-pointer' onClick={handleYoutubeClick} />
        <FaInstagram className='md:w-[3vw] w-[9vw] h-[8vw] md:h-[3vw] hover:cursor-pointer' onClick={handleInstaClick} />
        <FaLinkedin className='md:w-[3vw] w-[9vw] h-[8vw] md:h-[3vw] hover:cursor-pointer' onClick={handlelinkedClick} />
        <FaThreads className='md:w-[3vw] w-[9vw] h-[8vw] md:h-[3vw] hover:cursor-pointer' onClick={handleThreadsClick}/>
        </div>
        <div className=''>
             © Technical Sub-Council , HBTU Kanpur | Privacy Policy
        </div>
    </div>
  );
}

export default Footer;
