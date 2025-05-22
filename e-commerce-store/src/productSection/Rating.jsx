import React from 'react'
import Star from "../assets/star.svg"
const Rating = ({value}) => {
    const stars=Array(value).fill(Star);
  return (
    <>
     {
        stars.map((star,index)=>(
         <img
            key={index}
            src={Star}
            alt="star"
            width="14"
            height="14"
         />
        ))
     }
    </>
  )
}

export default Rating
