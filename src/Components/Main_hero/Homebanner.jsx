import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Banner_right from './Banner_right'
import Banner_left from './banner_left'

const Homebanner = () => {
    return (
        <>
            <div className="container mx-auto ">
                <div className='home_banner flex items-center justify-between'>
                    <div className="left_arrow hidden lg:block">
                        <p className='p-6 bg-pink-200 rounded-full'><FaAngleLeft /></p>
                    </div>
                    <div className="center_content w-full gap-5 flex justify-between items-center px-15 h-full ">
                        <Banner_left />
                        <Banner_right />
                    </div>
                    <div className="right_arrow hidden lg:block">
                        <p className='p-6 bg-pink-200 rounded-full'><FaAngleRight /></p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Homebanner
