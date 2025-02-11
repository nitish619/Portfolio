import React from "react";
import { experiences } from "@/data";
import Image from "next/image";
import { styles } from "@/utils/style";

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-12 px-6">
      <div className="m-4">
      <p className={`${styles.sectionSubText} text-left md:text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-left md:text-center`}>
          Work Experience
        </h2>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute w-1 h-full bg-white md:left-1/2 left-4 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center flex-col ml-6 pl-6 md:ml-0 md:items-start ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
              <div className="absolute md:left-1/2 left-[-40] flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 border-4 border-white shadow-lg z-10 transform md:-translate-x-1/2">
                <Image src={exp.logo} alt={exp.company} width={40} height={40} className="rounded-full" />
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 bg-gray-800 p-6 mt-6 md:mt-0 ml-10 md:ml-0 md:mr-6 rounded-lg shadow-lg border-b-4 text-white">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <h4 className="text-lg font-medium text-gray-300">{exp.company}</h4>  
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                  {(Array.isArray(exp.description) ? exp.description : [exp.description]).map((points, index) => (
                  <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {points}
                  </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400 mt-6">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
