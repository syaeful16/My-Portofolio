import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

const navMenu = [
  {name: 'My Project', link: '#my-project'},
  {name: 'My Activity', link: '#activity'}
]


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const navHandle = () => {
    setNav(!nav);
  }

  return (
    <nav className='px-6 lg:px-[6rem] xl:px-[12rem] w-screen py-6 flex justify-between'>
      <h1 className='text-white font-montserrat font-bold text-xl md:text-2xl'>ARNAS.</h1>
      <ul className='hidden font-poppins font-medium text-white md:flex'>
        {navMenu.map((menu, index) => (
          <li key={index} className={index === navMenu.length - 1 ? 'mr-0' : 'mr-8'}>
            <Link className='cursor-pointer'
              activeClass="active"
              to="MyProject"
              spy={true}
              smooth={true}
              offset={-20}
              duration={800}>
                {menu.name}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={navHandle} className="block md:hidden">
        { nav ? <AiOutlineClose size={20} color={'#ffffff'}/> : <AiOutlineMenu size={20} color={'#ffffff'}/> }
      </div>
    </nav>
  )
}

export default Navbar