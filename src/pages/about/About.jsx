import React from "react";
import styles from "./About.module.css";
import Layout from "../../component/layout/Layout";  
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AutomaticType from "../../component/AutomaticType"
import { TypeAnimation } from "react-type-animation"



function About() {
  return (
    <Layout>
      <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        delay: 0.2,
        duration: 1.5
      }}
      className={styles.root}>
        <div className="mt-5">
          <p className="text-4xl font-bold"><AutomaticType text= {" Falilat Owolabi "} speed={100} />  </p>
          <p className="text-xl font-bold ">
          Smart contract
          <TypeAnimation
          sequence={[
            ' Auditor',
            1000,
            ' Tester',
            1000,
          ]}
          wrapper="b"
          speed={50}
          repeat={Infinity}
          preRenderFirstString="true"
        />
          </p>






        </div>
        <div className="mt-5">
          <h2>Hello There,</h2>
          <p>
            My name is Falilat, a smart contract Developer, smart contract
            Auditor and a cybersecurity ethusiast. I am passionate about the
            security on the blockchain and keeping smart contract secure from
            attackers. This prompt my high concern for security when building
            smart contracts. For me, as long as technology is concern I will
            keep learning everyday, learning more skills is a hobby for me and
            knowing how to use tools needed for proper audit, I love reading
            code with an attacker mindset which gives me the sight of finding
            vulnerabilitiies in codes (smart contract specific). So I am a
            learner and ready to learn the skils to get the work done.
          </p>
          <p>
            As part of career journey I have had the opportunity to work with
            few people and companies which has improved my growth. I have had
            the opportunity to participate in a smart contract ctf and also one
            of the winners in the programme.
          </p>
          <p>
            Apart from development and Auditing, I also mentor web2 developers
            bridging to web3
            <Link to={"https://web3bridge.com"} className={styles.links}>
              <span>@web3bridge</span>
            </Link>
          </p>
          <p>
            For more details about my Resume and the works I have done
            <Link
              to={
                "https://docs.google.com/document/d/1s4w56rIhC_0xLTx4Cg333fSR91emjB8yLya-Q_pKoJQ/edit?usp=sharing"
              }
              className={styles.links}
            >
              <span>click here</span>
            </Link>
          </p>
        </div>
        <h5>
          Hire me if you find me valuable, I am open to work relating to smart
          contract Development & Auditing
        </h5>
      </motion.div>
    </Layout>
  );
}

export default About;
