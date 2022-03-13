import React from 'react';
import UberEatsLogo from '../media/UElogo.svg';
import DoorDashLogo from '../media/DD.png';

const Delivery = React.forwardRef((props, ref) => (
        <div id={props.id} ref={ref} className='flex flex-col justify-center bg-black'>
            <div className='bg-black m-4 rounded-lg shadow-neon'>
                <div className='flex justify-center font-Paytone text-2xl text-white pt-2 neonText'>
                        GET IT DELIVERED!
                </div>
                <div className='max-h-max flex justify-around pt-2 pb-2' name='Delivery'>
                    <a className='max-w-max py-2 border-2 border-white rounded-xl'>
                        <img className='h-full ' src={UberEatsLogo} />
                    </a>
                    <a className='w-1/2 flex items-center justify-center'>
                        <img className='w-full border-2 border-white rounded-2xl' src={DoorDashLogo} />
                    </a>
                </div>
            </div>
        </div>
))

export default Delivery;