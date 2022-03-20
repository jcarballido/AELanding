import React,{ useState } from 'react';
import Chevron from '../media/icons8-chevron-down.svg';

const Card = ({sectionItems}) => {
    return(
        <div className='bg-white pb-2 rounded-lg'>
            {sectionItems.map(section =>
                <div className='m-2'>
                    <div className='text-base font-bold'>
                        {section.Item}
                        {section.Price? ' / ':null}
                        <span className='text-red-700'>{section.Price}</span>
                    </div>
                    <div className='text-xs italic'>{section.Choice? section.Choice:null}</div>
                    <div className='text-xs italic mb-1'>{section.ServedWith? section.ServedWith:null}</div>
                    <div className='text-sm leading-none'>{section.Includes? section.Includes:null}</div>
                    {section.Image? 
                    <div className='flex justify-center items-center my-4'>
                        <div className='max-w-max shadow-neon rounded-lg'>
                            <img className='rounded-lg' src={section.Image} />
                        </div>
                    </div>:null}
                </div>
            )}
        </div>
    )
}

const Category = ({sectionName, sectionItems}) => {
    const [visible, setVisibility] = useState(false)

    return(
        <div className='w-9/10'>
            <div onClick={()=>setVisibility(!visible)} className='w-full h-8 flex justify-evenly bg-red-700 text-2xl rounded-2xl'>
                <div className='w-1/6' />
                <div className='w-2/3 flex justify-center items-center text-white text-base font-Paytone sumNew'>
                    {sectionName}
                </div> 
                <div className='w-1/6 text-base text-whiteflex justify-center p-1 pr-4 flex flex-col items-center'>
                        {visible? 
                        <img className='h-4 duration-300 transform rotate-180' src={Chevron} />:
                        <img className='rotate-0 duration-300 h-4' src={Chevron} />}
                </div>
            </div>
            <div className={visible?'transition transform duration-1000 scale-y-100 origin-top':'transform scale-y-0'}>
                    {visible?
                        <Card sectionItems={sectionItems} />:null
                    }
            </div>
        </div>
    )
};

export default Category;