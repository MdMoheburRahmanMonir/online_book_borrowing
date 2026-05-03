 
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const NotFoundPage = () => {
    
    return (
        <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center font-sans text-white p-4">

            <div className=' font-bold lg:flex grid grid-cols-1 relative items-center sm:items-center sm:justify-center sm:text-center gap-5'>
                <h1 className='pointer-none:  text-blue-400/30 z-10 text-[100px] lg:text-[200px] absolute top-[130px] lg:top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 '>SORRY</h1>
                <div className='z-20 text-white text-red-500 text-9xl flex'>
                    4O<span className='rotate-180'>4</span>

                </div>
                <h1 className="text-3xl">Page not found </h1>
                <Link href={'/'} className="z-50 backdrop-blur-[2px]  shadow shadow-white/[0.2] rounded-full h-fit w-fit    hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400 flex items-center gap-3 cursor-pointer  transition-all duration-200    hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">Go Home <BiArrowBack className="rotate-180"></BiArrowBack> </Link>
            </div>


        </div>
    );
};

export default NotFoundPage;