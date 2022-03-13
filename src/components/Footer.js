import React from 'react';
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return(
        <div className='w-full max-h-max flex flex-col items-center justify-center bg-black text-white font-Quicksand font-thin'>
            <div className='h-1/5 flex flex-col gap-0 items-center'>
                <a className='w-full flex justify-center text-md'>AVOCADO EXPRESS</a>
                <a href='tel:+1-847-782-0794' className='w-full flex justify-center text-sm'>(847) 782-0794</a>
                <a href='https://goo.gl/maps/XrBGSmzsy28upT2s9' className='flex justify-center text-sm'>2632 Washington Street, Waukegan IL, 60085</a>
                {/*<span className='flex justify-center'></span>*/}
                <div className='pb-4'>
                    <a className='text-xs' onClick={() => scroll.scrollToTop()}>Back to the top</a>
                </div>
            </div>
        </div>
        )
}

export default Footer;