import React from 'react'
import { BiLike } from 'react-icons/bi'
import { BsFire } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'
import { IoPlayOutline } from 'react-icons/io5'
import girlphoto from '../../assets/image/girl1.png'
import manphoto from '../../assets/image/home-banner-2neno.png'


function Banner_left() {
    return (
        <> 
         <div className=" content-left  w-[60%] h-full ">
            <h4 className=' flex items-center text-xl font-medium text-red-500'>2025 Style collection<BsFire /></h4>
            <h1 className='title w-lg font-bold text-5xl text-blue-950 leading-15' >Discover The Best Fashion Style For You</h1>
            <p className='w-100 opacity-80  text-bold'>Explore Our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
            <div className="like_location flex justify-end">
                <div className="like_bg w-10 h-10 bg-red-400 rounded-full flex items-center justify-center ">
                    <BiLike className='text-white text-2xl ' />
                </div>
            </div>
            <div className="shop_now flex items-center gap-15 mb-10 ">
                <button className='bg-red-500 text-white px-8 py-4 rounded-full   '>
                    <h3 className='flex items-center gap-5 font-bold '>Shop Now
                        <FaArrowRight />
                    </h3>
                </button>
                <div className="video_btn gap-5 flex items-center  ">
                    <button type="button" className="shadow-lg text-red-500 p-4 rounded-full "><IoPlayOutline className=' text-2xl' />
                    </button>
                    <span className="uppercase text-[#0E1F51] font-bold ">
                        play video
                    </span>
                </div>

            </div>
            <div className="bottom_photo flex gap-5  h-85 ">
                <div className='bg-pink-100 w-[35%] rounded-t-full '>
                    <img src={girlphoto} alt="girl" className='object-cover rounded-t-full w-full h-full' />
                </div>
                <div className=' bg-amber-900 w-[35%] rounded-t-full'>
                    <img src={manphoto} alt="man" className='object-cover rounded-t-full w-full h-full' />

                </div>
            </div>


        </div></>
    )
}

export default Banner_left
