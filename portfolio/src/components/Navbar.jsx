import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="p-6 flex justify-between text-blue-100 font-mono">
            <div className="text-3xl font-semibold">Jeffrey Anderson</div>
            <div className="space-x-10 text-2xl p-0.5">
                <a href="#home" className="hover:text-slate-500 ">Home</a>
                <a href="#projects" className="hover:text-slate-500">Projects</a>
                <a href="#about" className="hover:text-slate-500">About</a>
                <a href="#contact" className="hover:text-slate-500" >Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar