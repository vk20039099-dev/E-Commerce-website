import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Routing from '../Utiltis/Routing'
import Advertise from './UperTaglines/Advertise'
import logo from '../assets/image/logo.png'
import { Heart } from 'lucide-react'
import { CgSearch } from 'react-icons/cg'
import { MdAddShoppingCart } from 'react-icons/md'
import { TfiWorld } from 'react-icons/tfi'
import { CiUser } from 'react-icons/ci'


const Nav = () => {
    return (
        <>

            <div className="flex justify-between items-center gap-10 py-5 text-lg font-medium mb-10 ">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <NavLink className="flex gap-15  " >
                    <Link to="/" className='' >Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/collection">Collection</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/pages" >Pages
                        {/* <Link to="/pages/about">About</Link> */}
                    </Link>

                </NavLink>
                <div className="profile_side flex  gap-6 text-2xl text-gray-700">
                    <CgSearch />
                    <Heart />
                    <div className="dataofcart relative">
                        <MdAddShoppingCart />
                        <p className='bg-red-500 flex items-center justify-center  rounded-full size-4 text-sm text-white absolute -top-2 -right-2 '>2</p>
                    </div>
                    <TfiWorld />
                    <CiUser />

                </div>
            </div>

            <div className="rouing">
                <Routing />
            </div>

        </>
    )
}

export default Nav
