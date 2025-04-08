import React from 'react'

function Sponsor() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
      <p className="text-lg mb-8">We are grateful for the support of our sponsors who make this event possible.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <img src="/sponsor1.png" alt="Sponsor 1" className="h-24 mb-2" />
          <p className="text-center">Sponsor 1</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/sponsor2.png" alt="Sponsor 2" className="h-24 mb-2" />
          <p className="text-center">Sponsor 2</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/sponsor3.png" alt="Sponsor 3" className="h-24 mb-2" />
          <p className="text-center">Sponsor 3</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/sponsor4.png" alt="Sponsor 4" className="h-24 mb-2" />
          <p className="text-center">Sponsor 4</p>
        </div>
      </div>
    </div>
  )
}

export default Sponsor