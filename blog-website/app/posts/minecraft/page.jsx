"use client"
import React from 'react'
import { minecraft } from '../../../assets/assets'
import Image from "next/image";

const page = () => {
  const post = [
    {
      img: minecraft,
      title: "The Everlasting Appeal of Minecraft",
      field: "Gaming",
      description: [
       "Minecraft has captivated millions of players around the world with its unique sandbox gameplay and endless creativity.",
      "From building intricate structures to exploring vast procedurally-generated worlds, Minecraft offers a truly immersive experience.",
      "The community's creativity, modding capabilities, and regular updates keep the game fresh and exciting even after many years."
      ],
      published:"05 Dec 2023"
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
