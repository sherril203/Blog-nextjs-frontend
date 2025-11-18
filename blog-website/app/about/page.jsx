import React from 'react'
export const metadata = {
    title: "About Page",
    description: "you can see various blog post based on various field"
}
const page = () => {
  return (
    <div>
      <h2 className='p-3 text-2xl font-bold '>About </h2>
      <h2 className=' p-3 text-2xl'>here you can see various blog post based on various field like <br />
      Health,education,finance etc.
      </h2>
    </div>
  )
}

export default page
