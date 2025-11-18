"use client"
import React from 'react'
import { yugioh } from '../../../assets/assets'
import Image from "next/image";

const page = () => {
  const post = [
    {
      img: yugioh,
      title: "Yugioh anime has introduced various series ",
      field: "anime",
      description: [
       "Yugioh anime has introduced and released various series based on various dimensions and summoning ",
       " like fusion,synchro,Xyz,Pendulum,Link,Ritual and rush Duels. Each series have protangist and villians and",
       " have their ace monsters. Go rush and Sevens are differ from other series. Yugioh introduced some games",
       " like yugioh duel links, yugioh cross duel"
      ],
      published:"10 Dec 2022"
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
