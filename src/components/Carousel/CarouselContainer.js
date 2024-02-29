import React from 'react'
import Carousel from './Carousel'
import people from './data'


export default function CarouselContainer() {
  return (
    <div>
        <Carousel data={people}/>
    </div>
  )
}
