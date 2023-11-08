'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Css
import styles from './programs.module.css'

// Utils
import { list } from '../../utils/programs'

export default function ProgramsMobile() {
  const [display, setDisplay] = useState<number>()

  return (
    <section
      className={`
        section-column
        ${styles.programs_container}
      `}
    >
      <span className='h5'>
        OUR PROGRAMS
      </span>

      <ul
        className={`
          section-column
          ${styles.programs_anchor_container}
        `}
      >
        {list.map((e, index) => {
          const { title, subtitle } = e

          return(
            <li
              key={index}
              className={styles.programs_anchor}
            >
              <label
                htmlFor={`${index}`}
                className={styles.label}
              >
                <input
                  name='radio'
                  id={`${index}`}
                  type='radio'
                  onChange={_ => {
                    setDisplay(index)
                  }}
                />

                <motion.div
                  className={styles.programs_anchor_displayed}
                  animate={{
                    translateY: display === index ? '-100%' : '0%'
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <span className='h1 blue'>
                    {`0${index + 1}`}
                  </span>

                  <span className='h1 white'>
                    {title}
                  </span>
                </motion.div>

                <motion.div
                  className={styles.programs_anchor_hidden}
                  animate={{
                    translateY: display === index ? '-100%' : '0%'
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <span className='h1 black'>
                    {`0${index + 1}`}
                  </span>

                  <span className='h3 black'>
                    {subtitle}
                  </span>

                  <Link href={'/'}>
                    <Image
                      src={'/arrow_circle.svg'}
                      alt='Arrow'
                      width={30}
                      height={30}
                      />
                  </Link>
                </motion.div>
              </label>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
