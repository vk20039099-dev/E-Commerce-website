import girlphoto from '../assets/image/girlphoto.png'
import manphoto from '../assets/image/home-banner-2neno.png'
import banner_img from '../assets/image/banner_img.png'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { IoPlayOutline } from 'react-icons/io5'
import { BsFire } from 'react-icons/bs'
import Homebanner from './Main_hero/Homebanner'

function Home() {
  return (
    <div className=''>
      <div className="container mx-auto ">
        <div className='home_banner flex items-center justify-between'>
         <Homebanner/>
        </div>
      </div>
    </div>
  )
}

export default Home
