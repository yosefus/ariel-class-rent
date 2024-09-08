import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
     <div>
        <h1>Page Not Found</h1>
        <h2>404</h2>
        <Link href='/'>Home</Link>
    </div>
  )
}
