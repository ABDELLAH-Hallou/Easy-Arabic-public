import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import React, { useState } from 'react'

export const Navbar = () => {
    const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav

    
    const navLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "weather",
            link: "/weather"
        },
        // {
        //     title: "Matchs planning",
        //     link: "/planning"
        // },
        {
            title: "Groups",
            link: "/groups"
        },
        {
            title: "Standing",
            link: "/standing"
        },
        {
            title: "Stadiums",
            link: "/stadiums"
        },
        {
            title: "Map",
            link: "/map"
        },
        {
            title: "Discover",
            link: "/discover"
        },
    ];
    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="flex flex-wrap sys-app-notCollapsed ">
                <div className="w-full ">
                    <div className="pb-0 py-2 px-2 mx-auto ">
                        <div className="w-full flex justify-between items-center p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">
                            {/* Logo */}
                            <div>
                                <span className="px-2 mr-2 md:border-r border-gray-800">
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo"
                                        className="w-8 h-8 -mt-1 inline mx-auto"
                                    />
                                    {/* Easy Arabic By Qatar 2022 */}
                                </span>
                            </div>
                            <div className="px-2 md:flex gap-x-5 items-center flex-1 text-gray-900 bg-white font-medium capitalize hidden">

                                {navLinks.map(({ title, link }) => (
                                    <Link key={title} className="px-2 py-1 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded text-gray-700 font-semibold"
                                        to={link}>
                                        <span className="mx-1">{title}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* After all nav links if you want any button in right then it will come here */}
                            <div></div>

                            {/* Hamberger Menu  */}
                            <div className="md:hidden transition-all mr-3 my-3 cursor-pointer hover:text-gray-700">
                                {isMobileNavOpen ? (
                                    <AiOutlineMenuFold
                                        onClick={() => setisMobileNavOpen(false)}
                                        className="rounded text-2xl"
                                    />
                                ) : (
                                    <AiOutlineMenuUnfold
                                        onClick={() => setisMobileNavOpen(true)}
                                        className="rounded text-2xl"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navbar */}
                    <div
                        id="navbar"
                        className={`pt-0 absolute top-2 z-100 mx-auto ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-all flex-wrap md:hidden`}
                    >
                        <div className="py-[.5px] w-64">
                            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-white rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
                                {/* Logo */}
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    className="w-8 h-8 mx-auto mb-5 "
                                />

                                {/* Links */}
                                {navLinks?.map(({ title, link }) => (
                                    <Link key={title} className="px-2 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded text-gray-700 font-semibold"
                                        to={link}>
                                        <span className="mx-1">{title}</span>
                                    </Link>
                                ))}

                                {/* After all nav links if you want any button or link then it will come here */}
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}