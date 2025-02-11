'use client';

import React from 'react'
import { useEffect } from 'react';

function About() {
  useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-up');
              observer.unobserve(entry.target); // Stop observing after the animation is triggered
            }
          });
        }, { threshold: 0.3 }); // Trigger when 30% of the section is visible
    
        sections.forEach((section) => observer.observe(section));
      }, []);

  return (
    <section id="about" className="container mx-auto w-full p-6 shadow-lg flex h-auto">
          <div className="flex flex-col fade-in-section h-auto">
            <h2 className="text-3xl font-bold text-blue-400 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center p-4 md:p-14 lgp-20">
              <div className="w-full md:w-1/2 flex flex-col md:justify-center">
                <p className="mt-4 text-lg">
                  Hi, I&#39;m Nitish! I&#39;m an Electronics and Telecommunication Engineer with a passion for software development.
                  I specialize in building dynamic, user-friendly web applications and have experience with technologies like
                  React, Next.js, Tailwind CSS, and the MERN stack.
                </p>
                <p className="mt-4 text-lg">
                  Outside of coding, I enjoy solving engineering challenges, learning new technologies, and contributing to open-source projects.
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:pl-10">
                <img
                  src="/profilepic.png"
                  alt="Nitish"
                  className="w-52 h-52 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full object-cover animate-float-up-down"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default About