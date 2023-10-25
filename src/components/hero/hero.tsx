'use client'

import Link from "next/link"
import Image from "next/image"

// Css
import styles from './hero.module.css'

export default function Hero() {
  return (
    <section
      className={`
        section-column
        ${styles.hero_container}`
      }
    >
      <h5>
        STEDU ASSOCIATION
      </h5>

      <h1 className="white">
        Providing <span className={styles.oval}>
          STEM
          <Image
            src={'/oval.svg'}
            alt="Oval"
            width={20}
            height={20}
          />
        </span> education
        <br />
        and opportunities for all
      </h1>

      <h3 className="off-white">
        From California and South Korea, since 2020. This is a dummy subtitle btw.
      </h3>

      <Link
        href={'/'}
        className={styles.button}
      >
        <span>Our Programs</span>
      </Link>
    </section>
  )
}
