import React from 'react'

function About() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            About Me
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building modern, responsive web experiences
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
           I am a passionate Developer with experience in React.js, Shopify, WordPress, WooCommerce, and Wix development. I specialize in building responsive websites and modern web applications with clean UI, great performance, and user-friendly experiences for businesses and brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Responsive Design</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Fast Performance</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Clean UI</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Cross-Platform</span>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About
