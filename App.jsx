import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let currentYear = new Date().getFullYear();
  let isLoggedIn = false;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      <p isLoggedIn={isLoggedIn}>
        {isLoggedIn ? "Welcome back!" : "Please log in."}
      </p>
    </div>
  )
}

export default App
