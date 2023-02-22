import React from 'react'
import MyPhoto from '../assets/myPhoto2.png'
import Typed from 'react-typed'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Cover = () => {
  return (
    <div className="w-screen md:h-[90vh] h-max mt-8 md:mt-0 px-6 md:px-[12rem]">
      <div className="w-full h-full md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center font-poppins">
          <h2 className='text-2xl md:text-5xl font-medium text-[#A0A0A0] '>
            <Typed
                strings={['UI/UX Designer', 'Front End Developer']}
                typeSpeed={140}
                backSpeed={50}
                loop
            />
          </h2>
          <h1 className='text-4xl md:text-7xl font-bold text-white mt-2 md:mt-4'>Syaefulloh Arnas</h1>
          <div className="bg-[#FFD568] w-[50%] md:w-[30%] h-[4px] md:h-[6px] rounded-lg my-4 md:my-8 lg:my-10"></div>
          <p className='text-sm md:text-lg text-white leading-8 md:leading-10 font-light md:w-3/4'>During my college days I participated in several internal activities as a designer such as designing ui/ux and filling in Instagram content using <span className='font-bold'>Figma</span> and <span className='font-bold'>Adobe XD</span>. Besides that, I have made website projects with 
            <span className='font-bold'> React js</span>, 
            <span className='font-bold'> Laravel</span>, 
            <span className='font-bold'> HTML</span>, 
            <span className='font-bold'> PHP</span>, 
            <span className='font-bold'> CSS</span>, 
            <span className='font-bold'> JavaScript</span>, and 
            <span className='font-bold'> Python</span>. If you want to get more information from me, you can contact me. Thank You</p>
            <a className='text-[#FFD568] flex items-center gap-5 hover:gap-10 ease-in-out duration-200 text-lg md:text-xl mt-12 w-max' href="http://">Let's talk <HiArrowNarrowRight/></a>
        </div>
        <div className='relative my-auto'>
          <img src={MyPhoto} alt="" className='hidden md:block scale-[0.9]'/>
          <div className="absolute bottom-20 right-0 hidden md:block">
            <h2 className='text-white font-poppins text-lg'>Fresh Graduate</h2>
            <h1 className='text-[#FFD568] font-poppins text-2xl'>S1 Teknik Informatika</h1>
          </div>
        </div>
      </div>
    </div>
    // <div className="px-[2rem] lg:px-[6rem] xl:px-[10rem] h-[60vh] 2xl:px-[12rem] md:h-[90vh] w-screen">
    //   <div className='pt-8 md:pt-0 md:grid md:grid-cols-[45%_55%] w-full h-full'>
    //     <div className="flex flex-col justify-center">
    //       <h2 className='text-[#A0A0A0] text-2xl lg:text-5xl font-poppins font-medium'>
    //         <Typed
    //                 strings={['UI/UX Designer', 'Front End Developer']}
    //                 typeSpeed={140}
    //                 backSpeed={50}
    //                 loop
    //             />
    //       </h2>
    //       <h1 className='text-white text-4xl md:text-7xl font-bold mt-2 md:mt-4 font-poppins'>Syaefulloh Arnas</h1>
    //       <div className="bg-[#FFD568] w-[50%] md:w-[30%] h-[4px] md:h-[6px] rounded-lg my-4 md:my-8 lg:my-10"></div>
    //       <p className='text-white font-poppins w-full lg:w-[72%] md:w-[82%] font-extralight leading-loose text-sm lg:text-lg lg:leading-10'>During my college days I participated in several internal activities as a designer such as designing ui/ux and filling in Instagram content using <span className='font-bold'>Figma</span> and <span className='font-bold'>Adobe XD</span>. Besides that, I have made website projects with 
    //         <span className='font-bold'> React js</span>, 
    //         <span className='font-bold'> Laravel</span>, 
    //         <span className='font-bold'> HTML</span>, 
    //         <span className='font-bold'> PHP</span>, 
    //         <span className='font-bold'> CSS</span>, 
    //         <span className='font-bold'> JavaScript</span>, and 
    //         <span className='font-bold'> Python</span>. If you want to get more information from me, you can contact me. Thank You</p>
    //       <a className='text-[#FFD568] font-poppins flex items-center gap-5 hover:gap-10 ease-in-out duration-200 text-xl mt-12 w-max' href="http://">Let's talk <HiArrowNarrowRight/></a>
    //     </div>
    //     <div className="relative w-full flex">
    //       <img src={MyPhoto} alt="" className='hidden md:block md:scale-75 lg:scale-90'/>
    //       <div className="absolute bottom-20 right-0 hidden md:block">
    //         <h2 className='text-white font-poppins text-lg'>Fresh Graduate</h2>
    //         <h1 className='text-[#FFD568] font-poppins text-2xl'>S1 Teknik Informatika</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Cover