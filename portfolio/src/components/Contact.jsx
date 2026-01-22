import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className='p-10 flex mt-20 text-slate-300 font-plus-jakarta-sans justify-between items-center' id='contact'>
    <div className='text-2xl flex items-center gap-4'>
        Connect with me on
        <a href="https://www.linkedin.com/in/jeffrey392/" 
           className='flex items-center gap-1 text-cyan-400 hover:text-cyan-300 visited:text-violet-400' 
           target='_blank'>
            <FaLinkedin /> <span>LinkedIn</span>
        </a>
        &nbsp;|&nbsp;
        <a href="https://github.com/Jeffrey-Anderson392" 
           className='flex items-center gap-1 text-cyan-400 hover:text-cyan-300 visited:text-violet-400' 
           target='_blank'>
            <FaGithub /> <span>GitHub</span>
        </a>
    </div>
        <div>Developed By Jeffrey Anderson &#169; {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Contact