'use client'
import { NameContext } from '@/Context/ContextProvider';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react';
import { authClient } from "@/lib/auth-client"
import { toast } from 'react-toastify';
import Image from 'next/image';

const SingleData = () => {
    const { id } = useParams()
    const data = useContext(NameContext)
    const mainData = data.filter(item => item.id == id);
    console.log(mainData);

    const { title, author, description, category, available_quantity, discount, image_url } = mainData[0];

    const { data: session } = authClient.useSession()
    const toastFunctionality = (value) => {
        if (session?.user) {
            if (value == 'Add Wishlist') {
                toast("😀 WoW book successfully added!")
            } else if (value == 'Borrow Book') {
                toast("😀 WoW you successfully get this book")
            }
        } else {
            toast('😫 Sorry You have to Login first!')
        }
    }

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-md rounded-3xl p-6 lg:p-10 shadow-lg shadow-black/20 border border-white/10">
                <div className="flex justify-center">
                    <img
                        src={image_url}
                        alt={title}
                        className="w-[320px] md:w-[420px] h-auto object-cover rounded-3xl border-l-[10px] border-black/20 shadow-[15px_15px_30px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-500"
                    />
                </div>
                <div className="space-y-6 text-white">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/20 text-sm tracking-wide">
                        {category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-white/70">
                        By <span className="text-white font-semibold">{author}</span>
                    </p>
                    <p className="text-white/70 leading-8 text-lg">
                        {description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <div className="px-5 py-3 rounded-2xl bg-green-500/10 border border-green-400/20">
                            <p className="text-sm text-green-300">
                                Available Quantity
                            </p>
                            <h3 className="text-2xl font-bold text-white">
                                {available_quantity} copies left
                            </h3>
                        </div>
                        <div className="px-5 py-3 rounded-2xl bg-pink-500/10 border border-pink-400/20">
                            <p className="text-sm text-pink-300">
                                Discount
                            </p>

                            <h3 className="text-2xl font-bold text-white">
                                {discount}%
                            </h3>
                        </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button onClick={() => toastFunctionality('Borrow Book')} className="hover:scale-105 px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-semibold shadow-lg">
                            Borrow Book
                        </button>
                        <button onClick={() =>toastFunctionality('Add Wishlist')} className="hover:scale-105 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300">
                            Add Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;