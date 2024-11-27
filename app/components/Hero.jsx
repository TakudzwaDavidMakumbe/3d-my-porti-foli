"use client";
import React from 'react'
import Image from 'next/image';
import cursor from '../asserts/icon1.png';
import lightning from '../asserts/icon2.png';
import message from '../asserts/icon2.png';
import { motion } from "framer-motion";
import profilepic from '../asserts/profilepic.png';


const Hero = () => {
  return (
    <div
    className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
       
       <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
       bg-[radial-gradient(closest-side,#000_80%,#2B1942)] "></div>
       
        <div className="relative">
            <div className="text-8xl font-bold  text-center">
                <h1 className="text-[#98b4ce]">Hi, I'm </h1>
                <h1 className="text-[#E48A57]">Takudzwa</h1>
            </div>

            <motion.div
            className='absolute left-[180px] top-[170px]'
            drag
            >
                <Image 
                src={cursor} 
                alt="cursor" 
                width={170} 
                height={170}
                className=''
                draggable={false}
                />
            </motion.div>

            <motion.div
            className='absolute right-[180px] top-[20px]'
            drag
            >
                <Image 
                src={lightning} 
                alt="lightning" 
                width={120} 
                height={120}
                className=''
                draggable={false}
                />
            </motion.div>
        
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 ">
            I am a full-stack developer focused on creating websites that provide the best experience for users.
        </p>

        <Image
            src={profilepic}
            alt="profilepic"
            className='h-auto w-auto mx-auto'
        />
        </div>

    </div>
  )
}

export default Hero