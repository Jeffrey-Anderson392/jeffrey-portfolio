import React from 'react'

const About = () => {
  return (
    <div id="about" className='p-20 flex flex-col mt-32 space-y-6 text-blue-100'>
        <div className="text-4xl font-semibold">About Me</div>
        <div className="max-w-md">
            <img className="rounded-lg" src="../images/PhotoOfMe.jpg" alt="Photo of Me" />
        </div>
    </div>

  )
}

export default About