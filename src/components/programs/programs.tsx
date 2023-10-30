'use client'

import { useState } from 'react'

// Css
import styles from './programs.module.css'

// Utils
import { list } from '../../utils/programs'

export default function Programs() {
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
          <li
            key={index}
            className={styles.programs_anchor}
          >
            <div className={styles.programs_anchor_displayed}>
              <span className='h1 blue'>
                {e.index}
              </span>

              <span className='h1 white'>
                {e.title}
              </span>
            </div>

            <div className={styles.programs_anchor_hidden}>
              <span className='h1 black'>
                {e.index}
              </span>

              <span className='h3 black'>
                {e.subtitle}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
