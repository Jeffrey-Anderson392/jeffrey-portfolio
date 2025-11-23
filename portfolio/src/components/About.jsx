import React from 'react'

const About = () => {
  return (
    
    <section id="about" className="mt-44 px-6 font-plus-jakarta-sans">
      {/* Section title */}
      <h2 className="text-4xl font-semibold mb-8 px-24 text-slate-100">About Me</h2>

      {/* Two-column responsive layout: stacks to 1 column on small screens. text left, image right */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-slate-200">
        {/* paragraph section about me */}
        <div className="text-lg leading-relaxed">
          <p class="mb-4"> 
            Hello! I am Jeffrey and I'm a passionate developer with a genuine love for coding, data, and technology. I got into programming my freshman year when I decided to major in Computer Science. I am very happy I made that choice! 
            Since then, I've worked on a mix of software development and data-focused projects. I have mostly worked on web apps, data engineering projects, and anything that lets me build something cool or useful while learning along the way. 
          </p> 
          <p class="mb-4"> 
            I'm currently studying Computer Science, and outside of classes I spend a lot of time learning about new tools and exploring topics like data analytics, full-stack development, and AI/ML. 
            My interests have shifted as I grow, but lately I've been especially drawn to AI/ML, data engineering, and building clean, modern applications.
          </p> 
          <p class="mb-4"> 
            My skillset is pretty flexible, like I don't force myself into one language or framework. I like picking a new or best tool for the job, learning it, and then building something meaningful with it. 
            One of my biggest strengths as a developer is my willingness to learn. I'm not afraid to dive into unfamiliar territory, break things, fix them, and repeat the cycle until everything works the way I want it to.
          </p> 
          <p class="mb-4"> 
            Outside of tech, you'll usually find me playing video games, hanging out with friends, golfing, or listening to music. I'm big on self-improvement, staying curious, and trying to learn something new every day, whether it's related to programming or not. 
          </p> 
          <p> 
            If you ever want to connect, feel free to reach out through LinkedIn or check out some of my work on GitHub. I'm always excited to meet new people, share ideas, and keep growing as a developer. 
          </p>
        </div>

        {/* Image from the public folder */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/PhotoOfMe.jpg"
            alt="Photo of Me"
            className="rounded-xl shadow-lg w-96 h-88 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About