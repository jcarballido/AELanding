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
        <div className='flex flex-col justify-center items-center'>
            <span className='font-Paytone text-xl shadow-lg shadow-up-3 md:text-3xl'>HOURS</span>
            <span className='text-base flex flex-col'>
                <div>WED. - MONDAY :</div> 
                <div>8:00AM - 2:00PM</div>
            </span>
            <span className='text-base'>TUESDAY : CLOSED</span>
        </div>
    )
}

const Call = () => {
    return(
        <div className='flex flex-col justify-start items-center'>
            <span className='font-Paytone text-xl shadow-lg shadow-up-3 sm:mb-4 md:text-3xl'>CALL</span>
            <a href={number} className='flex flex-col justify-start items-center mt-2 sm:mt-0'>
                <img src={call} className='h-4 mx-2 sm:h-8' />
                (847) 782-0794
            </a>
        </div>
    )
}

const Location = () => {
    return(
        <div className='flex flex-col justify-center items-center'>
            <span className='font-Paytone text-xl shadow-up-3 md:text-3xl sm:mb-4'>LOCATION</span>
            <a className='flex flex-col justify-center mt-2 sm:mt-0' href={mapsURL}>
                <img className='h-4 mx-2 sm:h-8' src={location} />
                <span className='flex justify-center items-center'>2632 Washington St.,</span>
                <span className='flex justify-center items-center'>Waukegan, IL</span>
            </a>
        </div>
    )
}

const ExtLinks = () => {
    return (
        <span className='w-full max-h-max flex relative items-center text-base mt-2 justify-between sm:top-20 sm:justify-end'>
            <div className='flex items-center font-Paytone ml-2 text-sm sm:text-sm
             sm:order-last'>
                SOCIAL
                <a href={FBLink}><img className='animate-bouncy h-6 mx-1' src={evilCorp} /></a>
            </div>
            <div className='flex items-center font-Paytone text-sm sm:text-xs'>
                REVIEWS
                <a href={yelpLink}><img className='animate-bouncy h-6 mx-1' src={yelp} /></a>
                <a href={googleLink}><img className='animate-bouncy h-6 mx-1' src={google} /></a>
            </div>
        </span>

    )
}

const Home = React.forwardRef((props, ref) => (
        <div id={props.id} ref={ref} className='w-full h-full flex flex-col bg-gradient-to-tr from-deep-orange to-daisy justify-start items-center' name='Home'>
            <div className='flex flex-col justify-start items-center sm:w-1/3 sm:h-15 sm:fixed sm:left-2 sm:z-20'>
                <img className='max-h-max mt-4 animate-powerUp' src={logo} />
                <span className='text-xs'>EST. 2014</span>
            </div>
            <ExtLinks />
            <img className='h-1/3 w-full sm:w-2/3 mt-2 mb-4 sm:rounded-lg sm:mt-24 sm:h-4/10' src={interior} />
            <div className='h-3/10 text-base flex flex-col gap-y-4 justify-center items-center sm:w-full sm:grid sm:grid-cols-3 md:h-1/5 md:gap-x-8 md:flex-row md:mt-6'>
                <Hours />
                <Location />
                <Call />
            </div>
        </div>
))

export default Home;