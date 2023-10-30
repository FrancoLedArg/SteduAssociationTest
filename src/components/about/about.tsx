'use client'

// Styles
import styles from './about.module.css'

const stats = [
  {
    title: '45+',
    subtitle: 'Lectures'
  },
  {
    title: '480+',
    subtitle: 'Students'
  },
  {
    title: '14+',
    subtitle: 'Countries'
  }
]

export default function About() {
  return (
    <section className='section-grid'>
      <span className='h5'>
        ABOUT US
      </span>

      <h2 className='h2 white'>
        Some insights about Stedu Association
      </h2>

      <h3 className='h3 off-white'>
        We provide availability and accessibility to STEM education for the future leaders of society.
      </h3>

      <ul className={styles.about_boxes_container}>
        {stats.map((e, index) => (
          <li
            key={index}
            className={styles.about_boxes}
          >
            <span className='h1 white'>
              {e.title}
            </span>

            <span className='h3 off-white'>
              {e.subtitle}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
