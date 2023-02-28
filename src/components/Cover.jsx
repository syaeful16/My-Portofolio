import React from 'react'
import MyPhoto from '../assets/myPhoto2.png'
import Typed from 'react-typed'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Cover = () => {
  return (
    <div className='w-screen h-[90vh] px-[2rem] lg:px-[4rem] xl:px-[6rem] 2xl:px-[12rem]'>
      <div className="w-full h-full flex xl:grid grid-cols-2">
        <div className='w-full flex flex-col justify-center font-poppins'>
          <h2 className='text-3xl md:text-4xl font-medium text-[#A0A0A0] '>
            <Typed
              strings={['UI/UX Designer', 'Web Developer']}
              typeSpeed={140}
              backSpeed={50}
              loop
            />
          </h2>
          <h1 className='text-5xl md:text-6xl 2xl:text-7xl font-bold text-white mt-3'>Syaefulloh Arnas</h1>
          <div className="bg-[#FFD568] w-[50%] md:w-[30%] h-[4px] md:h-[6px] rounded-lg my-4 md:my-8 lg:my-10"></div>
            <p className='w-[100%] sm:w-[85%] xl:w-[78%] leading-8 lg:leading-[2.5rem] xl:leading-[2.5rem] pt-8 text-white sm:text-md xl:text-lg font-extralight'>During my college days I participated in several internal activities as a designer such as designing ui/ux and filling in Instagram content using <span className='font-bold'>Figma</span> and <span className='font-bold'>Adobe XD</span>. Besides that, I have made website projects with 
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
          <img src={MyPhoto} alt="" className='hidden md:block md:scale-75 2xl:scale-[0.9]'/>
          <div className="absolute bottom-20 right-0 hidden md:block">
            <h2 className='text-white font-poppins text-lg'>Fresh Graduate</h2>
            <h1 className='text-[#FFD568] font-poppins text-2xl'>S1 Teknik Informatika</h1>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-screen md:h-[90vh] h-max mt-8 md:mt-0 px-6 md:px-[10rem] lg:px-[6rem]">
    //   <div className="w-full h-full md:grid md:grid-cols-2">
    //     <div className="flex flex-col justify-center font-poppins">
    //       <h2 className='text-2xl md:text-5xl font-medium text-[#A0A0A0] '>
    //         <Typed
    //             strings={['UI/UX Designer', 'Front End Developer']}
    //             typeSpeed={140}
    //             backSpeed={50}
    //             loop
    //         />
    //       </h2>
    //       <h1 className='text-4xl md:text-7xl font-bold text-white mt-2 md:mt-4'>Syaefulloh Arnas</h1>
    //       <div className="bg-[#FFD568] w-[50%] md:w-[30%] h-[4px] md:h-[6px] rounded-lg my-4 md:my-8 lg:my-10"></div>
    //       <p className='text-sm md:text-lg text-white leading-8 md:leading-10 font-light md:w-3/4'>During my college days I participated in several internal activities as a designer such as designing ui/ux and filling in Instagram content using <span className='font-bold'>Figma</span> and <span className='font-bold'>Adobe XD</span>. Besides that, I have made website projects with 
    //         <span className='font-bold'> React js</span>, 
    //         <span className='font-bold'> Laravel</span>, 
    //         <span className='font-bold'> HTML</span>, 
    //         <span className='font-bold'> PHP</span>, 
    //         <span className='font-bold'> CSS</span>, 
    //         <span className='font-bold'> JavaScript</span>, and 
    //         <span className='font-bold'> Python</span>. If you want to get more information from me, you can contact me. Thank You</p>
    //         <a className='text-[#FFD568] flex items-center gap-5 hover:gap-10 ease-in-out duration-200 text-lg md:text-xl mt-12 w-max' href="http://">Let's talk <HiArrowNarrowRight/></a>
    //     </div>
    //     <div className='relative my-auto'>
    //       <img src={MyPhoto} alt="" className='hidden md:block scale-[0.9]'/>
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