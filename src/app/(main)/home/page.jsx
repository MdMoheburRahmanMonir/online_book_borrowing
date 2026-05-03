
import HeroSection from '@/Components/Shared/HeroSection';
import MembershipPlans from '@/Components/Shared/MembershipPlans';
import WhyChossUs from '@/Components/Shared/WhyChossUs';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import Marquee from "react-fast-marquee";



const HomePage = () => {

    const GetData = async () => {
        const data = await fetch(process.env.FETCH_URL)
        const res = await data.json();

        return res;
    }

    const data = use(GetData())
    console.log(data);

    return (
        <div>
            <HeroSection></HeroSection>
            <div className='g-white/10 w-full py-10'>
                <div className="pt-10 py-4 shadow-md w-11/12 mx-auto px-4 rounded-full">
                    <div className='text-center text-5xl pb-10 font-bold'>What are the latest discounts on all books? </div>
                    <Marquee speed={100} gradient={true} gradientColor={[243, 244, 246]} pauseOnHover='true' autoFill='true' gradientColor='black' className=' rounded-full shadow shadow-white/20'>
                        {data.map((book, ind) => (
                            <div
                                key={ind}
                                className="mx-8 p-3 flex cursor-pointer items-center gap-2 text-lg font-medium bg-white/5 p-2  rounded-full"
                            >
                                <Link href={'/all_books'} className='flex gap-2'>
                                    <span className="text-white/60 font-bold">
                                        {book.author}
                                    </span>

                                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                                        {book.discount}% OFF
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div className=' mx-auto w-11/12 pt-5 pb-10 '>
                <div className='text-5xl text-center pb-10 font-bold text-white [text-shadow:_2px_2px_4px_#000]'>
                    Weekly Highlights
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {data.slice(0, 4).map((book, ind) => (
                        <div
                            key={ind}
                            className="p-6 shadow overflow-hidden shadow-[inset_0_2px_10px_rgba(3,3,3,0.8)] hover:shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20 rounded-2xl hover:shadow hover:shadow-white/50 transition-transform duration-500 ease-in-out hover:scale-105"
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

                            <p className="text-gray-600">
                                Author: {book.author}
                            </p>

                            <Link href={'/all_books'} className='w-full'>
                                <button className="backdrop-blur-[2px] shadow w-full p-4 shadow-white/[0.2]     hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <WhyChossUs ></WhyChossUs>
            <MembershipPlans />
        </div>

    );
};

export default HomePage;