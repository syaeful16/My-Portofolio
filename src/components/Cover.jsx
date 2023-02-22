import React from 'react'
import MyPhoto from '../assets/myPhoto2.png'
import Typed from 'react-typed'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Cover = () => {
  return (
    <div className="px-[2rem] lg:px-[6rem] xl:px-[12rem] h-[50vh] md:h-[90vh] w-screen">
      <div className='pt-8 md:pt-0 lg:grid grid-cols-[45%_55%] w-full h-full'>
        <div className="flex flex-col justify-center">
          <h2 className='text-[#A0A0A0] text-2xl lg:text-5xl font-poppins font-medium'>
            <Typed
                    strings={['UI/UX Designer', 'Front End Developer']}
                    typeSpeed={140}
                    backSpeed={50}
                    loop
                />
          </h2>
          <h1 className='text-white text-4xl md:text-7xl font-bold mt-2 md:mt-4 font-poppins'>Syaefulloh Arnas</h1>
          <div className="bg-[#FFD568] w-[50%] md:w-[30%] h-[4px] md:h-[6px] rounded-lg my-4 md:my-8 lg:my-10"></div>
          <p className='text-white font-poppins w-full md:w-[72%] font-extralight leading-8 text-sm lg:text-lg'>During my college days I participated in several internal activities as a designer such as designing ui/ux and filling in Instagram content using <span className='font-bold'>Figma</span> and <span className='font-bold'>Adobe XD</span>. Besides that, I have made website projects with 
            <span className='font-bold'> React js</span>, 
            <span className='font-bold'> Laravel</span>, 
            <span className='font-bold'> HTML</span>, 
            <span className='font-bold'> PHP</span>, 
            <span className='font-bold'> CSS</span>, 
            <span className='font-bold'> JavaScript</span>, and 
            <span className='font-bold'> Python</span>. If you want to get more information from me, you can contact me. Thank You</p>
          <a className='text-[#FFD568] font-poppins flex items-center gap-5 hover:gap-10 ease-in-out duration-200 text-xl mt-12 w-max' href="http://">Let's talk <HiArrowNarrowRight/></a>
        </div>
        <div className="relative w-full flex">
          <img src={MyPhoto} alt="" className='hidden md:block md:scale-90'/>
          <div className="absolute bottom-20 right-0 hidden md:block">
            <h2 className='text-white font-poppins text-lg'>Fresh Graduate</h2>
            <h1 className='text-[#FFD568] font-poppins text-2xl'>S1 Teknik Informatika</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover