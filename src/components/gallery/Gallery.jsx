import ReactLenis from 'lenis/react';
import { Upload } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar'

function Gallery() {
    const [open, setopen] = useState(false)
    const [openUpload, setopenUpload] = useState(false)
    const [imginfo, setimginfo] = useState({})
    const [imgPreviews, setImgPreviews] = useState([])
    const teamImages = [
        "/yeh-che-wei-xdirCDBJZFA-unsplash-min.jpeg",
        "/real_-jansen-LpnZ4I1TIKs-unsplash-min.jpeg",
        "/praveen-gupta-ptf91j8SFiM-unsplash-min.jpeg",
        "/piyanshu-sharma-j0PS3YTrZkU-unsplash-min.jpeg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash-min.jpeg",
        "/mak-flex-2P_tj31Zu3E-unsplash-min.jpeg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash-min.jpeg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash-min.jpeg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash-min.jpeg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash-min.jpeg",
        "/yeh-che-wei-xdirCDBJZFA-unsplash-min.jpeg",
        "/real_-jansen-LpnZ4I1TIKs-unsplash-min.jpeg",
        "/praveen-gupta-ptf91j8SFiM-unsplash-min.jpeg",
        "/piyanshu-sharma-j0PS3YTrZkU-unsplash-min.jpeg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash-min.jpeg",
        "/mak-flex-2P_tj31Zu3E-unsplash-min.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash-min.jpg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash-min.jpg",
        "/aleksandr-popov-vCbKwN2IXT4-unsplash-min.jpg",
        "/mak-flex-2P_tj31Zu3E-unsplash-min.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash-min.jpg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash-min.jpg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash-min.jpg",
        "/mak-flex-2P_tj31Zu3E-unsplash-min.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash-min.jpg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash-min.jpg",
        "/aleksandr-popov-vCbKwN2IXT4-unsplash-min.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash-min.jpg"
    ];
    const windowref=useRef()
    const OpenClick=(img)=>{
        setopen(true)
        const searchimg = img.src.split("http://localhost:5173")[1];
        const find=teamImages.find((e)=>e==searchimg)
        setimginfo(find)
    }

    const OpenUpload=()=>{
        setopenUpload(true)
    }

    useEffect(() => {
        if (open) {
          const handleClickOutside = (event) => {
            if (windowref.current && !windowref.current.contains(event.target)) {
              setopen(false); // Close the modal
            }
          };
    
          document.addEventListener("mousedown", handleClickOutside);
    
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }
      }, [open]);
  return (
    <ReactLenis root options={{lerp:0.1, duration:1.8}}>
        <div className='w-full min-h-screen flex flex-col text-white px-5 relative'
            style={{
                backgroundImage: `url('/ChatGPT Image Apr 4, 2025, 01_41_45 AM.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <NavBar Page={"Gallery"}/>
            {open && imginfo && (
                <div className='fixed top-0 left-0 h-screen w-full flex justify-center items-center backdrop-blur-md z-50'>
                    <img ref={windowref} src={`${imginfo}`} alt="" loading='lazy' className='max-h-[70vh] max-w-full object-contain rounded-2xl bg-gray-800' />
                </div>
            )}
            {openUpload && (
                <div className='fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center backdrop-blur-md z-50'>
                    <div className='bg-gray-800 p-6 rounded-xl shadow-lg'>
                        <input 
                            type="file" 
                            accept="image/*" 
                            multiple 
                            onChange={(e) => {
                                const files = Array.from(e.target.files);
                                const imagePreviews = files.map(file => URL.createObjectURL(file));
                                setImgPreviews(imagePreviews);
                            }} 
                            className='mb-4 p-2 border border-gray-300 rounded'
                        />
                        <div className='flex flex-wrap justify-center'>
                            {imgPreviews.map((imgSrc, index) => (
                                <img 
                                    key={index} 
                                    src={imgSrc} 
                                    alt={`Preview ${index}`} 
                                    className='m-2 w-24 h-24 object-cover rounded-lg border border-gray-400' 
                                />
                            ))}
                        </div>
                        <button 
                            onClick={() => {setopenUpload(false);setImgPreviews([])}} 
                            className='mt-4 p-2 bg-red-500 text-white rounded'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className='columns-[300px]'>
                {teamImages.map((e)=>(
                    <img src={e} alt="" onClick={(e)=>OpenClick(e.currentTarget)} loading='lazy' className='m-2 py-2 rounded-xl cursor-pointer' />
                ))}
            </div>
            <div className='lg:w-[14vw] h-[6vh] fixed top-2 z-[90] right-4 m-3 rounded-2xl '>
                <div className='w-full h-full flex justify-center items-center gap-4 backdrop-blur-lg rounded-2xl cursor-pointer p-2' onClick={OpenUpload}>
                    <Upload />
                    <h1 className='text-[4vw] lg:text-[1vw]'>Uplaod Your Memories</h1>
                </div>
            </div>
        </div>
    </ReactLenis>
  )
}

export default Gallery