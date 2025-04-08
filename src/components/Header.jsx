import React from 'react'

function Header() {
  return (
    <div className='w-full h-28 flex p-4 bg-transparent absolute justify-between items-center mt-2 z-[99]'>
        <img className='h-30 w-30 object-cover' src="/technika logo.png" alt="" />
        <img className='h-20 w-20 object-contain' src="/HBTU LOGO.png" alt="" />
    </div>
  )
}

export default Header