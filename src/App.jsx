import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Popupform from './components/Competetion/Popupform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-900'>
        <h1 className='text-white'>hello</h1>
 main
      </div> 
      <Header/>
       <Outlet/>
     

      </div> */}
      {/* <Header/> */}
      <Outlet/>
main
    </>
  )
}

export default App
