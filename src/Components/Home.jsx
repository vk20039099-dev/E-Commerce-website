import girlphoto from '../assets/image/girlphoto.png'
import manphoto from '../assets/image/home-banner-2neno.png'
import banner_img from '../assets/image/banner_img.png'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { IoPlayOutline } from 'react-icons/io5'
import { BsFire } from 'react-icons/bs'

function Home() {
  return (
    <div className=''>
      <div className="container mx-auto ">
        <div className='home_banner flex items-center justify-between'>
          <div className="left_arrow hidden lg:block">
            <p className='p-6 bg-pink-200 rounded-full'><FaAngleLeft /></p>
          </div>
          <div className="center_content w-full gap-5 md:flex lg:flex justify-between items-center px-15 h-full ">
            <div className=" content-left  w-[60%] h-full ">
              <h4 className=' flex items-center text-xl font-medium text-red-500'>2025 Style collection<BsFire /></h4>
              <h1 className='title w-140 font-bold text-5xl text-blue-950 leading-15' >Discover The Best Fashion Style For You</h1>
              <p className={'w-100 opacity-70  text-bold text-blue-950 hidden lg:block'}>Explore Our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
              <div className="like_location flex justify-end ">
                <div className="like_bg w-10 h-10 bg-red-400 rounded-full  items-center justify-center  hidden lg:flex">
                  <BiLike className='text-white text-2xl ' />
                </div>
              </div>
              <div className="shop_now flex items-center gap-15 mb-10 ">
                <button className='bg-red-500 text-white px-8 py-4 rounded-full   '>
                  <h3 className=' uppercase'>Shop Now
                    <span><FaArrowRight className='inline-block ml-10 text-2xl ' /></span>
                  </h3>
                </button>
                <div className="video_btn gap-5 flex items-center  ">
                  <button type="button" className=" shadow-[0, 0 10px-bg-red-100] shadow-zinc-300  text-red-500 p-4 rounded-full "><IoPlayOutline className=' text-2xl' />
                  </button>
                  <span className="uppercase text-[#0E1F51] font-bold ">
                    play video
                  </span>
                </div>

              </div>
              <div className="bottom_photo flex gap-5   ">
                <div className='bg-pink-100 w-[35%] rounded-t-full '>
                  <img src={girlphoto} alt="girl" className='object-cover rounded-t-full w-full h-full' />
                </div>
                <div className=' bg-amber-900 w-[35%] rounded-t-full'>
                  <img src={manphoto} alt="man" className='object-cover rounded-t-full w-full h-full' />

                </div>
              </div>


            </div >
            <div className="content-right w-[40%] h-[660px] order-2 lg:order-1 ">
              <img src={banner_img} alt="banner" className='object-cover h-full rounded-md ' />
            </div>

          </div>
          <div className="right_arrow hidden lg:block">
            <p className='p-6 bg-pink-200 rounded-full'><FaAngleRight /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
