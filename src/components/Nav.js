import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import MenuWhite from '../media/restaurant-menu_white.svg';
import MenuBlack from '../media/restaurant-menu_black.svg';
import DeliverWhite from '../media/deliver-food_white.svg';
import DeliverBlack from '../media/deliver-food_black.svg';
import HomeWhite from '../media/home_white.svg';
import HomeBlack from '../media/home_black.svg';


const Nav = ({sectionsVisible}) => {
    return(
        <div className='shadow-up-2 border-black border-t bg-avocado-green font-Paytone text-black text-base fixed z-10 bottom-0 w-full h-1/10 flex justify-around items-center sm:fixed sm:top-0 sm:pt-8 sm:pb-8 sm:justify-end sm:gap-20 sm:max-h-sm sm:max-h-20 md:max-h-md md:max-h-24 md:gap-20 lg:gap-40'> 
            <Link to='Home' smooth={true} duration={700} className={(sectionsVisible == 'home')?'md:text-xl flex flex-col justify-center items-center transition text-white duration-300 ease-in':'md:text-xl flex flex-col justify-center items-center duration-300 ease-in'}>
                    <img className='fill-current h-6 md:h-10' src={sectionsVisible=='home'?HomeWhite:HomeBlack} />       
                    HOME
            </Link>
            <Link to='Menu' smooth={true} duration={700} className={(sectionsVisible == 'menu')?'md:text-xl h-full flex flex-col justify-center items-center transition text-white duration-300 ease-in ':'md:text-xl h-full flex flex-col justify-center items-center duration-300 ease-out'} offset={-80}>
                    <img className='h-6 md:h-10' src={sectionsVisible=='menu'?MenuWhite:MenuBlack} />
                    MENU
            </Link>
            <a onClick={() => scroll.scrollToBottom()} className={(sectionsVisible =='delivery')?'md:text-xl h-full flex flex-col justify-center items-center transition text-white duration-300 ease-in sm:mr-10':'md:text-xl h-full flex flex-col justify-center items-center duration-300 ease-out sm:mr-10'}>
                    <img className='h-6 mb-0.5 md:h-10' src={sectionsVisible == 'delivery'?DeliverWhite:DeliverBlack} />
                    ORDER
            </a>
        </div>
    )
}

export default Nav;