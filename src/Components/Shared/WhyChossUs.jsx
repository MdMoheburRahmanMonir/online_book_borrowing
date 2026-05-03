import { GiBookshelf } from "react-icons/gi";

const WhyChossUs = () => {
    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <p className="text-blue-400 uppercase tracking-[5px] text-sm">
                        Why Choose Us
                    </p>

                    <div className="text-5xl flex text-center justify-center font-extrabold mt-4">
                        <GiBookshelf />
                        <h3>
                            Online Borrowing Made Simple
                        </h3>
                    </div>

                    <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                        A modern digital library experience designed for passionate readers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group  hover:scale-105 duration-75  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative border hover:shadow hover:shadow-white/30 border-white/10 bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition duration-500">
                        <h1 className="text-7xl font-black text-white/10 group-hover:text-white/20 transition duration-500">
                            01
                        </h1>
                        <div className="mt-6">
                            <h3 className="text-3xl font-bold">
                                Easy Borrowing
                            </h3>
                            <p className="text-gray-300 mt-4 leading-relaxed">
                                Borrow your favorite books instantly without any paperwork or hassle.
                            </p>
                        </div>
                        <div className="w-0 group-hover:w-full h-1 bg-white mt-6 transition-all duration-500"></div>
                    </div>
                    <div className="group  hover:scale-105 duration-75  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative border hover:shadow hover:shadow-white/30 border-white/10 bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition duration-500">
                        <h1 className="text-7xl font-black text-white/10 group-hover:text-white/20 transition duration-500">
                            02
                        </h1>
                        <div className="mt-6">
                            <h3 className="text-3xl font-bold">
                                Huge Collection
                            </h3>
                            <p className="text-gray-300 mt-4 leading-relaxed">
                                Explore thousands of books from fiction, self-help, programming, and more.
                            </p>
                        </div>
                        <div className="w-0 group-hover:w-full h-1 bg-white mt-6 transition-all duration-500"></div>
                    </div>
                    <div className="group  hover:scale-105 duration-75  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative border hover:shadow hover:shadow-white/30 border-white/10 bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition duration-500">
                        <h1 className="text-7xl font-black text-white/10 group-hover:text-white/20 transition duration-500">
                            03
                        </h1>
                        <div className="mt-6">
                            <h3 className="text-3xl font-bold">
                                Fast Return System
                            </h3>
                            <p className="text-gray-300 mt-4 leading-relaxed">
                                Manage return dates easily with smart reminders and notifications.
                            </p>
                        </div>
                        <div className="w-0 group-hover:w-full h-1 bg-white mt-6 transition-all duration-500"></div>
                    </div>
                    <div className="group  hover:scale-105 duration-75  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative border hover:shadow hover:shadow-white/30 border-white/10 bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition duration-500">
                        <h1 className="text-7xl font-black text-white/10 group-hover:text-white/20 transition duration-500">
                            01
                        </h1>
                        <div className="mt-6">
                            <h3 className="text-3xl font-bold">
                                Available Anytime
                            </h3>
                            <p className="text-gray-300 mt-4 leading-relaxed">
                                Access and borrow books online 24/7 from anywhere in the world.
                            </p>
                        </div>
                        <div className="w-0 group-hover:w-full h-1 bg-white mt-6 transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChossUs;