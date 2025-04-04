import ReactLenis from 'lenis/react';
import { Upload } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

function Gallery() {
    const [open, setopen] = useState(false)
    const [openUpload, setopenUpload] = useState(false)
    const [imginfo, setimginfo] = useState({})
    const [imgPreviews, setImgPreviews] = useState([])
    const teamImages = [
        "/yeh-che-wei-xdirCDBJZFA-unsplash.jpg",
        "/real_-jansen-LpnZ4I1TIKs-unsplash.jpg",
        "/praveen-gupta-ptf91j8SFiM-unsplash.jpg",
        "/piyanshu-sharma-j0PS3YTrZkU-unsplash.jpg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash.jpg",
        "/mak-flex-2P_tj31Zu3E-unsplash.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash.jpg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash.jpg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash.jpg",
        "/yeh-che-wei-xdirCDBJZFA-unsplash.jpg",
        "/real_-jansen-LpnZ4I1TIKs-unsplash.jpg",
        "/praveen-gupta-ptf91j8SFiM-unsplash.jpg",
        "/piyanshu-sharma-j0PS3YTrZkU-unsplash.jpg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash.jpg",
        "/mak-flex-2P_tj31Zu3E-unsplash.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash.jpg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash.jpg",
        "/aleksandr-popov-vCbKwN2IXT4-unsplash.jpg",
        "/mak-flex-2P_tj31Zu3E-unsplash.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash.jpg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash.jpg",
        "/mariola-grobelska-gxcukNe9tKs-unsplash.jpg",
        "/mak-flex-2P_tj31Zu3E-unsplash.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash.jpg",
        "/jason-jarrach-KLe3WJbdK4o-unsplash.jpg",
        "/aleksandr-popov-vCbKwN2IXT4-unsplash.jpg",
        "/jordan-madrid-yTdb-7MoyvM-unsplash.jpg"
    ];
    const windowref=useRef()
    const OpenClick=(img)=>{
        console.log(img.src)
        setopen(true)
        const searchimg = img.src.split("http://localhost:5173")[1];
        const find=teamImages.find((e)=>e==searchimg)
        console.log(find)
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
            <div className='w-[18vw] h-[6vh] fixed bottom-0 z-[90] right-0 m-3 rounded-2xl '>
                <div className='w-full h-full flex justify-center items-center gap-4 backdrop-blur-lg rounded-2xl cursor-pointer' onClick={OpenUpload}>
                    <Upload />
                    <h1 className='text-[1.3vw]'>Uplaod Your Memories</h1>
                </div>
            </div>
        </div>
    </ReactLenis>
  )
}

export default Gallery