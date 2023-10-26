'use client'

import Link from 'next/link'

// Css
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.contact}>
        <span className='h5 white'>
          CONTACT US
        </span>

        <h1 className='h1 black'>
          Get involved in
          <br />
          our mission
        </h1>

        <nav>
          <Link
            href={'https://steduhq.beehiiv.com/subscribe'}
            className='h5 white'
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </Link>

          <Link
            href={'https://lnkd.in/gqM__peq'}
            className='button-dark'
          >
            Join the team
          </Link>

          <Link
            href={'https://hcb.hackclub.com/donations/start/stedu-association'}
            className='h5 white'
          >
            CONTRIBUTE TO OUR MISSION
          </Link>
        </nav>

      </div>


      <div className={styles.footer}>
        <span>
          © 2023 Stedu Association, all rights reserved
        </span>
      </div>
    </footer>
  )
}
