import Link from 'next/link'; 
import React from 'react';

const SignupBtn = ({path}) => {  
    
    return (
        <div className='flex gap-3  '>
            <Link href={'/login'} >
                <button className={`${path == '/login' && 'text-blue-400'} backdrop-blur-[2px] shadow shadow-white/[0.2]     hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10`}>
                    Login
                </button>
            </Link>
            <Link href={'/registration'} className='hidden lg:block'>
                <button className={`${path == '/registration' ? 'text-blue-400 ' : 'text-white'} backdrop-blur-[2px] shadow shadow-white/[0.2]     hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10`}>
                    Sign Up
                </button>
            </Link>
        </div>
    );
};

export default SignupBtn;