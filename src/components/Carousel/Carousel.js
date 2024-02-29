import React, { useEffect, useRef, useState } from "react";
import './styles.css'

export default function Carousel({ data }) {
    const [active,setActive] = useState(0)
    const intervalRef = useRef(null)
    useEffect(() => {
        start()
        return () => clearInterval(intervalRef.current)
    })
    const prevSlide = () => {
        stop()
        if(active === 0) {
            setActive(data.length - 1)
        }else{
            setActive((prev) => prev - 1)
        }
       
    }
    const nextSlide = () => {
        stop()
        if(active === data.length - 1) {
            setActive(0)
        }else{
            setActive((prev) => prev + 1)
        }
        
    }

    const start = () => {
        intervalRef.current = setInterval(()=> {
            setActive((prev) => {
                if (prev === data.length - 1) {
                    return 0;
                  } else {
                    return prev + 1;
                  }
            })
        },3000)
    }
    const stop = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current)
        }
    }
  return (
    <div className="carousel">
      {data.map((person,index) => (
        <div className={index === active ? 'carousel-item active' : 'carousel-item'}>
          <img src={person.image} alt={person.name} className="carousel-image" onMouseLeave={start} onMouseOver={stop}/>
          <h3>{person.name} - {person.title}</h3>
        </div>
      ))}
       <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}
