'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

import styled from 'styled-components';

import React from 'react';
import { navVariants, textContainer, textVariant2 } from '../utils/motion';
import styles from '../styles';

const Navbar2 = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    id="pgtop"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        GERIGK TM
      </h2>
      <h2 className="font-extrabold text-[30px] leading-[30px] mr-[9%] text-white">
        Portfolio
      </h2>
      <Container initial="hidden" whileHover="show" animate="hidden" className="flex">
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
        <Link href="/">
          <motion.p
            variants={textContainer}
            className="absolute font-normal text-[20px] text-white text-center uppercase ml-[10px] mt-[-2.5px]"
          >
            {Array.from('Home').map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.p>
        </Link>
      </Container>
    </div>

  </motion.nav>
);

const Container = styled(motion.div)`
  position: relative;
  max-width: 200px;
  cursor: pointer;
`;

export default Navbar2;
