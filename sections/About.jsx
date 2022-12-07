'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from '../styles'
import { fadeIn, staggerContainer} from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText 
        title="| About Me"
        textStyles="text-center"/>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Hello, I am Lars and I am a Developer and Game Designer. 
        I have a huge love for design, development, voice acting and story-telling and it's communities, especially with game development at Video Game Development Association, 
        where I often led and designed for countless projects along with other talented and amazing developers across all disciplines. 
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[19px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div> 
  </section>
);

export default About;
