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
        <div className='shadow-up-2 border-black border-t bg-avocado-green font-Paytone text-black text-base fixed z-10 bottom-0 w-full h-1/10 flex justify-around items-center'>
            <Link to='Home' smooth={true} duration={700} className={(sectionsVisible == 'home')?'h-full flex flex-col justify-center items-center transition text-white duration-300 ease-in':'h-full flex flex-col justify-center items-center duration-300 ease-in'}>
                    <img className='fill-current h-6' src={sectionsVisible=='home'?HomeWhite:HomeBlack} />       
                    HOME
            </Link>
            <Link to='Menu' smooth={true} duration={700} className={(sectionsVisible == 'menu')?'h-full flex flex-col justify-center items-center transition text-white duration-300 ease-in':'h-full flex flex-col justify-center items-center duration-300 ease-out'}>
                    <img className='h-6' src={sectionsVisible=='menu'?MenuWhite:MenuBlack} />
                    MENU
            </Link>
            <a onClick={() => scroll.scrollToBottom()} className={(sectionsVisible =='delivery')?'h-full flex flex-col justify-center items-center transition text-white duration-300 ease-in':'h-full flex flex-col justify-center items-center duration-300 ease-out'}>
                    <img className='h-6 mb-0.5' src={sectionsVisible == 'delivery'?DeliverWhite:DeliverBlack} />
                    ORDER
            </a>
        </div>
    )
}

export default Nav;