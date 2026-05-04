import Image from 'next/image';
import React from 'react';
import LogoutBtn from './LogoutBtn';

const ProfileDetails = ({name, image}) => {
    return (
        <div className='flex justify-center items-center gap-3'>
            <h1 className='hidden md:block lg:block'>{name}</h1>
            <Image className='hidden md:block lg:block rounded-full h-10 w-10' referrerPolicy="no-referrer"  src={image} alt={name}  />
            <LogoutBtn></LogoutBtn>
        </div>
    );
};

export default ProfileDetails;