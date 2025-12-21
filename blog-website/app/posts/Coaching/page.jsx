import React from 'react'
import { sports } from '../../../assets/assets'
import Image from "next/image";
export const metadata = {
    title: "The Everlasting Appeal of Minecraft",
    description: "Minecraft is the game played by overall world"
}
const page = () => {
  const post = [
    {
      img: sports,
      title: "The Rise of Data-Driven Coaching in Modern Sports",
      field: "Sports",
      description: ["In recent years, the world of sports has undergone a digital transformation", 
        " with data-driven coaching emerging as a game-changer. By leveraging advanced analytics", 
        " wearable technology, and performance metrics, coaches can now make more informed decisions", 
        " about training, strategy, and player development. From monitoring athlete health and preventing injuries to",
        " optimizing in-game tactics, data-driven approaches are reshaping how teams compete at every level.",
        " This shift not only enhances performance but also fosters a deeper understanding of the game", 
        " allowing athletes and coaches to push the boundaries of human potential."
      ],
      published:"11 Oct 2021"
    },
  ]

  return (
     <div className="bg-gray-100  p-8">
          {post.map((item, index) => (
            <div key={index} className="max-w-4xl     ">
              <h1 className="text-4xl font-extrabold mb-6">{item.title}</h1>
              <p className="text-gray-500 text-xl italic mb-4">published on {item.published}</p>
              <p className="text-gray-500 text-xl italic mb-4">{item.field}</p>
                <Image  src={item.img} alt={item.title} className='flex justify-center w-200'  /> 
                <p className="text-lg p-2 ">{item.description}</p>
              
            </div>
          ))}
        </div>
  )
}

export default page
