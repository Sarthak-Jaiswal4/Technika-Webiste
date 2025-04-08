import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ReactLenis from 'lenis/react';
import Glimpse_Home from '../Glimpse_Home';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sponsor from '../Sponsor';
import Event_section from '../Event_section';
import AccordionSlider from '../Event_section';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const [openMenu, setopenMenu] = useState(false)

  const imageRef = useRef(null);
  const videoconatiner=useRef()

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
        height:"70%",
        borderRadius: "9999px", // Change border radius to 50% for a circular shape
        duration: 6, // Duration of the animation
        ease: "expoScale(0.5,7,none)", // Easing function for smooth animation
        x: "-50%", // Center the image horizontally
    });
    
  }, []);

  return (
    <ReactLenis root options={{lerp:0.1, duration:1.8}}>
        <div className="flex flex-col min-h-screen bg-black relative">
        <div className={`w-[40vw] bottom-15 left-1/2 transform -translate-x-1/2 ${openMenu ? 'h-60vh' : 'h-6'} rounded-xl bg-white px-2 py-1 flex flex-col justify-between items-center fixed z-[9999] transition-all duration-300`}>
            {openMenu && (
                <div className="w-full flex flex-col items-center pb-4">
                    <div>
                        <h1 className='text-xl font-semibold'>Technika</h1>
                    </div>
                    <div className='w-full h-full'>
                        <div className="flex items-center">
                            <img src={`/path/to/random-photo${Math.floor(Math.random() * 4) + 1}.png`} className="mr-2" />
                            <Link to={'/'} className="text-black py-4 w-full border-b-2">Home</Link>
                        </div>
                        <div className="flex items-center">
                            <img src={`/path/to/random-photo${Math.floor(Math.random() * 4) + 1}.png`} className="mr-2" />
                            <Link to={'/about'} className="text-black py-4 w-full border-b-2">About</Link>
                        </div>
                        <div className="flex items-center">
                            <img src={`/path/to/random-photo${Math.floor(Math.random() * 4) + 1}.png`} className="mr-2" />
                            <Link to={"/competetion"} className="text-black py-4 w-full border-b-2">Competition</Link>
                        </div>
                        <div className="flex items-center">
                            <img src={`/path/to/random-photo${Math.floor(Math.random() * 4) + 1}.png`} className="mr-2" />
                            <Link to={'/gallery'} className="text-black py-4 w-full border-b-2">Gallery</Link>
                        </div>
                    </div>
                </div>
            )}
            <div className='w-full h-full flex items-center justify-between px-2'>
                <h1 className="text-black">Home</h1>
                <span className="text-black text-3xl" onClick={() => setopenMenu(!openMenu)}>+</span>
            </div>
        </div>

        <div className="relative flex w-full h-2/3">
            <img src="/hometopfull3.png" alt="Image 1" className="flex w-full h-2/3" />
            <img src="/tehnika 2025.png" alt="Image 2" className="absolute top-[6vw] opacity-80 left-1/2 transform -translate-x-1/2 h-[21vw]" />
        </div>
        <div ref={videoconatiner} className="flex h-screen w-full mb-40">
            <h1 className='text-white px-28 py-[6vw] flex text-2xl w-1/2'>Immerse yourself in a world of innovation, technology, and limitless possibilities. Experience thrilling competitions, inspiring talks, and hands-on workshops like never before!</h1>
            <div className='w-1/2 h-full rounded-full flex justify-center items-start py-10'>
                <video playsInline muted autoPlay loop ref={imageRef} src="/New Project 37 Warriors Copy [69E06C6].mp4#t=33" alt="Full Width" className="h-[20vw] w-[18vw] m-10 flex justify-center items-center rounded-full bg-orange-300 object-fill">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div >
            <Glimpse_Home/>
        </div>
         <AccordionSlider/>
         <Footer/>
        </div>
    </ReactLenis>
  );

}

export default Home