import React from "react";
import c from "./ShowBlog.module.css";
import ToText from "../../utils/ToText";
import moment from "moment";
import { Link } from "react-router-dom";
import { withRouter } from "../../utils/WithRouter";
import { motion } from "framer-motion";

function ShowBlog(props, p) {
  console.log(`props is ${props}`);
  return (
    // <div className={`col-md-4 col-sm-6 col-xs-12 ${c.grid}`}>
    //   <div className={c.cardsmall}>
    //     <div
    //       className={c.cardpost__image}
    //       style={{ backgroundImage: `url(${props.thumbnail})` }}
    //     >
    //       <div className={c.authorimg}>
    //         <a
    //           href={props.profileurl}
    //           rel="noopener noreferrer"
    //           target="_blank"
    //           style={{ backgroundImage: `url(${props.avtar})` }}
    //           className="text-white"
    //         >
    //           Written By Falilat
    //         </a>
    //       </div>
    //     </div>


    <div className="md:w-[48%]">
   

        <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration: 1.5
        }}
        className="bg-[#282b2d] shadow-2xl px-10 py-5 rounded-lg w-" >

        <div className={c.authorimg}>
        <a
          href={props.profileurl}
          rel="noopener noreferrer"
          target="_blank"
          style={{ backgroundImage: `url(${props.avtar})` }}
          className="text-white"
        >
          Written By Falilat
        </a>
      </div>


        
          <h5 className="card-title w-full mt-10">
            <Link to={props.link} className={c.textfiordblue}>
              {props.title}
            </Link>
          </h5>

          <p className="block overflow-hidden max-h-[4.6em] font-sans font-medium text-[1.3rem] text-gray-700"> {`${ToText(props.description)} Read more ...`}</p>

          <span className=" text-dark flex gap-3 mt-5">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20} 
              height={20}
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
           <p className=" text-lg">{props.author} </p> 
          </span>

          <span className="text-muted flex gap-3 mt-">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="calendar-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20} 
              height={20}
            >
              <path
                fill="currentColor"
                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            <p className="text-lg">{moment(props.pubDate).format("MMM DD, YYYY hh:mm")}</p>
          </span>
        </motion.div>
      </div>
    // </div>
  );
}

export default withRouter(ShowBlog);
