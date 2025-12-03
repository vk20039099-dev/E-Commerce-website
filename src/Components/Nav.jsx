// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import Routing from '../Utiltis/Routing'
// import Advertise from './UperTaglines/Advertise'
// import logo from '../assets/image/logo.png'
// import { AlignJustifyIcon, Heart } from 'lucide-react'
// import { CgSearch } from 'react-icons/cg'
// import { MdAddShoppingCart } from 'react-icons/md'
// import { TfiWorld } from 'react-icons/tfi'
// import { CiUser } from 'react-icons/ci'
// import { FaShopify, FaTimes } from 'react-icons/fa'
// import { FaBars } from 'react-icons/fa6'


// const Nav = () => {

//     const [open, setOpen] = useState(false)

//     return (
//         <>

//             <div className="flex justify-between items-center gap-10 py-5 text-lg font-medium mb-10 ">
//                 <div className="logo">
//                     <img src={logo} alt="" />
//                 </div>
//                 <NavLink className="lg:flex gap-15 hidden " >
//                     <Link to="/" className='' >Home</Link>
//                     <Link to="/shop">Shop</Link>
//                     <Link to="/collection">Collection</Link>
//                     <Link to="/blog">Blog</Link>
//                     <Link to="/pages" >Pages
//                         {/* <Link to="/pages/about">About</Link> */}
//                     </Link>

//                 </NavLink>

//                 <div className="profile_side lg:flex  gap-6 text-2xl text-gray-700 hidden items-center ">
//                     <CgSearch />
//                     <Heart />
//                     <div className="dataofcart relative">
//                         <MdAddShoppingCart />
//                         <p className='bg-red-500 flex items-center justify-center  rounded-full size-4 text-sm text-white absolute -top-2 -right-2 '>2</p>
//                     </div>
//                     <TfiWorld />
//                     <CiUser />

//                 </div>

//                 {/* lg: toggole hidden */}
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className={`text-2xl text-blue-800  ${open ? "hidden " : "block"}`}
//                 >
//                     {open ? <FaTimes /> : <FaBars />}
//                     {console.log(open)}
//                 </button>
//                 <div className={`mobile_toggle_button ${open ? "block " : "hidden"} gap-6 text-2xl relative   `}>
//                     <div
//                         className={`fixed top-0 right-0 max-h-screen w-60 bg-white shadow-lg transform transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
//                     >
//                         <div className="flex flex-col p-6 gap-5 text-lg font-semibold text-blue-900">
//                             <button onClick={() => setOpen(!open)} className=" text-2xl">
//                                 <FaTimes />
//                             </button>

//                             <a href="#" className="hover:text-pink-500">Home</a>
//                             <a href="#" className="hover:text-pink-500">Shop</a>
//                             <a href="#" className="hover:text-pink-500">Collection</a>
//                             <a href="#" className="hover:text-pink-500">Blog</a>
//                             <a href="#" className="hover:text-pink-500">Contact</a>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//             <div className="rouing">
//                 <Routing />
//             </div>

//         </>
//     )
// }

// export default Nav

import React, { useState } from 'react'
import logo from '../assets/image/Logo.png'
import Routing from '../Utiltis/Routing'
import { Link, NavLink } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { CgSearch } from 'react-icons/cg'
import { MdAddShoppingCart } from 'react-icons/md'
import { TfiWorld } from 'react-icons/tfi'
import { CiUser } from 'react-icons/ci'
import { FaTimes, FaBars } from 'react-icons/fa'

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex justify-between items-center gap-4 lg:gap-10 py-4 lg:py-5 text-base lg:text-lg font-medium mb-6 lg:mb-10">
                {/* Logo */}
                <div className="logo shrink-0">
                    <img src={logo} alt="Logo" className="h-8 lg:h-10 w-auto" />
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="hidden lg:flex gap-6 xl:gap-10">
                    <Link to="/" className='text-red-500 hover:text-red-600 transition-colors'>Home</Link>
                    <Link to="/shop" className='text-gray-700 hover:text-red-500 transition-colors'>Shop</Link>
                    <Link to="/collection" className='text-gray-700 hover:text-red-500 transition-colors'>Collection</Link>
                    <Link to="/blog" className='text-gray-700 hover:text-red-500 transition-colors'>Blog</Link>
                    <Link to="/pages" className='text-gray-700 hover:text-red-500 transition-colors'>Pages</Link>
                </nav>

                {/* Desktop Icons - Hidden on mobile */}
                <div className="profile_side hidden lg:flex gap-4 xl:gap-6 text-xl lg:text-2xl text-gray-700 items-center">
                    <button className='hover:text-red-500 transition-colors' aria-label="Search" >
                        <CgSearch />
                    </button>
                    <button className='hover:text-red-500 transition-colors' aria-label="Wishlist" >
                        <Heart />
                    </button>
                    <button className="relative hover:text-red-500 transition-colors" aria-label="Cart" >
                        <MdAddShoppingCart />
                        <span className='bg-red-500 flex items-center justify-center rounded-full w-4 h-4 lg:w-5 lg:h-5 text-xs text-white absolute -top-2 -right-2'>
                            2
                        </span>
                    </button>
                    <button className='hover:text-red-500 transition-colors' aria-label="Language">
                        <TfiWorld />
                    </button>
                    <button className='hover:text-red-500 transition-colors' aria-label="Profile">
                        <CiUser />
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className={`text-2xl text-[#0E1F51]  z-50 ${!open ? "lg:hidden" : "block "}`}
                    aria-label="Toggle menu"
                >
                    <FaBars />
                </button>
                {/* Mobile Sidebar Menu */}
                <div className={`lg:hidden ${open ? "block" : "hidden"}`}>
                    {/* Overlay */}
                  
                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${open ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex flex-col h-full">
                            {/* Close Button */}
                            <div className="flex justify-end p-6 border-b-2">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="text-2xl text-[#0E1F51] hover:text-red-500 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col p-6 gap-4 text-lg font-semibold">
                                <Link
                                    to="/"
                                    className="text-[#0E1F51] hover:text-red-500 py-2 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/shop"
                                    className="text-[#0E1F51] hover:text-red-500 py-2 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Shop
                                </Link>
                                <Link
                                    to="/collection"
                                    className="text-[#0E1F51] hover:text-red-500 py-2 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Collection
                                </Link>
                                <Link
                                    to="/blog"
                                    className="text-[#0E1F51] hover:text-red-500 py-2 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Blog
                                </Link>
                                <Link
                                    to="/pages"
                                    className="text-[#0E1F51] hover:text-red-500 py-2 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Pages
                                </Link>
                            </div>

                            {/* Mobile Icons */}
                            <div className="flex justify-around items-center px-6 py-4 border-t mt-auto">
                                <button className='text-2xl text-gray-700 hover:text-red-500 transition-colors' aria-label="Search">
                                    <CgSearch />
                                </button>
                                <button className='text-2xl text-gray-700 hover:text-red-500 transition-colors' aria-label="Wishlist">
                                    <Heart />
                                </button>
                                <button className="relative text-2xl text-gray-700 hover:text-red-500 transition-colors" aria-label="Cart">
                                    <MdAddShoppingCart />
                                    <span className='bg-red-500 flex items-center justify-center rounded-full w-4 h-4 text-xs text-white absolute -top-2 -right-2'>
                                        2
                                    </span>
                                </button>
                                <button className='text-2xl text-gray-700 hover:text-red-500 transition-colors' aria-label="Profile">
                                    <CiUser />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Routing */}
            <div className="routing">
                <Routing />
            </div>
        </>
    )
}

export default Nav
