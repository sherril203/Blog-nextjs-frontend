"use client"
import { useState, useRef } from "react";
import { minecraft, finance, health, sports,miraculous ,yugioh} from '../assets/assets'
import Image from "next/image";
import Link from "next/link";
const Home = () => {
    
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
    const inputRef = useRef("");
     const post = [
  {
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
    path:"/posts/Coaching",
    published:"11 Oct 2021"
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
  {
    img: yugioh,
    title: "Yugioh anime has introduced various series",
    field: "anime",
    path: "/posts/yugioh",
    published: "10 Dec 2022"
  }
];

  const handleSearch = () => {
    const text = inputRef.current.value.toLowerCase();
    setSearchText(text);

    const results = post.filter(
      (item) =>
        item.title.toLowerCase().includes(text) ||
        item.field.toLowerCase().includes(text)
    );

    setFilteredPosts(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const postsToShow = searchText ? filteredPosts : post;
   
    return (
        <div>
            <h2 className='p-2 text-3xl font-bold'>Welcome to blog website</h2>
            <h2 className='p-2 text-2xl '>here you can see various field</h2>
           
        
           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-4 md:px-8 mt-6">
  
  <h2 className="text-3xl font-semibold">
    Latest Blog Posts
  </h2>

  {/* Search Bar */}
  <div className="flex w-full sm:w-auto gap-2">
    <input
    ref={inputRef}
            onKeyDown={handleKeyDown}
      type="text"
      placeholder="Search posts..."
      className="w-full sm:w-64 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button   onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
      Search
    </button>
  </div>
</div>
  
           <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 p-2 gap-4">
        {postsToShow.length > 0 ? (
          postsToShow.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded">
              <div className="relative w-full h-48">
                <Link href={item.path}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </Link>
              </div>

              <Link href={item.path} className="text-xl font-bold mt-2 block">
                {item.title}
              </Link>

              <p className="text-gray-600 text-lg">{item.field}</p>
              <p className="text-gray-600 text-lg">{item.published}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-xl col-span-3 text-gray-500">
            No posts found.
          </p>
        )}
      </div>


        </div>
    )
}

export default Home