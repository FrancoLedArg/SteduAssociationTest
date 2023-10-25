'use client'

import Image from 'next/image'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Css
import styles from './programs.module.css'

// Utils
import { list } from '../../utils/programs'

function EachProgram({ data }: { data: any }) {
  const { index, title, subtitle, chars, oursource } = data

  const [display, setDisplay] = useState(false)

  const handleCheck = async () => {
    setDisplay(!display)
    console.log('displayed', display)
  }

  const variants = {
    open: { height: 'auto' },
    closed: { height: 0 },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <motion.li
      className={styles.programs_anchor}
      animate={{ height: 'auto' }}
      transition={{
        duration: 0.2
      }}
    >
      <span className={`blue ${styles.index}`}>
        {index}
      </span>

      <span className={`white ${styles.name}`}>
        {title}
      </span>

      <label
        htmlFor={title}
        className={styles.label}
      >
        <Image
          src={'/expand.svg'}
          alt='Logo'
          width={50}
          height={50}
        />

        <input
          id={title}
          type="checkbox"
          onChange={handleCheck}
        />
      </label>

      <motion.div
        className={styles.content}
        animate={display ? 'open' : 'closed'}
        variants={variants}
      >
        <AnimatePresence initial={false}>
          {display && (
            <>
              <motion.span
                className={`
                  off-white
                  ${styles.subtitle}
                `}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ delay: 0.3 }}
              >
                {subtitle}
              </motion.span>

              <motion.ul
                className={`
                white
                `}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ delay: 0.4 }}
              >
                {chars.map((e: string, index: number) => (
                  <motion.li
                    key={index}
                  >
                    {e}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.span
                className={`
                white
                `}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ delay: 0.5 }}
              >
                {oursource}
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  )
}

export default function Programs() {
  return (
    <section
      className={`
        section-column
        ${styles.programs_container}
      `}
    >
      <h5>
        OUR PROGRAMS
      </h5>

      <ul
        className={`
          section-column
          ${styles.programs_anchor_container}
        `}
      >
        {list.map((e, index) => (
          <EachProgram key={index} data={e}/>
        ))}
      </ul>
    </section>
  )
}
