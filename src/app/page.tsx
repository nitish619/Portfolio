'use client';

import { FaReact, FaNodeJs, FaPython, FaGit, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiTypescript, SiMysql, SiCss3 } from "react-icons/si";
import { useEffect } from "react";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
  { name: "MERN Stack", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Git", icon: <FaGit className="text-orange-500 text-4xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-400 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
];

export default function Home() {
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
    <div className="min-h-screen">
      <main>
        <section className="p-6 shadow-lg bg-slate-800 flex items-center h-auto">
        <div className="flex flex-col ml-36">
          <p className="mt-16 text-lg">
                  Hi, I'm
                </p>
            <h1 className="text-8xl mt-10 font-bold text-blue-600">Nitish</h1>
            <h2 className="text-6xl font-bold mt-10 w-2/3">Electronics & Telecomm. Engineer.</h2>
            <div className="flex mt-10">
              <p className="my-8 text-lg w-1/2">
                Outside of coding, I enjoy solving engineering challenges, learning new technologies, and contributing to open-source projects.
              </p>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen bg-slate-600 w-full p-6 shadow-lg flex">
          <div className="flex flex-col fade-in-section">
            <h2 className="text-3xl font-bold text-blue-400 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center p-20">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="mt-4 text-lg">
                  Hi, I'm Nitish! I'm an Electronics and Telecommunication Engineer with a passion for software development.
                  I specialize in building dynamic, user-friendly web applications and have experience with technologies like
                  React, Next.js, Tailwind CSS, and the MERN stack.
                </p>
                <p className="mt-4 text-lg">
                  Outside of coding, I enjoy solving engineering challenges, learning new technologies, and contributing to open-source projects.
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
                <img
                  src="/nitish_profiledp.webp"
                  alt="Nitish"
                  className="w-96 h-96 rounded-full object-cover animate-float-up-down"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-slate-800 w-full p-6 shadow-lg min-h-screen">
          <div className="fade-in-section">
            <h2 className="text-3xl font-bold text-blue-400 text-center pt-10">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
            
              {/* Project 1 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/multiobject.webp"
                  alt="Project 1"
                  className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-20 group-hover:opacity-60 flex items-center justify-center text-center p-16 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Multi object detection and analysis with different sensors</h3>
                    <p className="mt-2">We develop a system that is capable of adjusting light. (Technologies/Tools Used: LiDAR Sensors,
                      IR Sensors, Arduino UNO, Arduino IDE.)</p>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/uart.webp"
                  alt="Project 1"
                  className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-20 group-hover:opacity-60 flex items-center justify-center text-center p-16 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Design and implementation of uart using verilog</h3>
                    <p className="mt-2">UART is designed using Verilog and implemented successfully on Spartan6 FPGA Board. Functionality of UART is demonstrated by interfacing Bluetooth module HC05 and transferring numbers serially from mobile application to LED on FPGA Board with 650 baud rate.</p>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/stm32board.webp"
                  alt="Project 1"
                  className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-20 group-hover:opacity-60 flex items-center justify-center text-center p-16 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Password based security lock system using STM32</h3>
                    <p className="mt-2">Made a security door lock, when the entered password is compared with the known password. This microcontroller is based on the STM32.</p>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/Frost_eommerce.webp"
                  alt="Project 1"
                  className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-20 group-hover:opacity-60 flex items-center justify-center text-center p-16 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">E-commerce website(MERN STACK)</h3>
                    <p className="mt-2">I have built an e-commerce website using the MERN stack for purchasing products online. The platform offers a seamless shopping experience with product browsing, secure checkout, and user-friendly features.</p>
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/nikestore.webp"
                  alt="Project 1"
                  className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-20 group-hover:opacity-60 flex items-center justify-center text-center p-16 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">E-commerce Website (Nike Store)</h3>
                    <p className="mt-2">Designed and developed a dynamic e-commerce website for a Nike store using HTML, CSS, and
                    JavaScript.</p>
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/youtubepage.webp"
                  alt="Project 1"
                  className="w-full h-60 object-cover transition-transform duration-700 ease-in-out opacity-70 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-20 group-hover:opacity-60 flex items-center justify-center text-center p-16 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">YouTube clone</h3>
                    <p className="mt-2">I have develop a YouTube web page clone using HTML and CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-slate-700 w-full py-16 shadow-lg min-h-screen flex flex-col items-center">
          <h2 className="text-4xl font-bold text-blue-400 text-center mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-slate-800 rounded-xl shadow-md transition-transform hover:scale-105">
                {skill.icon}
                <p className="mt-2 text-white font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-slate-800 text-white flex flex-col items-center py-16 px-6">
          <h2 className="text-4xl font-bold text-blue-400 text-center mb-10">
            Contact <span className="text-blue-600">Me</span>
          </h2>

          <form className="w-full max-w-2xl bg-slate-900 p-8 rounded-xl shadow-md">
            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="input-field bg-slate-500 rounded-lg p-4" required />
              <input type="email" placeholder="Email Address" className="input-field bg-slate-500 rounded-lg p-4" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input type="tel" placeholder="Mobile Number" className="input-field bg-slate-500 rounded-lg p-4" />
              <input type="text" placeholder="Email Subject" className="input-field bg-slate-500 rounded-lg p-4" />
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Your Message"
              className="input-field mt-4 h-32 resize-none w-full bg-slate-500 rounded-lg p-4"
            ></textarea>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-4 transition-all">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 text-center">
            <p className="text-lg">
              📧 <a href="mailto:nitishchavan937@gmail.com" className="text-blue-400 hover:underline">nitishchavan937@gmail.com</a>
            </p>
            <p className="mt-2">
              🔗 <a href="https://www.linkedin.com/in/nitish-chavan-983635294" className="text-blue-400 hover:underline">
                linkedin.com/in/nitish
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
