'use client'
import React from 'react';

const loading = () => {
    return (
        <div className="w-11/12 mx-auto pt-10 pb-20">
            <div className="flex justify-center mb-14">
                <div className="relative overflow-hidden h-12 w-72 rounded-xl bg-white/10">
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className=" p-6 shadow   shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20 rounded-2xl   transition-transform duration-500 ease-in-out"
                    >

                        <div className="relative shadow   shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20 overflow-hidden w-64 h-96 mx-auto rounded-2xl bg-white/10">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>

                        <div className="shadow   shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20 relative overflow-hidden mt-6 h-7 w-3/4 rounded-lg bg-white/10">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>

                        <div className="shadow   shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20 relative overflow-hidden mt-4 h-5 w-1/2 rounded-lg bg-white/10">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>

                        <div className="shadow   shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/20 relative overflow-hidden mt-8 h-12 w-full rounded-full bg-white/10">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>

                    </div>
                ))}

            </div>
             
        </div>
    );
};

export default loading;