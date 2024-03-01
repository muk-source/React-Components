import React from 'react'
import { useTheme } from '../theme-context'

export default function Home() {
    const {theme,toggleTheme} = useTheme()
    console.log("theme",theme)
  return (
    <div>
        <h1>Home</h1>
        <button onClick={toggleTheme}>change</button>
    </div>
  )
}
