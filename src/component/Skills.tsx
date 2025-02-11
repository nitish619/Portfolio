import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGit, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiTypescript, SiMysql, SiCss3 } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
    { name: "MERN Stack", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-yellow-300 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Git", icon: <FaGit className="text-orange-500 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-400 text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
  ];

  return (
    <section id="skills" className="container mx-auto w-full py-16 h-auto flex flex-col items-center">
          {/* <h2 className="text-4xl font-bold text-blue-400 text-center mb-10">Skills</h2> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 p-6 justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-slate-800 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-400">
                {skill.icon}
                <p className="mt-2 text-white font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Skills