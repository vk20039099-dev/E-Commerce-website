import React from 'react'

import banner_img from '../../assets/image/banner_img.png'

const Banner_right = () => {
    return (
        <>

            <div className="content-right w-[40%] h-[660px] order-1 lg:order-2 ">
                <img src={banner_img} alt="banner" className='object-cover h-full rounded-md ' />
            </div>


        </>

    )
}

export default Banner_right
