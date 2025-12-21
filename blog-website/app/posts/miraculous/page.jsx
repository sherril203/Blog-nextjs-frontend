import React from 'react'
import { miraculous } from '../../../assets/assets'
import Image from "next/image";
export const metadata = {
    title: "The New Adventures of Miraculous Ladybug",
    description: "Miraculous ladybug is the series going with new evolution"
}
const page = () => {
  const post = [
    {
      img: miraculous,
      title: "The New Adventures of Miraculous Ladybug",
      field: "Cartoon",
      description: [
        "Follow the exciting adventures of Ladybug as she saves Paris from supervillains!.", 
        " The miraculous jewels and transformations differ between seasons, including Ladybug, Pegasus, etc.",
        " Ladybug is the guardian of the miraculous jewels, protecting them from evil to misuse.",
        " ladybug transformed into various transformation with other kwami like pennybug,pegabug,mutifox,multibug,ladybee,bu noir and dragon bug.",
        " Hawk Moth is the villian who holds the Butterfly miraculous to get all miraculous from ladybug by akumatized the people into villians",
        " and he got the peacock miraculous and form monarch."
      ],
      published:"02 Nov 2024"
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
