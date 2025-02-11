'use client';

import React from 'react';
import { useEffect } from "react";
import { projects } from "../data/index";

function Projects() {
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
    <section id="projects" className="container mx-auto w-full p-6 shadow-lg h-auto">
          <div className="fade-in-section">
            <h2 className="text-3xl font-bold text-blue-400 text-center pt-10">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-12 lg:p-20">
              {projects.map((project) => (
                <div key={project.id} className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src= {project.image}
                  alt="Project 1"
                  className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
                />
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
          </div>
        </section>
  )
}

export default Projects