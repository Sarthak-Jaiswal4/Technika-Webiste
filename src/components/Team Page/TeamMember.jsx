import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ReactLenis from 'lenis/react';
import ParallexImage from '../ParallexImage';

gsap.registerPlugin(ScrollTrigger)

function TeamMember() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    
    const teamImages = [
        "/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg",
        "/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        "/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        "/max-muselmann-oIVvGqqwVJw-unsplash.jpg",
        "/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg",
        "/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg",
        "/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        "/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        "/max-muselmann-oIVvGqqwVJw-unsplash.jpg",
        "/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg",
        "/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg",
        "/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        "/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        "/max-muselmann-oIVvGqqwVJw-unsplash.jpg",
        "/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg",
        "/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg",
        "/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        "/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        "/max-muselmann-oIVvGqqwVJw-unsplash.jpg",
        "/max-muselmann-oIVvGqqwVJw-unsplash.jpg",
        "/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg",
        "/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg",
        "/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        "/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        "/max-muselmann-oIVvGqqwVJw-unsplash.jpg",
    ];

    // Generate random grid positions
    const getRandomGridPosition = () => {
        const col = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
        const row = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 10
        return { col, row };
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let tl=gsap.timeline()
        // Pin the heading
        // tl.to(headingRef.current, {
        //     scrollTrigger: {
        //         trigger: containerRef.current,
        //         start: "top",
        //         end: "+=100%",
        //         pin: true,
        //         pinSpacing: true,
        //         scrub: 1,
        //         markers:true
        //     },
        //     opacity: 0,
        //     y: -100,
        //     duration: 1
        // });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
      <ReactLenis root options={{lerp:0.1, duration:1.8}}>
        <div ref={containerRef} className='w-full relative bg-blur'>
            <div className='sticky top-0 h-screen flex justify-center items-center z-50'>
                <h1 ref={headingRef} className='text-white text-[7vw] font-[team-font]'>Our Team</h1>
            </div>
            <div className='w-full min-h-screen grid grid-cols-4 grid-rows-12 gap-4 z-0'>
                {teamImages.map((image, index) => {
                    const { col, row } = getRandomGridPosition();
                    return (
                        <div 
                            id={`team-member-${index}`}
                            key={index} 
                            className='w-[20vw] h-[25vw] rounded-xl overflow-hidden justify-self-center self-center'
                            style={{
                                gridColumn: col,
                                gridRow: row
                            }}
                        > 
                            <ParallexImage 
                                src={image} 
                                alt={`Team Member ${index + 1}`} 
                                className='w-full h-full object-cover rounded-xl'
                                onError={(e) => console.error('Image failed to load:', e)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
        </ReactLenis>
    )
}

export default TeamMember