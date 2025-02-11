'use client';

import React, { useState } from 'react';
import { useEffect } from "react";
import { projects } from "../data/index";
import { styles } from '@/utils/style';
import Image from 'next/image';
import github from '@/assets/github.png'

function Projects() {
  const [showAll, setShowAll] = useState(false);

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
    <section id="projects" className="container mx-auto w-full p-6 h-auto">
      <div className="fade-in-section">
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-12 lg:p-20">
          {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg group`}>
            <Image
              src= {project.image}
              alt="Project 1"
              className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
            />
            <a 
              href={project.link}
              target="_blank" 
              className='absolute top-4 right-4 z-10 bg-black rounded-full'>
              <Image
                src = {github}
                alt="Project 1"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-20 group-hover:opacity-60 flex items-center justify-center text-center p-4 md:p-8 lg:p-16 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
              <div className="text-white">
                <h3 className="text-base md:text-lg lg:text-xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
        {projects.length > 3 && (
          <div className='flex items-center justify-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='mt-4 px-4 py-2 bg-gray-800 text-white font-bold rounded-lg transition hover:bg-gray-600'
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects