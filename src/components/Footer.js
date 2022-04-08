import React from 'react';
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return (
        <div className='w-full max-h-max  bg-black text-white font-Quicksand font-thin lg:py-8'>
            <div className='h-1/5 w-full flex flex-col gap-0 items-center lg:flex-row lg:items-center lg:justify-center'>
                <a className='w-full flex justify-center text-md sm:text-xl lg:w-1/4'>AVOCADO EXPRESS</a>
                <a href='tel:+1-847-782-0794' className='w-full flex justify-center text-sm sm:text-lg lg:w-1/4'>(847) 782-0794</a>
                <a href='https://goo.gl/maps/XrBGSmzsy28upT2s9' className='flex flex-row justify-center text-sm sm:text-lg lg:flex-col lg:w-1/4 lg:items-center'>2632 Washington Street, <span>Waukegan IL, 60085</span></a>
                <div className='pb-4 lg:flex lg:justify-center lg:w-1/4'>
                    <a className='text-xs sm:text-sm lg:text-lg flex flex-row justify-center' onClick={() => scroll.scrollToTop()}>Back to the top</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;