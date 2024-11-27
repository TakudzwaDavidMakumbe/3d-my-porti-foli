"use client";
import React from 'react'
import Image from 'next/image';
import aboutImg from '../asserts/profilepic.png';
import book from '../asserts/book.png';
import pc from '../asserts/pc.png';
import card from '../asserts/card.png';
import finance from '../asserts/finance.png';

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>

        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">About <span className="text-orange-400">Me</span></h1>
        <div className="grid grid-cols-8 gap-6 place-items-center">

           
            <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className="flex flex-row p-6">
                    <Image 
                    src={book} 
                    alt="book" 
                    className='w-auto h-[130px]'
                    />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Education</h2>
                        <p className="text-lg text-white/70 mt-2">I`m working towards a degree in Information Systems and i am focusing on technologies like React, Next.js and Tailwind CSS </p>
                    </div>
                </div>
            </div>

            <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

                <div className="flex flex-row p-6">
                    <Image 
                    src={finance} 
                    alt="finance" 
                    className='w-auto h-[130px]'
                    />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Problem-Solving</h2>
                        <p className="text-lg text-white/70 mt-2">I approach challenges with a logical, systematic mindset and a positive attitude.</p>
                    </div>
                </div>
            </div>

            <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

                <div className="flex flex-row p-6">
                    <Image 
                    src={card} 
                    alt="card" 
                    className='w-auto h-[130px]'
                    />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Experience</h2>
                        <p className="text-lg text-white/70 mt-2">l have a diverse portfolio of projects and currently working at Clarity Smart Tech </p>
                    </div>
                </div>
            </div>

            <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

                <div className="flex flex-row p-6">
                    <Image 
                    src={pc} 
                    alt="pc"
                    className='w-auto h-[130px]'
                    />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Technical Skills</h2>
                        <p className="text-lg text-white/70 mt-2">As a Fullstack Web Developer, l specialize in SalesForce, React JS,Next.js and Tailwind CSS.My expertise extends to creating responsive, user-friendly interfaces and efficient backend solutions.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About