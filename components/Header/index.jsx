import Link from 'next/link'
import React from 'react'
import styles from './style.module.css'

export default function Header() {
  return (
     <header className={styles.header}>
        <ul>
           <li>
              <Link href='/'>Home</Link>
           </li>
           <li>
              <Link href='/about'>About</Link>
           </li>
           <li>
              <Link href='/about/me'>Me</Link>
           </li>
        </ul>
    </header>
  )
}
