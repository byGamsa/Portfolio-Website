'use client';

import { motion } from "framer-motion";

import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16`}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Lars
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        > 
          <h1 className={styles.heroHeading}>Gerigk</h1>   
        </motion.div> 
      </div> 
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1.5)}
        className="relative w-full md:-mt-[20px] -mt-[12px]" 
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[100px] rounded-tr-[100px] z-[0] -top-[30px]"/>
          <img
            src="/IslandGame.png"
            alt="IslandGame"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[100px] rounded-tr-[100px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp2.png"
                alt="stamp2"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a> 
      </motion.div>  
    </motion.div>
       
  </section>
);

export default Hero;
