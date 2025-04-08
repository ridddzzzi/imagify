import React from 'react'
import {stepsData} from '../assets/assets'
const Steps = () => {
    return (
        <div className='flex flex-col items-center
        justifuy-center my-32 '>
        <h1 className='
        text-3xl sm:text-4xl
        font-semibold mb-2
        '>How It Works?</h1>

        <p className='text-lg text-slate-500 mb-8'>Transform Your Words Into Stunning Images</p>

        <div className='space-y-4 w-full max-w-3xl
        text-sm'>
            {stepsData.map((item,index) => (
                <div 
                className='bg-white/30 shadow-lg border border-gray-50 cursor-pointer
                flex items-center gap-4 p-5 px-8 hover:scale-105 transition-all
                duration-300 rounded-lg'
                key={index}> 
                    <img width={40} src={item.icon}/>
                    <div> 
                        <h2
                        className='text-xl  font-medium '>{item.title} </h2>
                        <p className='text-gray-500'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Steps;