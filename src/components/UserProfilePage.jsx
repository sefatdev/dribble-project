import React from "react";

const UserProfilePage = () => {

     const categories = [
            "Following",
            "Discover",
            "Animation",
            "Branding",
            "Illustration",
            "Mobile",
            "Print",
            "Product Design",
            "Typography",
            "Web Design",
            ];
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
                <div className="flex items-center space-x-10">
                    <h1 className="text-2xl font-extrabold font-serif text-purple-600">Dribble</h1>
                    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <li className="hover:text-purple-600 cursor-pointer">Inspiration</li>
                        <li className="hover:text-purple-600 cursor-pointer">Find Work</li>
                        <li className="hover:text-purple-600 cursor-pointer">Learn Design</li>
                        <li className="hover:text-purple-600 cursor-pointer">Go Pro</li>
                        <li className="hover:text-purple-600 cursor-pointer">Hire Designers</li>
                    </ul>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="text-purple-600 hover:underline font-medium">
                        Apply Now
                    </a>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                    </div>

                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                        Upload ⬆️
                    </button>

                    <img
                        src="/public/image/boy1.jpeg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </nav>
            <hr />

            {/* Top Navigation */}
            <div className="bg-white px-8 py-6">
                <div className="flex items-center justify-between mb-8">
                <div className="flex flex-wrap gap-6 text-gray-600 font-medium">
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            className={`hover:text-black ${item === "Discover" ? "font-semibold text-black" : ""
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button className="px-4 py-1 border rounded-full text-sm hover:bg-gray-100">
                    Filters
                </button>
            </div>
            </div>

            {/* Profile Section */}
            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-8">
                {/* Left Info */}
                <div className="flex flex-col items-start space-y-4 max-w-lg">
                    <img
                        src="/public/image/boy1.jpeg"
                        alt="User"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <h2 className="text-2xl font-semibold">Rebeca Chenford</h2>
                    <h1 className="text-4xl font-extrabold leading-snug">
                        I’m <span className="text-purple-600">UX/UI Designer</span> <br /> at
                        Microtech 👋
                    </h1>

                    {/* <div className="flex items-center space-x-2 pt-2">
                        <span className="text-gray-500 uppercase text-sm">On Teams</span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Microsoft_Office_Teams_2019-present.svg"
                            alt="Teams Logo"
                            className="w-6 h-6"
                        />
                    </div> */}

                    <div className="flex items-center space-x-3 pt-6">
                        <button className="bg-gray-100 text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200">
                            Follow
                        </button>
                        <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700 flex items-center space-x-2">
                            {/* <span>💼</span> */}
                            <span>Hire Me</span>
                        </button>
                        {/* <button className="bg-gray-100 text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200">
                            —
                        </button> */}
                    </div>
                </div>

                {/* Right Dashboard Preview */}
                <div className="mt-10 md:mt-0 w-80">
                    <img
                        src="/public/image/boy1.jpeg"
                        alt="Dashboard Preview"
                        className="rounded-2xl shadow-lg w-[500px] border"

                    />
                </div>
            </section>
        </div>
    );
};

export default UserProfilePage;
