'use client'
import { ModalPage } from '@/Components/Shared/ModalPage';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { authClient } from "@/lib/auth-client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import 'animate.css';
import { CoolMode } from '@/Components/ui/cool-mode';



const MyProfilePage = () => {

    const { data: session } = authClient.useSession()
    console.log(session?.user?.image);

    return (
        <div className='relative flex flex-col gap-4 text-center w-11/12 mx-auto shadow w-96 mt-5 py-15 rounded-2xl space-y-1 shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20'>
            <div className='absolute top-5 right-5 animate__backInUp'>
                <CoolMode
                    options={{
                        particle: "https://i.ibb.co.com/1t09YbGX/image.png",
                    }}
                >
                    <ModalPage > </ModalPage>
                </CoolMode>
            </div>
            <div>
                <img src={`${session?.user?.image ? session?.user?.image : '/bookhub.png'}`} width={150} height={150} alt='User image' className=' mx-auto  justify-center rounded-2xl ' />
            </div>
            <div className='text-2xl'>{session?.user?.name ? session?.user?.name : 'Avatar Name'}</div>
            <div>
                Email: {session?.user?.email ? session?.user?.email : 'something@gmail.com'}
            </div>
            <div>
                <CoolMode
                    options={{
                        particle: "https://i.ibb.co.com/1t09YbGX/image.png",
                    }}
                >
                    <Link href={'/my_profile/update'}>
                        <Button variant="secondary" className={`flex justify-center items-center text-center gap-2 gap-3 mx-auto py-1 px-4 hover:bg-white/5 hover:text-blue-400/70  hover:shadow hover:shadow-white/[0.2] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  backdrop-blur-[2px] shadow shadow-white/[0.2] rounded-full   text-white  `}>
                            <BiEdit />
                            <div>Edit Profile</div>
                        </Button>
                    </Link>
                </CoolMode>
            </div>
        </div>
    );
};

export default MyProfilePage;