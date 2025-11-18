"use client"
import { useState, useRef } from "react";
import { minecraft, finance, health, sports,miraculous } from '../assets/assets'
import Image from "next/image";
import Link from "next/link";
const Home = () => {
    const inputRef = useRef("");
    const [search, setSearch] = useState(false);
    const searchPost = (e) => {
        if (e.type == 'keydown' && e.key !== 'Enter') {
            return;
        }

        setSearch(true);
    }
    const post = [{
        img: minecraft,
        title: "The Everlasting Appeal of Minecraft",
        field: "Gaming",
         path:"/posts/minecraft",
          published:"05 Dec 2023"
    },
    {
        img: sports,
        title: "The Rise of Data-Driven Coaching in Modern Sports",
        field: "Sports",
         path:"/posts/miraculous",
          published:"02 Nov 2024"
    },
    {
        img: finance,
        title: "Why 2025 Is the Year of Smart Personal Finance",
        field: "Finance",
         path:"/posts/miraculous",
          published:"02 Nov 2024"
    },
    {
        img: health,
        title: "The Science of Small Wins: How Micro Habits Transform Your Health",
        field: "Health",
         path:"/posts/miraculous"
    },
      {
        img: miraculous,
        title: "The new adventures of Miraculous ladybug",
        field: "cartoon",
        path:"/posts/miraculous",
         published:"02 Nov 2024"
    },
    ]
    return (
        <div>
            <h2 className='p-2 text-3xl font-bold'>Welcome to blog website</h2>
            <h2 className='p-2 text-2xl '>here you can see various field</h2>
            <div className='flex gap-2 p-2 mx-390'>
                <input type="text" disabled={search} ref={inputRef} className='p-2 border border-gray-200 rounded' />
                <button onClick={searchPost} disabled={search} className='bg-blue-600 text-white text-2xl p-2 rounded'>{search ? '...' : 'Search'}</button>
            </div>
            <h2 className='p-2 text-3xl font-bold'>Latest Blog Posts</h2>
            <div className="grid grid-cols-3 p-2 gap-2">
                {post.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg p-4 rounded">
                        <div className="relative w-full h-48">
                           <Link href={item.path} ><Image src={item.img} alt={item.title} fill className="object-cover rounded" /></Link> 
                        </div>
                        <Link href={item.path} className="text-xl font-bold mt-2">{item.title}</Link>
                        <p className="text-gray-600 text-xl">{item.field}</p>
                        <p className="text-gray-600 text-xl">{item.published}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Home