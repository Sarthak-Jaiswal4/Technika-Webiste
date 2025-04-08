import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Team_Page from './Pages/Team.Page.jsx'
import Team from './components/Team Page/Team.jsx'
import TeamMember from './components/Team Page/TeamMember.jsx'
import About from './components/About page/About.jsx'
import Comepetition from './components/Competetion/Comepetition.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import Home from './components/HomePage/Home.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />}/>
      <Route path="/team" element={<Team_Page />}/>  
      <Route path='/about' element={<About/>}/>
      <Route path='/competetion' element={<Comepetition/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
