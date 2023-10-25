import Image from 'next/image'

// Css
import styles from './sponsors.module.css'

const logos = [
  {
    img: '/google.svg',
    alt: 'Google'
  },
  {
    img: '/canva.svg',
    alt: 'Canva'
  },
  {
    img: '/crimson.svg',
    alt: 'Crimson'
  },
  {
    img: '/fibery.svg',
    alt: 'Fibery'
  }
]

export default function Sponsors() {
  return (
    <section className='section-row'>
      {logos.map((e, index) => (
        <Image
          key={index}
          src={e.img}
          alt={e.alt}
          width={50}
          height={50}
          className={styles.sponsor_images}
        />
      ))}
    </section>
  )
}
