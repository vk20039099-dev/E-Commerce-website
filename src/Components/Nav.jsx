import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CgSearch } from 'react-icons/cg'
import { MdAddShoppingCart } from 'react-icons/md'
import { TfiWorld } from 'react-icons/tfi'
import { CiUser } from 'react-icons/ci'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import Routing from '../Utiltis/Routing'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2l1.9 4.85L19 8l-3 2.2L16 15l-4-2.2L8 15l.99-4.8L6 8l5.1-.95L12 2z"
          fill="#ff3b6b"
        />
      </svg>
      <span className="font-semibold text-slate-800 text-lg">Fesona</span>
    </div>
  )
}

const Nav = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/collection', label: 'Collection' },
    { to: '/blog', label: 'Blog' },
    { to: '/pages', label: 'Pages' },
  ]

  return (
    <>
      {/* MAIN NAVBAR */}
      <header className="w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* LEFT: LOGO */}
          <Link to="/" aria-label="Fesona logo">
            <Logo />
          </Link>

          {/* CENTER: LINKS (DESKTOP) */}
          <nav className="hidden lg:flex gap-8 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive ? 'text-pink-500 font-semibold' : 'text-slate-800 hover:text-pink-500'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: ICONS */}
          <div className="hidden lg:flex items-center gap-6 text-2xl text-gray-700">
            <CgSearch className="cursor-pointer hover:text-pink-500" />
            <AiOutlineHeart className="cursor-pointer hover:text-pink-500" />
            <div className="relative cursor-pointer">
              <MdAddShoppingCart />
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-[10px] rounded-full bg-red-500 text-white">
                2
              </span>
            </div>
            <TfiWorld className="cursor-pointer" />
            <CiUser className="cursor-pointer" />
          </div>

          {/* TOGGLE BUTTON (MOBILE) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-gray-700"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* SLIDER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* HEADER INSIDE SLIDER */}
        <div className="flex items-center justify-between p-5 border-b">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* NAV LINKS INSIDE SLIDER */}
        <nav className="flex flex-col gap-5 p-6 text-lg font-medium text-slate-800">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? 'text-pink-500 font-semibold' : 'hover:text-pink-500'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* BOTTOM ICONS */}
        <div className="mt-auto p-6 border-t flex items-center justify-around text-2xl text-gray-700">
          <CgSearch className="cursor-pointer hover:text-pink-500" />
          <AiOutlineHeart className="cursor-pointer hover:text-pink-500" />
          <div className="relative cursor-pointer">
            <MdAddShoppingCart />
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-[10px] rounded-full bg-red-500 text-white">
              2
            </span>
          </div>
          <TfiWorld className="cursor-pointer" />
          <CiUser className="cursor-pointer" />
        </div>
      </div>
      <div><Routing/></div>
    </>
  )
}

export default Nav
