import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-900'>
        <h1 className='text-white'>hello</h1>
      </div> */}
      {/* <Header/> */}
      <Outlet/>
    </>
  )
}

export default App
