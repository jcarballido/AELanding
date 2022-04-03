import React,{ useState, useRef } from 'react';
import Category from './Category';
import MenuInfo from '../menuInfo_2'

const Menu = React.forwardRef((props, ref) => (
        <div id={props.id} ref={ref} className='bg-gradient-to-tl from-forestGreen to-menuGreen w-full max-h-max flex flex-col items-center gap-y-1 text-black text-3xl pb-8' name='Menu'>
            <div className='pt-8 textBlack text-red-700 text-3xl font-Paytone tracking-wide'>MENU</div>
            <span className='pb-8 flex justify-center text-xs font-Quicksilver'>*prices subject to change</span>
            {MenuInfo.map(section=>
                <Category
                    sectionName={section.category}
                    sectionItems={section.items}
                />
            )}
            
        </div>
    ));

export default Menu;