"use client"

import { useEffect } from "react"

export default function LoginBtn() {
  
  useEffect(() => {
    const con = process.env.NEXT_PUBLIC_NUMBER
    console.log(con);
  }, [])

  return (
    <button onClick={() => console.log('login')}>
      login
    </button>
  )
}
