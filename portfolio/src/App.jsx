import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-700 to-neutral-950">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
