import React from 'react'
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    // function to handle smooth scrolling
    const handleclick = (e, target) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // close menu on link click
    }

  return (
    <div id='home'>
        <nav className="p-6 flex justify-between text-slate-100 font-plus-jakarta-sans">
            <div className="text-2xl font-semibold">Jeffrey Anderson</div>
            <div className="space-x-8 text-lg">
                <a href="#home" className="hover:text-cyan-400 " onClick={(e) => handleclick(e, 'home')}>Home</a>
                <a href="#about" className="hover:text-cyan-400" onClick={(e) => handleclick(e, 'about')}>About</a>
                <a href="#projects" className="hover:text-cyan-400" onClick={(e) => handleclick(e, 'projects')}>Projects</a>
                <a href="#contact" className="hover:text-cyan-400" onClick={(e) => handleclick(e, 'contact')}>Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar