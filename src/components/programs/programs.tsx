'use client'

import { useState } from 'react'

// Css
import styles from './programs.module.css'

// Utils
import { list } from '../../utils/programs'

function EachProgram({ data }: { data: any }) {
  const { index, title, subtitle } = data

  const [display, setDisplay] = useState(false)

  const handleCheck = async () => {
    setDisplay(!display)
    console.log('displayed', display)
  }

  return (
    <li className={styles.programs_anchor}>
      <span className='h1 blue'>
        {index}
      </span>

      <span className='h1 white'>
        {title}
      </span>
    </li>
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
          <EachProgram key={index} data={e}/>
        ))}
      </ul>
    </section>
  )
}
