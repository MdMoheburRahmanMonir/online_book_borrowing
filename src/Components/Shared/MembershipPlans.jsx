'use client'
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MembershipPlans = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$3',
            duration: 'Weekly',
            features: [
                '2 Books per month',
                '14 Days borrowing period',
                'Standard delivery',
                'Access to 100+ E-books',
            ],
            buttonText: 'Get Started',
            isPopular: false,
        },
        {
            name: 'Pro Reader',
            price: '$12',
            duration: 'Month',
            features: [
                '5 Books per month',
                '21 Days borrowing period',
                'Free doorstep delivery',
                'Unlimited E-book access',
                'Priority customer support',
            ],
            buttonText: 'Go Pro',
            isPopular: true,
        },
        {
            name: 'Bibliophile',
            price: '$25',
            duration: 'Yearly',
            features: [
                '10 Books per month',
                '30 Days borrowing period',
                'Instant home delivery',
                'Pre-access to new arrivals',
                'Exclusive Book Club membership',
            ],
            buttonText: 'Join Elite',
            isPopular: false,
        },
    ];

    return (
        <section className="bg-black text-white py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold  mb-4">
                    Choose Your Reading Plan
                </h2>
                <p className="text-lg   mb-16 max-w-2xl mx-auto leading-relaxed">
                    Unlock a world of stories. Whether you are a casual reader or a true bookworm, we have the perfect membership for you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white/10 hover:shadow-[0_8px_20px_0_rgba(31,38,135,0.10)] p-10 rounded-[40px] transition-all duration-500 hover:-translate-y-3 hover:shadow hover:shadow-white/35 flex flex-col border-2 ${plan.isPopular
                                ? 'border-indigo-600/70 shadow-2xl scale-105 z-10'
                                : 'border-transparent shadow-lg'
                                }`}
                        >
                            {plan.isPopular && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/70 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-md">
                                    Most Popular
                                </span>
                            )}

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold   mb-4">{plan.name}</h3>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-5xl font-black   tracking-tight">{plan.price}</span>
                                    <span className="text-slate-400 font-medium ml-1 text-lg">/{plan.duration}</span>
                                </div>
                            </div>

                            <ul className="text-left space-y-5 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start   leading-tight">
                                        <FaCheckCircle className="text-emerald-500 mt-1 mr-4 flex-shrink-0 text-xl" />
                                        <span className="text-[1.05rem] font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button onClick={()=> toast(`Wow 🤩 you selected ${plan.duration} plan`)}
                                className={`w-full py-5 text-black rounded-2xl font-bold text-lg transition-all duration-300 transform active:scale-95 ${plan.isPopular
                                    ? 'bg-indigo-600/70   hover:bg-indigo-700 shadow-lg  '
                                    : 'bg-slate-100   hover:bg-slate-200'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembershipPlans;
