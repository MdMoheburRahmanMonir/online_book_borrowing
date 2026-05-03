'use client'
import 'animate.css';
import React, { useState } from 'react';
import { useContext } from "react";
import { NameContext } from '@/Context/ContextProvider';
import Link from 'next/link';
import { InputGroup } from '@heroui/react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { toast } from 'react-toastify';

const All_Books = () => {
    const [data, setData] = useState([])
    const value = useContext(NameContext)
    const [inputData, setInputData] = useState('');

    const filterData = inputData.toLowerCase() === 'story' ||
        inputData.toLowerCase() === 'tech' ||
        inputData.toLowerCase() === 'science' ? value.filter(item => item.category.toLowerCase().includes(inputData.toLowerCase()))
        : value.filter(item => item.title.toLowerCase().includes(inputData.toLowerCase()));


    return (
        <div>
            <div className=' mx-auto w-11/12 py-15  '>
                <div className='text-3xl grid grid-cols-3  pb-10 font-bold text-white [text-shadow:_2px_2px_4px_#000]'>
                    <div className='animate__backInUp text-blue-500/70 justify-self-start'>
                        All books
                    </div>
                    <ul className="hidden text-lg bg-white/6 rounded-full justify-self-center md:flex items-center  gap-2 text-lg font-medium  text-white/[0.6]">
                        <li onClick={(e) => setInputData(e.target.innerText)} className="hover:text-blue-400 flex bg-white/2 border-white/30 px-4 items-center cursor-pointer gap-1 justify-center  hover:shadow hover:shadow-white/[0.2] transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                            Story
                        </li>
                        <li onClick={(e) => setInputData(e.target.innerText)} className="hover:text-blue-400 flex items-center bg-white/2 border-white/30 px-4 cursor-pointer gap-1 justify-center hover:shadow hover:shadow-white/[0.2] transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                            Tech
                        </li>
                        <li onClick={(e) => setInputData(e.target.innerText)} className="hover:text-blue-400 flex items-center bg-white/2 border-white/30 px-4 cursor-pointer gap-1 justify-center hover:shadow hover:shadow-white/[0.2] transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                            Science
                        </li>
                    </ul>
                    <InputGroup className='bg-white/10 max-w-xl rounded-full justify-self-end'>
                        <FaSearch className='pl-3 text-2xl text-white'/>
                        <InputGroup.Input onChange={(e) => setInputData(e.target.value)} aria-label="Email Address, enter your email" className="w-full max-w-[280px]" placeholder="What's on your mind" />
                    </InputGroup>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {filterData.map((book, ind) => (
                        <div key={ind}
                            className="p-6  space-y-5 shadow overflow-hidden shadow-[inset_0_2px_10px_rgba(3,3,3,0.8)] hover:shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20 rounded-2xl hover:shadow hover:shadow-white/50 transition-transform duration-500 ease-in-out hover:scale-105"
                        >
                            <div className='w-full overflow-hidden rounded-2xl'>
                                <Image
                                    src={book.image_url}
                                    alt={book.title}
                                    
                                    className="w-64 h-92 mx-auto hover:scale-105 rounded-r-lg  border-l-[6px] border-l-black/20 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105 "
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">
                                {book.title}
                            </h3>
                            <p className=" ">
                                Author: {book.author}
                            </p>
                            <Link href={`/category/${book.id}`} className='w-full animate__bounceIn'>
                                <button  onClick={() => toast('😀 View Details Selected')} className="backdrop-blur-[2px] shadow w-full p-4 shadow-white/[0.2]     hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default All_Books;