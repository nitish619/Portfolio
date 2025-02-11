import React from 'react';
import backgrdImg from '@/assets/herobgimg.png'

function Hero() {
  console.log("Background Image Path:", backgrdImg);

  return (
    <section 
      className=" mx-auto flex flex-col md:flex-row items-center h-auto md:h-screen text-white"
      style={{
        backgroundImage : `url(${backgrdImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container flex flex-col md:text-left my-4 bg-opacity-50 p-6 rounded-lg">
        <p className="mt-16 text-lg">
          Hi, I&#39;m
        </p>
        <h1 className="text-5xl md:text-8xl mt-4 font-bold text-blue-600 flex gap-1 cursor-pointer">
          {["N", "I", "T", "I", "S", "H"].map((letter, index) => (
            <span key={index} className={`letter inline-block transition-transform duration-300 ${index % 2 === 0 ? "hover:rotate-12" : "hover:-rotate-12"}  hover:scale-110`}>
              {letter}
            </span>
          ))}
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold mt-4 md:mt-8 md:w-2/3">Electronics & Telecomm. Engineer.</h2>
        <div className="flex mt-6 md:mt-10 justify-center md:justify-start">
          <p className="my-4 text-lg w-full md:w-2/3">
            Outside of coding, I enjoy solving engineering challenges, learning new technologies, and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero