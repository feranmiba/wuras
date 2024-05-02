import React, { useState } from "react";
import Layout from "../../component/layout/Layout";
import styles from "./Works.module.css";
import axios from "axios"
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { useEffect } from "react";

function Works() {
  const [work, setWorks] = useState([])




    useEffect(() => {
      axios.get("http://wurapotfolio.onrender.com/posts").then((response ) => {
        console.log(response.data)
        setWorks(response.data)
      })
    }, [])

    const capitalizeFirstLetters = (string) => {
      return string
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    };


  return (
    <Layout>
      <motion.div  initial={{
        opacity: 0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        duration: 1.5
      }}  className={styles.root}> 
        <h2 className="px-8 mt-4">
          As a Smart contract Auditor and Tester, I've participated and founded Audited Smart contract. This
          page contains all of them.
          </h2>



          <section className="flex gap-10 px-8 lg:px-16 py-10 flex-wrap">
        {work.map((data) =>{ return (
           <section className=" mt-5  gap-2 md:gap-0 md:w-[46%] lg:w-[30%]  px-3 py-5 rounded-lg bg-[#282b2d] shadow-2xl transform transition-all duration-500  hover:md:scale-125 hover:lg:z-50 hover:md:text-lg">

          <div className=" text-lg lg:text-base  hover:shadow-md transition-all duration-300">
          <p > <b className=" text-xl lg:text-2xl">Title</b> : {data.title} </p>
          </div>

          <div className="text-lg  lg:text-base mt-3  hover:shadow-md transition-all duration-300">
          <p><b className="text-2xl">Description</b>:  {data.description}</p>
          </div>

          <div className="text-lg  lg:text-base mt-3  hover:shadow-md transition-all duration-300">
          <p><b className="text-2xl">Tools</b>: {capitalizeFirstLetters(data.skill)}</p>
          </div>


          <div className="flex text-lg items-end  lg:text-base mt-3 bottom-5">
          <a href={`http://localhost:3002/posts/${data.path}`} className="flex gap-2">Learn more <FaFilePdf /></a>
          </div>

          </section>
        )})}
        </section>

        
      </motion.div>
    </Layout>
  );
}

export default Works;
