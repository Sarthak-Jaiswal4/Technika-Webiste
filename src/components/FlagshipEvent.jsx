import React from 'react'

function FlagshipEvent() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
        <h1 className='font-[main-font] text-9xl py-20 text-center w-full font-bold'>Flagship Event</h1>
    {/* Main Event Hero Section */}
    <div className="flex flex-col h-full md:flex-row font-[main-font]">
      <div 
        className="md:w-full h-192 relative bg-cover bg-center transition-all duration-500 transform hover:scale-105"
        style={{ backgroundImage: "url('/yvette-de-wit-8XLapfNMW04-unsplash.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
        <div className="flex items-center justify-center h-full relative">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            DJ Night
          </h1>
        </div>
      </div>
      {/* Sub-Events Section */}
      <div className="md:w-full flex flex-col">
        <div className="flex-1 h-192 bg-gray-800 p-16 bg-cover flex flex-col items-center justify-center transition-all duration-500 transform hover:scale-105 hover:bg-gray-700"
         style={{ backgroundImage: "url('/1726490269809.jpeg')" }}>
          <h2 className="text-8xl font-bold mb-8">Talk</h2>
          <p className="max-w-md text-2xl text-center">
            Engage with industry experts as they share insights, inspiring talks, and lively discussions.
          </p>
        </div>
        <div className="flex-1 h-192 p-16 flex flex-col bg-cover items-center justify-center transition-all duration-500 transform hover:scale-105" 
        style={{ backgroundImage: "url('/hendo-wang-iK0uqsuYIhA-unsplash.jpeg')" }}>
          <h2 className="text-8xl font-bold mb-8">Laser Show</h2>
          <p className="max-w-md text-2xl text-center">
            Experience a dazzling display of lasers, visuals, and mesmerizing rhythms that light up the night.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FlagshipEvent