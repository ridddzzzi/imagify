import {React,useState} from 'react'
import { assets } from '../assets/assets';
import { motion,delay } from 'motion/react';
const Result = () => {
 const [image,setImage] = useState(assets.sample_img_2)
 const [isImageLoaded,setisImageLoaded] = useState(true)
 const [loading, setLoading] = useState(true)
 const [input,setInput] = useState('')

 const onSubmitHandler = async (e) => {

 }

  return (
   <>
   <motion.div
   
   initial={{opacity:0.2,y:100}}
   transition={{duration:1}}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true}}
   className='flex flex-col min-h-[90vh] items-center justify-center'>
     <div className='relative'>
      <img className='max-w-sm 
      rounded' src={image}/>
      <span className= 'absolute bg-blue-500 bottom-0 left-0 h-1 w-full transition-all duration-[10s]'/>

     </div>

     <p className= {!loading ? 'hidden' : ''}>
     Loading...
     </p>





   {!isImageLoaded && 

<form 
onSubmit={onSubmitHandler}
className="w-full max-w-xl mt-10">
  <div className="flex items-center w-full rounded-full bg-black/70 px-2 py-1 pr-1">
    <input
      type="text"
      placeholder="Describe what you want to generate"
      className="flex-1 bg-transparent text-white
       placeholder-white px-6 py-3 outline-none"
       onChange={e=>setInput(e.target.value)}
       value={input}
    />
    <button
      type="submit"
      className='bg-zinc-900 text-white 
      text-sm px-10 py-3.5 rounded-full 
       hover:bg-zinc-800 transition'
    >
      Generate
    </button>
  </div>
</form>

   }


   {isImageLoaded &&

<div className='flex gap-2 justify-center text-gray text-sm 
p-0.5 mt-10 rounded-full text-white '>
  <p onClick={() => {setisImageLoaded(false)}} className='bg-transparent
  border border-zinc-900 text-black px-10 py-3 
  rounded-full cursor-pointer '>Generate Another</p>
 <a className='bg-zinc-900 px-10 py-3
 rounded-full cursor-pointer' href={image} download> Download</a>
</div>

   }
    
    </motion.div>

   

    </>
  )
}

export default Result;



