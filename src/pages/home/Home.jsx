import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { ImGithub } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import Layout from "../../component/layout/Layout";
import Automatictype from "../../component/AutomaticType";
import { SiSolidity } from "react-icons/si";
import { SiRust } from "react-icons/si";
import { SiCairometro } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";




const skillStack = [
 { 
  id: 0,
  icon: <SiCairometro />},
 { 
  id: 1,
  icon: <SiRust />},
 { 
  id: 2,
  icon: <SiSolidity />}
]






function Home ({ durationInMs = 2000 }) {
  const sx = {
    animationDuration: `${durationInMs}ms`,
  }
  return (
    <Layout>
      <div className={styles.root}>



        <div className={styles.title}>
          <h1 className="text-2xl md:text-5xl">Smart Contract security researcher.</h1>
          <h3 className=" text-xl md:text-4xl"><Automatictype text=" Specialty: Auditing and Testing "speed={50} /> </h3>
          <div className="flex justify-center p-4 text-3xl">
            <span>
              <a href="mailto:falilatowolabi0@gamil.com">
                <MdEmail />
              </a>
            </span>
            <span>
              <a href="https://github.com/falilah">
                <ImGithub />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/falilat-owolabi/">
                <GrLinkedinOption />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/_falilah">
                <BsTwitterX />
              </a>
            </span>
          </div>
        </div>



        <div className="w-[100%] flex justify-center">
        <section className={styles.slider}>
  
        <marquee direction="right">   <div className={styles.slide}>
{skillStack.map((skill) => (
        <p className={styles.content} style={sx}> 
    {skill.icon} 
      </p>))}
      
  
       

        </div></marquee>  
        </section>
        </div>

      </div>


    </Layout>
  );
}

export default Home;
