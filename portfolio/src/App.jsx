import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-800 to-neutral-950">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
