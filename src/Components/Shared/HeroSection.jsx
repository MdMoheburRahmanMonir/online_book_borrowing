import Link from 'next/link';
import React from 'react'; 
import 'animate.css';
import { TbArrowRampRight } from 'react-icons/tb';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative bg-white/5 overflow-hidden py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

                <div className="md:w-1/2 text-left z-10">
                    <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                        Explore Favourite Book
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Explore limitless <br />
                        stories with <span className="text-blue-500">ebooks</span> <br />
                        and <span className="text-blue-500">audiobooks.</span>
                    </h1>
                    <p className=" text-lg mb-8 max-w-lg leading-relaxed">
                        Unlock your next adventure anytime, anywhere. Dive into captivating stories
                        with ebooks. Let audiobooks bring words to life—hands-free. Your next
                        escape is just a click away.
                    </p>
                    <Link href='/all_books'>
                        <button className="  flex gap-2 items-center justify-center   px-8 py-3 backdrop-blur-[2px] shadow shadow-white/[0.2]     hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                            <div>Explore More Explore More </div>
                            <TbArrowRampRight />
                        </button>
                    </Link>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
                    <div className="relative z-10 w-full max-w-md">
                        <Image
                            src="/Book-lover-bro.png"
                            alt="Woman reading"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="absolute top-10 animate__bounceIn right-0 bg-white p-4 rounded-xl shadow-lg z-20">
                        <p className="text-xs text-gray-400 font-semibold uppercase">E-books</p>
                        <p className="text-xl font-bold text-gray-900">
                             
                           20+</p>
                    </div>
                    <div className="absolute animate__bounceIn bottom-20 left-0 bg-white p-4 rounded-xl shadow-lg z-20">
                        <p className="text-xs text-gray-400 font-semibold uppercase">Resource</p>
                        <p className="text-xl font-bold text-gray-900"> 
                            2000+</p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100 rounded-full opacity-50 blur-3xl -z-0" />
                </div>
            </div>

        </section>
    );
};

export default HeroSection;