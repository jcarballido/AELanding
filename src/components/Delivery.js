import React from 'react';
import UberEatsLogo from '../media/UElogo.svg';
import DoorDashLogo from '../media/DD.png';

const UEURL = 'https://www.ubereats.com/store/avocado-express/XuumYwChSMeHhn4N40nO0w?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEzMjUlMjBOJTIwTGluZGVuJTIwQXZlJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyMTljZWNjNjktMTM4Zi03NGE3LTM5NjgtMmFhYTY4NDdjYWY1JTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0Mi4zNzgzOTQ4NDgzMDQwNiUyQyUyMmxvbmdpdHVkZSUyMiUzQS04Ny44NDQ4MTg2NzM0NjY0JTdE&ps=1'
const DDURL = 'https://www.doordash.com/store/avocado-express-waukegan-445732/'

const Delivery = React.forwardRef((props, ref) => (
        <div id={props.id} ref={ref} className=' bg-black flex flex-col justify-center'>
            <div className='bg-black m-4 rounded-lg shadow-neon'>
                <div className='flex justify-center font-Paytone text-2xl text-white pt-2 neonText'>
                        GET IT DELIVERED!
                </div>
                <div href={UEURL} className='max-h-max flex justify-around pt-2 pb-2' name='Delivery'>
                    <a href={UEURL} className='max-w-max py-2 rounded-xl borderITHINK'>
                        <img className='h-full ' src={UberEatsLogo} />
                    </a>
                    <a href={DDURL} className='w-1/2 flex items-center justify-center borderITHINK'>
                        <img className='w-full rounded-2xl filter drop-shadow-3xl' src={DoorDashLogo} />
                    </a>
                </div>
            </div>
        </div>
))

export default Delivery;