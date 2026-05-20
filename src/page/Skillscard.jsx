import React from 'react'

function Skillscard() {
  return (
     <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          {/* Timeline vertical line */}
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 z-0 bg-white/10"></div>

          {[ 
            {
              title: 'Frontend Development',
              period: 'July 2024 - Present',
              icon: '/src/assets/React.Svg',
              position: 'left',
              technologies: 'React.js, Redux-toolkit, Next.js, Tailwind CSS',
              points: [
                'Built dynamic React.js apps with functional components and hooks.',
                'Managed state using Redux-toolkit with actions and reducers.',
                'Built Next.js apps with SSR and static site generation.',
                'Designed responsive layouts using Tailwind CSS utilities.',
                'Created reusable React components with JavaScript.',
                'Optimized Next.js performance with image and code splitting.',
              ],
            },
            {
              title: 'Shopify Development',
              period: 'Sep 2024 - Present',
              icon: '/src/assets/shopify.svg',
              position: 'right',
              technologies: 'Shopify, Liquid, JavaScript, CSS',
              points: [
                'Developed custom Shopify themes using Liquid templating.',
                'Created responsive e-commerce stores with modern designs.',
                'Integrated third-party apps and payment gateways.',
                'Optimized store performance and loading speeds.',
                'Implemented custom checkout processes and cart functionality.',
                'Enhanced SEO and conversion rates for online stores.',
              ],
            },
            {
              title: 'WordPress WooCommerce',
              period: 'Sep 2024 - Present',
              icon: '/src/assets/wordpress.svg',
              position: 'left',
              technologies: 'WordPress, WooCommerce',
              points: [
                'Built custom WooCommerce stores with advanced functionality.',
                'Developed custom WordPress themes and plugins.',
                'Integrated payment gateways and shipping methods.',
                'Optimized database queries for better performance.',
                'Implemented custom product variations and attributes.',
                'Enhanced security with custom authentication systems.',
              ],
            },
            
          ].map((proj, idx) => (
              <div
              key={idx}
              className={`relative mb-12 flex flex-col md:flex-row items-center md:items-start ${
                proj.position === 'left' ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Small screen icon above the card */}
              <div className="block md:hidden mb-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
                  <img src={proj.icon} alt="icon" className="w-6 h-6" />
                </div>
              </div>

              {/* Left side card */}
              {proj.position === 'left' && (
                <div className="md:w-1/2 p-6 mt-10">
                    <div className="rounded-lg shadow-lg p-6 bg-[#020716]">
                      <h1 className="text-2xl font-bold mb-2 text-white">{proj.title}</h1>
                      <h2 className="text-lg font-semibold mb-4 text-sky-200">{proj.technologies}</h2>
                      <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                      {proj.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Timeline Dot and Icon for medium and up */}
              <div className="hidden md:flex z-10 absolute left-1/2 transform -translate-x-1/2 items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg mt-20">
                  <img src={proj.icon} alt="icon" className="w-6 h-6" />
                </div>
                <p
                  className={`text-sm text-gray-400 whitespace-nowrap mt-10 absolute top-1/2 transform -translate-y-1/2 ${
                    idx % 2 === 0 ? 'left-12' : 'right-12 text-right'
                  }`}
                >
                  {proj.period}
                </p>
              </div>

              {/* Right side card */}
              {proj.position === 'right' && (
                <div className="md:w-1/2 p-6 mt-10">
                    <div className="rounded-lg shadow-lg p-6 bg-[#020716]">
                      <h1 className="text-2xl font-bold mb-2 text-white">{proj.title}</h1>
                      <h2 className="text-lg font-semibold mb-4 text-sky-200">{proj.technologies}</h2>
                      <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                      {proj.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              </div>
          ))}
        </div>
      </section>
  )
}

export default Skillscard
