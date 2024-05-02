import React from 'react'
import styles from "./Navbar.module.css";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LeoGold from "./profile/LeoGold.jpg"
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import './all.css'
import '../../App.css'



function MobileNav() {
  const [showModal, setShowModal] = useState(Boolean)
  const [mode, setMode] = useState(true)
  const change = () => {
   document.body.classList.toggle('dark')
   setMode(!mode)
  }


  const visibility = () => {
    setShowModal(!showModal)
  }




  return (
    <nav className='md:hidden'>
    <nav className='mobileroot'>
    
    <div styles={styles.logo}>
      
        <Link to="/" className=" text-xl flex gap-3">
        <p  className="w-[10%]"><img src={LeoGold}  alt="leogold" className="rounded-full" /></p>  
       <p className="mt-2"> LeoGold</p>
        </Link>
      </div>



    <div className='mt-3 flex gap-5'>
    <p className='text-2xl cursor-pointer' onClick={visibility}> <FaBars /> </p>
    <div onClick={change}>
    {
     mode ? (
       <button className="flex"> <FaSun /></button>
     ) : (
       <button className='flex'> <FaMoon /></button>
     )
   }
    </div>
    </div>


<AnimatePresence mode='wait'  initial={false} >
  {showModal &&( 
   <motion.main
   initial={{
    y: -250
  }}
  animate={{
    y: 0
  }}
  exit={{
    y: -250
  }}
  transition={{
    delay: 0.2,
    type: "tween",
    stiffness: 120,
    duration: 0.8
  }}
   className="mobile">
 <p className='text-2xl flex justify-end cursor-pointer'  onClick={visibility}> 
 <FaTimes /></p>
    <ul className="flex flex-col justify-start gap-5 pt-2">
    {Nav.map((nav) => { 
      return(
      <li className=" uppercase">
      <Link to={nav.link}>{nav.names}</Link>
    </li>
    )})}
    </ul>
    </motion.main>
      )}

      </AnimatePresence>
    </nav>
    </nav>
  )
}

export default MobileNav
