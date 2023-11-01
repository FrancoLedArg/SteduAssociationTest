import Image from "next/image"

// Css
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={'/stedu.svg'}
        alt="Logo"
        width={100}
        height={50}
      />
    </header>
  )
}
