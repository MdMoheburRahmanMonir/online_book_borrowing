'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const LogoutBtn = () => {
    const router = useRouter();
    return (
        <div>
            <Link href={'/login'} onClick={async () => {
                toast('hay you logout')
                await authClient.signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            router.push("/login");
                        },
                    },
                })
            }}>
                <button className="backdrop-blur-[2px] shadow shadow-white/[0.2]     hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                    Logout
                </button>
            </Link>
        </div>
    );
};

export default LogoutBtn;