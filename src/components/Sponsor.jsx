import React from 'react'

function Sponsor() {
    const indianTechSponsorLogos1 = [
        "/IMG-20240114-WA0011.jpg",
        "/IMG-20240114-WA0012.jpg",
        "/IMG-20240114-WA0013.jpg",
        "/IMG-20240114-WA0014.jpg",
        "/IMG-20240114-WA0015.jpg",
        "/IMG-20240114-WA0018.jpg",
    ]
    const indianTechSponsorLogos2 = [
        "/IMG-20240114-WA0023.jpg",
        "/IMG-20240114-WA0024.jpg",
        "/IMG-20240114-WA0025.jpg",
        "/IMG-20240114-WA0027.jpg",
        "/IMG-20240114-WA0015.jpg",
        "/IMG-20240114-WA0019.jpg",
    ]
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
         <div className="flex w-full pb-16 lg:pb-[4vw] mt-28 justify-between">
      {indianTechSponsorLogos2.map((index)=>(
        <img src={index} alt={`Sponsor Logo ${index}`} className="lg:h-36 h-[14vw] w-[14vw] object-contain  lg:w-36 rounded-full bg-white" />
    ))}
    </div>
      <h1 className="lg:text-[12rem] text-7xl font-semibold mb-4 font-[main-font]">Our Sponsors</h1>
      {/* <p className="text-lg mb-8">We are grateful for the support of our sponsors who make this event possible.</p> */}
      <div className="flex w-full pt-16 lg:pt-[4vw] mb-4 justify-between">
      {indianTechSponsorLogos1.map((index)=>(
        <img src={index} alt={`Sponsor Logo ${index}`} className="lg:h-36 h-[14vw] w-[14vw] object-contain  lg:w-36 rounded-full bg-white" />
    ))}
    </div>
    </div>
  )
}

export default Sponsor