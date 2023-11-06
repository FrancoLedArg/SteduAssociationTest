'use client'

import Link from "next/link"
import { motion } from "framer-motion"

// Css
import styles from './hero.module.css'

function AnimatedSVG ({ index } : { index: number }) {
  const i = index

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 1.5,
            bounce: 0
          },
          opacity: {
            delay,
            duration: 0.01,
          }
        }
      }
    }
  }

  return (
    <motion.svg
      viewBox="0 0 710 25"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      className={styles.svg}
    >
      <motion.path
        d="M5 13.3092C95.935 -13.0243 90.9386 33.4786 176.877 13.3092C262.816 -6.8602 275.807 34.7981 355.25 13.3092C434.693 -8.17967 445.685 29.9715 531.124 13.3092C616.563 -3.3531 619.061 34.6409 705 13.3092"
        stroke="url(#gradient)"
        variants={draw}
        custom={i}
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="12.624"
          y1="8.72022"
          x2="684.488"
          y2="8.72184"
          gradientUnits="userSpaceOnUse"
        >
        <stop stopColor="#20B4E2" />
        <stop offset="1" stopColor="#0050EC" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section
      className={`
        section-column
        ${styles.hero_container}
      `}
    >
      <h1 className='h1 white'>
        Providing <span className={styles.underline}>
          STEM education
          <AnimatedSVG index={1}/>
          </span>
        <br />
        <span className={styles.underline}>
          and opportunities
          <AnimatedSVG index={2}/>
        </span> for all
      </h1>

      <h3 className='h3 off-white'>
        From California and South Korea, since 2020.
        <br />
        This is a dummy subtitle btw.
      </h3>

      <Link
        href={'/'}
        className='button-light'
      >
        <span className="white">
          Our Programs
        </span>
      </Link>
    </section>
  )
}
