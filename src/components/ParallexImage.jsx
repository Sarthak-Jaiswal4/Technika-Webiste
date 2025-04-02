import { useLenis } from 'lenis/react'
import React, { useEffect, useRef } from 'react'

const lerp=(start,end,factor)=> start+(end-start)*factor

function ParallexImage({src ,alt}) {
    const imageref=useRef(null)    
    const bounds=useRef(null)
    const currentTranslateY=useRef(0)
    const targettranslateY=useRef(0)
    const rafid=useRef(null)

    useEffect(() => {
      const updateBounds=()=>{
        if(imageref.current){
            const rect=imageref.current.getBoundingClientRect()
            bounds.current={
                top:rect.top+window.scrollY,
                bottom:rect.bottom+window.scrollY
            }
        }
      }

      updateBounds()
      window.addEventListener("resize",updateBounds);

      const animate=()=>{
        if(imageref.current){
            currentTranslateY.current=lerp(
                currentTranslateY.current,
                targettranslateY.current,
                0.1
            )

            if(Math.abs(currentTranslateY.current - targettranslateY.current) > 0.01){
                imageref.current.style.transform=`translateY(${currentTranslateY.current}px) scale(1.25)`;
            }
        }
        rafid.current=requestAnimationFrame(animate)
      }

      animate()

      return ()=>{
        window.removeEventListener("resize",updateBounds)
        if(rafid.current){
            cancelAnimationFrame(rafid.current)
        }
      }
    }, [])

    useLenis(({scroll})=>{
        if(!bounds.current) return;
        const relativescroll=scroll-bounds.current.bottom
        targettranslateY.current=relativescroll*0.1
    })
    

  return (
   <img ref={imageref} src={src} alt={alt} style={
   { willChange:"transform", transform:"translateY(0) scale(1.25)"}
   }/>
  )
}

export default ParallexImage