import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Banner_right from './Banner_right'
import Banner_left from './Banner_left'

const Homebanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 2) // Assuming 2 slides
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 2) % 2)
    }

    return (
        <div className="container mx-auto px-0 sm:px-4">
            <div className='home_banner flex items-center justify-between gap-2 lg:gap-4'>
                {/* Left Arrow - Hidden on mobile, visible from xl */}
                <button 
                    onClick={prevSlide}
                    className="hidden xl:flex p-4 lg:p-6 bg-pink-200 hover:bg-pink-300 rounded-full transition-all hover:scale-110 active:scale-95 flex-shrink-0"
                    aria-label="Previous slide"
                >
                    <FaAngleLeft className="text-lg lg:text-xl text-gray-700" />
                </button>

                {/* Center Content */}
                <div className="center_content w-full flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 xl:gap-12 py-4 lg:py-0">
                    <Banner_left />
                    <Banner_right />
                </div>

                {/* Right Arrow - Hidden on mobile, visible from xl */}
                <button 
                    onClick={nextSlide}
                    className="hidden xl:flex p-4 lg:p-6 bg-pink-200 hover:bg-pink-300 rounded-full transition-all hover:scale-110 active:scale-95 flex-shrink-0"
                    aria-label="Next slide"
                >
                    <FaAngleRight className="text-lg lg:text-xl text-gray-700" />
                </button>
            </div>

            {/* Navigation Dots - Visible only on mobile (below lg) */}
            <div className="flex lg:hidden justify-center items-center gap-2 mt-6 mb-8">
                <button 
                    onClick={() => setCurrentSlide(0)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === 0 ? 'bg-red-500 w-8' : 'bg-gray-300 w-2'
                    }`}
                    aria-label="Slide 1"
                />
                <button 
                    onClick={() => setCurrentSlide(1)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === 1 ? 'bg-red-500 w-8' : 'bg-gray-300 w-2'
                    }`}
                    aria-label="Slide 2"
                />
            </div>
        </div>
    )
}

export default Homebanner