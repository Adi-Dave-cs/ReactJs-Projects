import { useState } from 'react'
import { motion } from "motion/react"
import './App.css'

function App() {
  return (
    <>
    
    <div className='w-[100vw] h-[100vh] bg-linear-to-b from-black to-cyan-900 bg-(image:[]) bg-repeat'>
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808F50_2px,transparent_1px),linear-gradient(to_bottom,#80808F50_2px,transparent_1px)] bg-[size:50px_50px]">
        <div className="absolute top-[8%] left-[50%] w-[90vw] h-max translate-x-[-50%] translate-y-[-50%] flex">
          <div className='w-[100px] h-[100px] bg-amber-50 flex justify-center items-center rounded-md'>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="100px" height="100px" viewBox="0 0 300 300"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0,300) scale(0.100000,-0.100000)"
            fill="#000" stroke="none">
            <path d="M800 1535 l0 -255 55 0 55 0 0 93 0 93 44 12 c108 29 151 167 79 253
            -37 43 -80 59 -163 59 l-70 0 0 -255z"/>
            <path d="M1160 1535 l0 -258 84 5 c90 5 123 18 152 63 35 54 12 147 -45 181
            l-30 18 29 17 c68 42 78 136 21 193 -30 29 -36 31 -121 34 l-90 4 0 -257z"/>
            <path d="M1510 1535 l0 -255 120 0 120 0 0 55 0 55 -60 0 -60 0 0 200 0 200
            -60 0 -60 0 0 -255z"/>
            <path d="M1912 1764 c-116 -58 -169 -187 -130 -315 36 -121 183 -195 310 -157
            50 15 122 78 151 132 30 57 30 165 0 222 -66 125 -212 177 -331 118z m176
            -104 c34 -21 72 -87 72 -125 0 -38 -38 -104 -72 -125 -65 -39 -160 -15 -193
            50 -66 127 75 272 193 200z"/>
            <path d="M2492 1777 c-45 -14 -118 -81 -144 -131 -34 -64 -31 -165 6 -234 46
            -83 128 -132 223 -132 120 0 232 112 233 233 l0 47 -120 0 -120 0 0 -50 0 -50
            55 0 c30 0 55 -4 55 -8 0 -22 -52 -55 -93 -59 -111 -13 -185 95 -138 201 43
            99 164 116 227 32 l19 -24 47 27 47 27 -21 30 c-60 85 -176 123 -276 91z"/>
            <path d="M354 1533 l-121 -248 240 -3 c132 -1 242 -1 244 2 2 2 -51 115 -119
            251 l-124 247 -120 -249z"/>
            </g>
            </svg>
          </div>
        </div>
        <div className='absolute w-max top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <motion.p animate={{x:0, transition:{duration:0.35}}} initial={{x:-100}} className='text-5xl text-shadow-indigo-200 text-shadow-md text-center fascinate-regular'><span className='font-bold'>Innovating Blogging </span></motion.p>
          <motion.p initial={{opacity:0, y:100}} animate={{opacity:1,y:0, transition:{duration:0.35}}} className='text-shadow-indigo-200 text-shadow-md text-5xl fascinate-regular '><span className='italic text-7xl lavishly-yours-regular'>Smarter </span> Writing , <span className="italic text-7xl lavishly-yours-regular">Lucid</span> Reading. </motion.p>
        </div>
        <div className="absolute backdrop-blur-[4px] text-2xl top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[10vh] w-[20vw] border-1 border-amber-50 rounded-full flex justify-center items-center">
          <p className='text-center m-auto font-mono'>Skim Through It</p>
          <a>
            <div className='m-2 rounded-full bg-amber-50 text-black h-[80px] w-[80px] flex justify-center items-center'><motion.p initial={{x:-10}} animate={{x:0, duration: 2}} transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType:"reverse",
        }}> &rarr; </motion.p></div>
          </a>
        </div>
        <div className=' flex justify-between gap-[1vw] items-center w-max h-[40vh] absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
          <div className='flex-col backdrop-blur-[3px] grow-2 h-100 w-[10vw] rounded-2xl border-1 hover:w-[30vw] duration-300 flex justify-center items-center group'>
            <div><p className='text-4xl font-bold font-mono -rotate-90 group-hover:rotate-0 duration-300 '>GUEST</p> </div>
            <div>
            <ul className='hidden group-hover:block font-mono text-2xl duration-300'>
              <li>- Read the blogs</li>
              <li>- Filter the results</li>
              <li>- Sort the results</li>
              <li>- Search the users/topic</li>
            </ul>
            </div>
          </div>
          <div className='flex-col backdrop-blur-[3px] grow-2 h-100 w-[10vw] rounded-2xl border-1 hover:w-[30vw] duration-300 flex justify-center items-center group'>
            <p className='text-4xl font-bold font-mono -rotate-90 group-hover:rotate-0 '>READER</p>
            <ul className='hidden group-hover:block font-mono text-2xl duration-300'>
              <li>- Everything from Guest</li>
              <li>- Engage with blogs</li>
              <li>- Follow users</li>
              <li>- Simplified Reads using AI</li>
            </ul>
          </div>
          <div className='flex-col backdrop-blur-[3px] grow-2 h-100 w-[10vw] rounded-2xl border-1 hover:w-[30vw] duration-300 flex justify-center items-center group'>
            <p className='text-4xl font-bold font-mono -rotate-90 group-hover:rotate-0 duration-300'>AUTHORS</p>
            <ul className='hidden group-hover:block font-mono text-2xl duration-300'>
              <li>- Everything from Reader</li>
              <li>- Write your blogs</li>
              <li>- AI assistance to write the blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;