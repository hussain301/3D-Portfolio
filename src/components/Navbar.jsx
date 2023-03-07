import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'

import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a href="/" className='flex items-center gap-2'
          onClick={e => {
            e.preventDefault()
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt={logo} className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Hussain&nbsp;<span className='sm:block hidden'>|&nbsp;Web Dev</span></p>
        </a>
        <ul className='list-none sm:flex hidden flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ?
                'text-white' :
                'text-secondary'}
                   text-[18px] font-medium hover:text-white cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ?
                    'text-white' :
                    'text-secondary'}
                   text-[16px] font-poppins font-medium hover:text-white cursor-pointer`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>)
}


export default Navbar