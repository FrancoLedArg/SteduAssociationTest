'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Css
import styles from './programs.module.css'

// Utils
import { list } from '../../utils/programs'

interface Data {
  index: string,
  title: string,
  subtitle: string
}

function Program ({ data }: { data: Data }) {
  const [hover, setHover] = useState(false)

  const { index, title, subtitle } = data

  return(
    <motion.li
      className={styles.programs_anchor}
      onHoverStart={_ => setHover(true)}
      onHoverEnd={_ => setHover(false)}
    >
      <motion.div
        className={styles.programs_anchor_displayed}
        animate={{ translateY: hover ? '-100%' : '0%' }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <span className='h1 blue'>
          {index}
        </span>

        <span className='h1 white'>
          {title}
        </span>
      </motion.div>

      <motion.div
        className={styles.programs_anchor_hidden}
        animate={{ translateY: hover ? '-100%' : '0%' }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <span className='h1 black'>
          {index}
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
    </motion.li>
  )
}

export default function ProgramsDesktop() {
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
        {list.map((e, index) => (
          <Program key={index} data={e}/>
        ))}
      </ul>
    </section>
  )
}
