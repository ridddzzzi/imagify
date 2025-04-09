import React from 'react'
import { assets } from '../assets/assets';

const GenerateButton = () => {
    return(
        <div className='pb-16 text-center'>
            <h1 className='text-neutral-800 font-semibold
            text-2xl md:text-3xl lg:text-4xl
            
            mt-4 py-6 md:py-16'>See The Magic... Try Now</h1>
            <button className='
           inline-flex items-center gap-2
           px-12 py-3 rounded-full bg-black text-white m-auto mb-3
           hover:scale-125 duration-500 cursor-pointer transition-all'>Generate Images
                <img className = 'h-6' src={assets.star_group}/>

               
            </button>
            
           
             </div>
    );
}

export default GenerateButton;