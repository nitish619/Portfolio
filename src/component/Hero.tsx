import React from 'react'

function Hero() {
  return (
    <section className="container mx-auto p-6 shadow-lg flex flex-col md:flex-row items-center h-auto text-white">
      <div className="flex flex-col md:ml-20 lg:ml-36 md:text-left">
        <p className="mt-16 text-lg">
                Hi, I&#39;m
              </p>
          <h1 className="text-5xl md:text-8xl mt-4 font-bold text-blue-600">Nitish</h1>
          <h2 className="text-3xl md:text-6xl font-bold mt-6 md:mt-10 md:w-2/3">Electronics & Telecomm. Engineer.</h2>
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