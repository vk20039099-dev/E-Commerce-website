import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Routing from '../Utiltis/Routing'
import Advertise from './UperTaglines/Advertise'
import logo from '../assets/image/logo.png'
import { AlignJustifyIcon, Heart } from 'lucide-react'
import { CgSearch } from 'react-icons/cg'
import { MdAddShoppingCart } from 'react-icons/md'
import { TfiWorld } from 'react-icons/tfi'
import { CiUser } from 'react-icons/ci'
import { FaShopify, FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'


const Nav = () => {

    const [open, setOpen] = useState(false)

    return (
        <>

            <div className="flex justify-between items-center gap-10 py-5 text-lg font-medium mb-10 ">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <NavLink className="lg:flex gap-15 hidden " >
                    <Link to="/" className='' >Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/collection">Collection</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/pages" >Pages
                        {/* <Link to="/pages/about">About</Link> */}
                    </Link>

                </NavLink>

                <div className="profile_side lg:flex  gap-6 text-2xl text-gray-700 hidden items-center ">
                    <CgSearch />
                    <Heart />
                    <div className="dataofcart relative">
                        <MdAddShoppingCart />
                        <p className='bg-red-500 flex items-center justify-center  rounded-full size-4 text-sm text-white absolute -top-2 -right-2 '>2</p>
                    </div>
                    <TfiWorld />
                    <CiUser />

                </div>

                {/* lg: toggole hidden */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-2xl text-blue-900 lg:hidden block "
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
                <div className=" mobile_toggle_button  gap-6 text-2xl relative   ">
                    <div
                        className={`fixed top-0 right-0 max-h-screen w-60 bg-white shadow-lg transform transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <div className="flex flex-col p-6 gap-5 text-lg font-semibold text-blue-900">
                            <button onClick={() => setOpen(!open)} className="text-right text-2xl">
                                <FaTimes />
                            </button>

                            <a href="#" className="hover:text-pink-500">Home</a>
                            <a href="#" className="hover:text-pink-500">Shop</a>
                            <a href="#" className="hover:text-pink-500">Collection</a>
                            <a href="#" className="hover:text-pink-500">Blog</a>
                            <a href="#" className="hover:text-pink-500">Contact</a>
                        </div>

                    </div>

                </div>

            </div>

            <div className="rouing">
                <Routing />
            </div>

        </>
    )
}

export default Nav
