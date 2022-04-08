import React from 'react';
import logo from '../media/AE.svg';
import interior from '../media/restaurantHome.png'
import evilCorp from '../media/fb.svg'
import call from '../media/call.svg'
import location from '../media/location.svg'
import yelp from '../media/icons8-yelp.svg'
import google from '../media/icons8-google.svg'


const mapsURL =' https://goo.gl/maps/XrBGSmzsy28upT2s9'
const number = 'tel:+1-847-782-0794' 
const googleLink = 'https://www.google.com/maps/place/Avocado+Express/@42.359642,-87.8694588,17z/data=!4m7!3m6!1s0x880f92ba2a3ba2bb:0xf43a215bd114379e!8m2!3d42.359641!4d-87.8673495!9m1!1b1'
const yelpLink = 'https://www.yelp.com/biz/avocado-express-waukegan-3'
const FBLink = 'https://www.facebook.com/pages/category/Cafe/Avocado-Express-Cafe-444099352359379/'

const Hours = () => {
    return(
        <div className='flex flex-col justify-center items-center text-base col-start-2 col-span-4 md:col-start-3 md:col-span-2'>
            <span className='font-Paytone shadow-lg shadow-up-3 md:text-4xl md:mb-4'>HOURS</span>
            <span className='text-base flex flex-col md:text-2xl md:mb-4'>
                <div>WED. - MONDAY :</div> 
                <div>8:00AM - 2:00PM</div>
            </span>
            <span className='text-base md:text-2xl'>TUESDAY : CLOSED</span>
        </div>
    )
}

const Call = () => {
    return(
        <div className='flex flex-col justify-start items-center text-base row-start-2 col-start-1 col-span-3 md:row-start-2 md:col-start-4 md:col-span-2'>
            <span className='font-Paytone shadow-lg shadow-up-3 sm:mb-4 md:text-4xl'>CALL</span>
            <a href={number} className='flex flex-col justify-start items-center mt-2 sm:mt-0 md:text-2xl'>
                <img src={call} className='h-4 mx-2 sm:h-8 md:text-xl' />
                (847) 782-0794
            </a>
        </div>
    )
}

const Location = () => {
    return(
        <div className='flex flex-col justify-center items-center row-start-2 col-start-4 col-span-3 md:row-start-2 md:col-start-2 md:col-span-2'>
            <span className='font-Paytone text-base shadow-up-3 md:text-4xl sm:mb-4'>LOCATION</span>
            <a className='flex flex-col justify-center text-base mt-2 sm:mt-0 md:text-2xl' href={mapsURL}>
                <img className='h-4 mx-2 sm:h-8' src={location} />
                <span className='flex justify-center items-center'>2632 Washington St.,</span>
                <span className='flex justify-center items-center'>Waukegan, IL</span>
            </a>
        </div>
    )
}

const ExtLinks = () => {
    return (
        <span className='w-full max-h-max flex relative items-center text-base mt-2 justify-between sm:top-20 sm:justify-end md:top-32 md:gap-12 md:mr-4'>
            <div className='flex items-center font-Paytone ml-2 text-sm sm:text-xs sm:order-last md:text-xl'>
                SOCIAL
                <a href={FBLink}><img className='animate-bouncy h-6 mx-1 md:h-8' src={evilCorp} /></a>
            </div>
            <div className='flex items-center font-Paytone text-sm sm:text-xs md:text-xl'>
                REVIEWS
                <a href={yelpLink}><img className='animate-bouncy h-6 mx-1 md:h-8' src={yelp} /></a>
                <a href={googleLink}><img className='animate-bouncy h-6 mx-1 md:h-8' src={google} /></a>
            </div>
        </span>

    )
}

const Home = React.forwardRef((props, ref) => (
        <div id={props.id} ref={ref} className='w-full min-h-full max-h-max flex flex-col bg-gradient-to-tr from-deep-orange to-daisy justify-start items-center pb-4 gap-0' name='Home'>
            <div className='flex flex-col justify-start items-center h-15 w-1/2 max-w-190 sm:w-1/3 sm:max-w-none sm:h-15 sm:fixed sm:left-2 sm:z-20 md:max-w-300 md:w-4/10'>
                <img className='max-h-max mt-4 animate-powerUp ' src={logo} />
                <span className='text-xs md:text-lg'>EST. 2014</span>
            </div>
            <ExtLinks />
            <img className='h-1/3 w-full mt-2 mb-4 max-w-450 sm:rounded-lg sm:mt-24 sm:h-4/10 sm:w-2/3 md:max-w-none md:mt-36 xl:max-w-xl xl:max-h-xl xl:max-w-800 xl:max-h-500' src={interior} />
            <div className='text-base w-full max-h-max grid grid-rows-2 grid-cols-6 gap-y-4 justify-center items-center sm:w-full sm:grid-cols-6 md:h-1/3 md:gap-x-8 md:flex-row md:mt-6 md:grid-rows-2 md:grid-cols-6'>
                <Hours />
                <Location />
                <Call />
            </div>
        </div>
))

export default Home;