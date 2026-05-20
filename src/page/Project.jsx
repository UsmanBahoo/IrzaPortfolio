import React from "react";

function Project() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          Project
        </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* Card 1 */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#020716] shadow-md shadow-black/20 backdrop-blur">
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
            alt=""
          />

          <div className="p-6 text-center">
            <span className="bg-sky-400/10 text-sky-300 text-xs px-3 py-1 rounded-md border border-sky-400/20">
              Trending
            </span>

            <h5 className="mt-4 mb-5 text-2xl font-semibold text-white">
              React JS Development
            </h5>

            <button className="bg-sky-500 text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#020716] shadow-md shadow-black/20 backdrop-blur">
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt=""
          />

          <div className="p-6 text-center">
            <span className="bg-sky-400/10 text-sky-300 text-xs px-3 py-1 rounded-md border border-sky-400/20">
              Trending
            </span>

            <h5 className="mt-4 mb-5 text-2xl font-semibold text-white">
              WordPress Website
            </h5>

            <button className="bg-sky-500 text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#020716] shadow-md shadow-black/20 backdrop-blur">
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt=""
          />

          <div className="p-6 text-center">
            <span className="bg-sky-400/10 text-sky-300 text-xs px-3 py-1 rounded-md border border-sky-400/20">
              Trending
            </span>

            <h5 className="mt-4 mb-5 text-2xl font-semibold text-white">
              Shopify Store Design
            </h5>

            <button className="bg-sky-500 text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#020716] shadow-md shadow-black/20 backdrop-blur">
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt=""
          />

          <div className="p-6 text-center">
            <span className="bg-sky-400/10 text-sky-300 text-xs px-3 py-1 rounded-md border border-sky-400/20">
              Trending
            </span>

            <h5 className="mt-4 mb-5 text-2xl font-semibold text-white">
              MERN Stack Project
            </h5>

            <button className="bg-sky-500 text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#020716] shadow-md shadow-black/20 backdrop-blur">
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt=""
          />

          <div className="p-6 text-center">
            <span className="bg-sky-400/10 text-sky-300 text-xs px-3 py-1 rounded-md border border-sky-400/20">
              Trending
            </span>

            <h5 className="mt-4 mb-5 text-2xl font-semibold text-white">
              Responsive UI Design
            </h5>

            <button className="bg-sky-500 text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#020716] shadow-md shadow-black/20 backdrop-blur">
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt=""
          />

          <div className="p-6 text-center">
            <span className="bg-#020716 text-sky-300 text-xs px-3 py-1 rounded-md border border-sky-400/20">
              Trending
            </span>

            <h5 className="mt-4 mb-5 text-2xl font-semibold text-white">
              Frontend Development
            </h5>

            <button className="bg-sky-500 text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Project;