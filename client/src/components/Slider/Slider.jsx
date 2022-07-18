import './Slider.css'
import React, { useState, useEffect } from "react"
import slide1 from "../../img/volny1.jpeg"
import slide2 from "../../img/volny2.jpeg"
import slide3 from "../../img/volny3.jpeg"
import slide4 from "../../img/volny4.jpeg"
import slide5 from "../../img/volny5.jpeg"


export default function Slider() {
  const img = [
    <img key={slide1} src={slide1} alt='' />,
    <img key={slide2} src={slide2} alt=''/>,
    <img key={slide3} src={slide3} alt='' />,
    <img key={slide4} src={slide4} alt='' />,
    <img key={slide5} src={slide5} alt=''/>,
  ]

  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === img.length - 1 ? 0 : current + 1
        return res
      })
    }, 3000)
    return () => clearInterval()
  }, [])

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev"
        key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img"
        key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next"
        key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  )
}

