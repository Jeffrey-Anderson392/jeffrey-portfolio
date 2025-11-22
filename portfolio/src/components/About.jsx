import React from 'react'

const About = () => {
  return (
    
    <section id="about" className="mt-32 px-6 text-slate-100">
      {/* Section title */}
      <h2 className="text-4xl font-semibold mb-8 px-24">About Me</h2>

      {/* Two-column responsive layout:
          - stacks to 1 column on small screens
          - text left, image right on md+ */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="text-lg leading-relaxed">
          <p>
            Hello! My name is Jeffrey Anderson. I am a passionate developer with a love for creating and learning new technologies. I enjoy building web apps with React and experimenting with UI/UX using Tailwind CSS.
          </p>
        </div>

        {/* Image (served from public/) */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/PhotoOfMe.jpg"
            alt="Photo of Me"
            className="rounded-xl shadow-lg w-64 h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About