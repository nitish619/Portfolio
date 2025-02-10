import React from "react";
import { experiences } from "@/data";
import Image from "next/image";
import jagruti from "@/assets/company/jagruti.png";

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-10 text-white">Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute w-1 h-full bg-white md:left-1/2 left-4 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center flex-col ml-6 pl-6 md:ml-0 md:items-start ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
              <div className="absolute md:left-1/2 left-4 flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 border-2 border-white shadow-lg z-10 transform md:-translate-x-1/2">
                <Image src={exp.logo} alt="hello" width={36} height={36} className="rounded-full" />
              </div>
              <div className="w-full md:w-5/12 bg-gray-800 p-6 mt-6 md:mt-0 ml-10 md:ml-0 md:mr-6 rounded-lg shadow-lg text-white">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <h4 className="text-lg font-medium text-gray-300">{exp.company}</h4>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                  {(Array.isArray(exp.description) ? exp.description : [exp.description]).map((points, index) => (
                  <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {points}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
