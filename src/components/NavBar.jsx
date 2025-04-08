import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";

function NavBar({Page}) {
    const [openMenu, setopenMenu] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
          if (openMenu) {
            // If open, expand container height and fade/slide-in inner content.
            gsap.to(containerRef.current, {
              height: "auto",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.fromTo(
              contentRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, delay: 0.4, ease: "none" }
            );
          } else {
            // If closed, collapse container height.
            gsap.to(containerRef.current, {
              height: "5.5vh",
              duration: 0.5,
              ease: "power2.inOut",
            });
          }
        }, containerRef); // Context scoped to containerRef if needed.
        return () => ctx.revert();
      }, [openMenu]);

    const menuItems = [
        { to: "/", label: "Home", icon: "/yvette-de-wit-8XLapfNMW04-unsplash.jpeg" },
        { to: "/about", label: "About", icon: "/annie-spratt-sggw4-qDD54-unsplash.jpeg" },
        { to: "/competetion", label: "Competition", icon: "/jason-mavrommatis-XYrjl3j7smo-unsplash.jpeg" }, // Corrected spelling
        { to: "/gallery", label: "Gallery", icon: "/zalfa-imani-1xp5VxvyKL0-unsplash.jpeg" },
        { to: "/team", label: "Team", icon: "/zalfa-imani-1xp5VxvyKL0-unsplash.jpeg" },
    ];

  return (
    <div
    ref={containerRef}
    // Responsive width, fixed position, centered, responsive height based on openMenu state
    className={`w-[90%] md:w-[45vw] lg:w-[40vw] fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 ${
      openMenu
        ? "h-[70vh] md:h-[65vh] lg:h-[60vh]"
        : "h-[55px] md:h-[60px]" // Adjusted heights
    } rounded-xl bg-white text-black px-2 py-1 flex flex-col justify-between items-center z-[9999] transition-all duration-500 ease-in-out shadow-2xl`} // Increased shadow
  >
    {/* Expanded Menu Content */}
    {openMenu && (
      <div
        ref={contentRef}
        // Full width, scrollable vertically if content overflows
        className="w-full flex flex-col items-center pb-4 pt-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200" // Added scrollbar styling
      >
        {/* Sticky Header inside Menu */}
        <div className="w-full flex flex-col items-center mb-4 sticky top-0 bg-white py-3 z-10 border-b border-gray-200">
          <h5 className="text-2xl md:text-3xl font-bold text-gray-800">
            Technika
          </h5>
        </div>
        {/* Menu Items List */}
        <div className="w-full px-2 md:px-4">
          {" "}
          {/* Added padding */}
          {menuItems.map(({ to, label, icon }) => (
            <Link // Link wraps the entire item
              to={to}
              key={label}
              onClick={() => setopenMenu(false)} // Close menu on navigation
              className="flex items-center group hover:bg-gray-100 px-3 py-2.5 transition-all duration-300 rounded-lg mb-2 border-b border-gray-200 w-full text-left" // Adjusted padding, rounded corners
            >
              <img
                src={icon}
                alt={`${label} icon`} // Better alt text
                // Responsive image size, rounded corners, hover effect
                className="mr-4 w-16 h-12 md:w-20 md:h-14 lg:w-24 lg:h-16 object-cover rounded-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />
              <span className="text-black text-base md:text-lg font-medium transition-transform duration-300 group-hover:translate-x-1.5 flex-grow">
                {" "}
                {/* Text content */}
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    )}

    {/* Collapsed Header / Toggle Button Area */}
    <div
      className={`w-full ${
        openMenu ? "h-auto" : "h-full"
      } flex items-center justify-between px-4`}
    >
      {" "}
      {/* Adjusted padding */}
      {/* Show Label when collapsed (optional, could show current page) */}
      <h5
        className="text-black text-base md:text-lg font-medium"
        style={{ opacity: openMenu ? 0 : 1, transition: "opacity 0.3s" }}
      >
        {Page}
      </h5>
      {/* Menu Toggle Button */}
      <button
        aria-label={openMenu ? "Close Menu" : "Open Menu"}
        aria-expanded={openMenu}
        className="text-black text-3xl md:text-4xl cursor-pointer hover:opacity-70 transition-opacity z-20" // Ensure button is clickable even when content is scrolling
        onClick={() => setopenMenu(!openMenu)}
      >
        {openMenu ? <>&times;</> : "+"} {/* Use HTML entity for '×' */}
      </button>
    </div>
  </div>
  )
}

export default NavBar