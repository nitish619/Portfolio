import React from 'react'

function Contact() {
  return (
    <section id="contact" className="container mx-auto h-auto text-white flex flex-col items-center py-16 px-6">
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
  )
}

export default Contact