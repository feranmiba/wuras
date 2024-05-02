import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import LeoGold from "./profile/LeoGold.jpg"
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import './all.css'
import '../../App.css'


function Navbar() {

  const [mode, setMode] = useState(true)
  const change = () => {
   document.body.classList.toggle('dark')
   setMode(!mode)
  }
  return (

    <nav>
    <MobileNav  />
<nav className="bg-[#242727] hidden md:block ">

    <motion.div 
    initial={{
      y: -250
    }}
    animate={{
      y: 0
    }}
    transition={{
      delay: 0.2,
      type: "tween",
      stiffness: 120,
      duration: 1
    }}
    className="root">
      <div styles="logo" className="phew">
      
        <Link to="/" className=" text-xl flex gap-3">
        <p  className="widh"><img src={LeoGold}  alt="leogold" className="rounded-full" /></p>  
       <p className="mt-2"> LeoGold</p>
        </Link>
      </div>
      <ul className="nav">
      {Nav.map((nav) => { 
        return(
        <li className=" uppercase">
        <Link to={nav.link}>{nav.names}</Link>
      </li>)})}

      <div class="border-l-6 border-green-500 h-500"></div>

     <div onClick={change}>
     {
      mode ? (
        <button className="flex"> <FaSun /> </button>
      ) : (
        <button className='flex'> <FaMoon /></button>
      )
    }
     </div>
      </ul>
     
    </motion.div>
    </nav>
   


    </nav>
  );
  
}

export default Navbar;
