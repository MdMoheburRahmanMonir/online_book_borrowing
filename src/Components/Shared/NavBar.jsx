'use client'
import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client"
import ProfileDetails from './ProfileDetails';
import SignupBtn from './SignupBtn';
import Image from 'next/image';
import { IoMdHome } from 'react-icons/io';
import { IoBookSharp } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { CoolMode } from '../ui/cool-mode';

const NavBar = () => {
    const { data: session } = authClient.useSession()
    const name = session?.user?.name;
    const image = session?.user?.image;


    return (
        <nav className="  backdrop-blur-[7px]    sticky top-0 z-50">
            <nav className=" w-11/12 mx-auto items-center grid grid-cols-3 justify-between py-1 shadow-md sticky ">
                <div className="dropdown   block   lg:hidden justify-self-start">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu backdrop-blur-[7px] menu-sm dropdown-content backdrop-blur-[7px] bg-white/[0.2]   rounded-box z-1 mt-3 w-52 p-2  ">
                        <Link href={'/home'}>
                            <li className="hover:text-blue-500/[1] w-full  hover:shadow hover:shadow-white/[0.2] px-2 py-1   transition-all duration-200  rounded-full text-white hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                Home
                            </li>
                        </Link>
                        <Link href={'/all_books'}>
                            <li className="hover:text-blue-500/[1] w-full hover:shadow hover:shadow-white/[0.2] px-2 py-1   transition-all duration-200  rounded-full  text-white  hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                All Books
                            </li>
                        </Link>
                        <Link href={'/my_profile'}>
                            <li className="hover:text-blue-500/[1] w-full hover:shadow hover:shadow-white/[0.2] px-2 py-1   transition-all duration-200  rounded-full   text-white hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                My Profile
                            </li>
                        </Link>
                    </ul>
                </div>

                <Link href={'/home'} className='justify-self-start'>
                    <div className="text-2xl flex justify-center items-center font-bold  text-blue-600/80 hover:text-blue-600 tracking-tight cursor-pointer">
                        <Image src={'/bookhub2.png'} height={50} width={50} alt='Logo' />
                        <div>
                            Book<span className="text-white/80 hover:text-white ">Hub</span>
                        </div>

                    </div>
                </Link>


                <div className="hidden justify-self-center items-center   lg:block w-auto     backdrop-blur-[2px] shadow shadow-white/[0.2] rounded-full   flex justify-center text-white   ">
                    <ul className="flex items-center gap-2 font-medium  text-white/[0.6]">
                        <CoolMode
                            options={{
                                particle: "https://i.ibb.co.com/rG3SDh6G/image.png",
                            }}
                        >
                            <Link href={'/home'} className='flex '>
                                <li className="hover:text-blue-400 flex items-center gap-1 justify-center  hover:shadow hover:shadow-white/[0.2] px-2 py-1   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                    <IoMdHome />
                                    <p>
                                        Home
                                    </p>
                                </li>
                            </Link>
                        </CoolMode>
                        <CoolMode
                            options={{
                                particle: "https://i.ibb.co.com/Dg5kD3WG/image.png",
                            }}
                        >
                            <Link href={'/all_books'} className='flex '>
                                <li className="hover:text-blue-400 flex items-center gap-1 justify-center hover:shadow hover:shadow-white/[0.2] px-2 py-1   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                    <IoBookSharp />
                                    <p>
                                        All Books
                                    </p>
                                </li>
                            </Link>
                        </CoolMode>
                        <CoolMode
                            options={{
                                particle: "https://i.ibb.co.com/1t09YbGX/image.png",
                            }}
                        >
                            <Link href={'/my_profile'} className='flex '>
                                <li className="hover:text-blue-400 flex items-center gap-1 justify-center hover:shadow hover:shadow-white/[0.2] px-2 py-1   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                    <CiUser />
                                    <p> 
                                        My Profile 
                                    </p> 
                                </li> 
                            </Link>
                        </CoolMode>
                    </ul>
                </div>

                <div className='justify-self-end'>
                    {
                        session ? <ProfileDetails image={image} name={name} /> : <SignupBtn />
                    }
                </div>
            </nav>
        </nav>
    );
};

export default NavBar; 