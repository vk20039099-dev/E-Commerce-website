import React from 'react'
import { BiLike } from 'react-icons/bi'
import { BsFire } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'
import { IoPlayOutline } from 'react-icons/io5'
import girlphoto from '../../assets/image/girl1.png'
import manphoto from '../../assets/image/home-banner-2neno.png'

function Banner_left() {
    return (
        <div className="content-left w-full lg:w-[55%] order-2 lg:order-1 px-4 lg:px-0">
            {/* Title Section */}
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                {/* Collection Badge */}
                <h4 className='flex items-center gap-1 text-sm sm:text-base lg:text-xl font-medium text-red-500'>
                    2025 Style collection <BsFire />
                </h4>
                
                {/* Main Title */}
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#0E1F51] leading-tight lg:leading-tight'>
                    Discover The Best Fashion Style For You
                </h1>
                
                {/* Subtitle - Hidden on mobile, visible from sm */}
                <p className='hidden sm:block text-sm lg:text-base xl:text-lg text-gray-600 opacity-70 leading-relaxed max-w-xl'>
                    Explore Our curated collection of stylish clothing and accessories tailored to your unique taste.
                </p>
            </div>

            {/* Buttons Section */}
            <div className="shop_now flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 mb-8 lg:mb-10">
                {/* Shop Now Button */}
                <button className='bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all hover:scale-105 active:scale-95 w-full sm:w-auto'>
                    <h3 className='flex items-center justify-center gap-3 font-bold text-sm sm:text-base'>
                        SHOP NOW <FaArrowRight />
                    </h3>
                </button>
                
                {/* Play Video Button */}
                <div className="video_btn flex items-center gap-3 lg:gap-5">
                    <button type="button" className="shadow-lg bg-white text-red-500 p-3 sm:p-4 rounded-full hover:scale-110 transition-transform">
                        <IoPlayOutline className='text-xl sm:text-2xl' />
                    </button>
                    <span className="uppercase text-[#0E1F51] font-bold text-xs sm:text-sm">
                        PLAY VIDEO
                    </span>
                </div>
            </div>

            {/* Bottom Photos - Hidden on mobile, visible from sm */}
            <div className="bottom_photo hidden sm:flex gap-4 lg:gap-6 h-64 sm:h-72 md:h-80 lg:h-[340px]">
                <div className='bg-pink-100 w-1/2 lg:w-[45%] rounded-t-full overflow-hidden'>
                    <img src={girlphoto} alt="girl" className='object-cover object-top w-full h-full' />
                </div>
                <div className='bg-purple-100 w-1/2 lg:w-[45%] rounded-t-full overflow-hidden'>
                    <img src={manphoto} alt="man" className='object-cover object-top w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Banner_left