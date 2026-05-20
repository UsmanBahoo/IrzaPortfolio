import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Banner() {
  // theme removed — using static dark styles

  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto flex min-h-[70vh] max-w-6xl flex-col lg:flex-row items-center gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex-1">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-400 sm:text-base">
            Hey! It's Me
          </h2>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Irza Ramzan
          </h1>
          <h1 className="mt-6 text-2xl font-normal text-gray-300 sm:text-4xl">
            I am{' '}
            <span className="font-semibold text-white">
              <Typewriter
                words={['Frontend Developer']}
                loop={5}
                cursor
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="flex mt-4 gap-2">
            <em className="text-xl mt-2 not-italic text-white">Follow me</em>
            <a href="https://github.com/irzaramzan/">
              <img src="/assets/github-142-svgrepo-com.svg" alt="Github" className="mt-2 rounded-full h-6 w-6 bg-white" />
            </a>
            <a href="https://www.linkedin.com/in/irza-ramzan/">
              <img src="/assets/linkedin-svgrepo-com.svg" alt="Linkedin" className="mt-2 rounded-full h-6 w-6 bg-white" />
            </a>
            <a href="https://leetcode.com/u/irzaramzan/">
              <img src="/assets/leetcode.svg" alt="Leetcode" className="mt-2 rounded-full h-6 w-6 bg-white" />
            </a>
            <a href="https://www.codechef.com/dashboard">
              <img src="/assets/cc-logo.svg" alt="CodeChef" className="mt-2 rounded-full h-6 w-6 bg-white" />
            </a>
          </div>
          {/* Buttons */}
          <div className="bg-gray-900 flex items-center mt-4 gap-2 overflow-x-hidden overflow-y-hidden">
            <a
              href="mailto:irzaramzan624@gmail.com"
              className="rgb-button sm:text-base text-center font-bold py-4 w-40 rounded-full shadow-lg transform transition-transform duration-300 text-white"
            >
              E-Mail
            </a>
            <label className="label">
              <input type="checkbox" className="input" />
              <span className="circle">
                <svg
                  className="icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 19V5m0 14-4-4m4 4 4-4"
                  ></path>
                </svg>
                <div className="square"></div>
              </span>
              <p className={`title resume-title text-white`}>Resume</p>
              <a href='' className="title">Open</a>
            </label>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
            <img src="/assets/Irza.jpeg" alt="Profile" className="rounded-full w-48 h-48 sm:w-56 sm:h-56 object-cover object-top" />
        </div>
      </div>
      <div className='container mx-auto py-10 overflow-hidden'>
        <Swiper 
          className="w-full px-4"
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={4}
          spaceBetween={24}
        >
          <SwiperSlide className="flex items-center justify-center">
            <img className="mx-auto h-15 w-15 object-contain" src="/assets/wordpress.svg" alt="WordPress" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="mx-auto h-15 w-15 object-contain" src="/assets/shopify.svg" alt="Shopify" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="mx-auto h-15 w-15 object-contain" src="/assets/woocommerce.svg" alt="WooCommerce" />
          </SwiperSlide>
           
           <SwiperSlide className="flex items-center justify-center">
            <img className="mx-auto h-15 w-15 object-contain" src="/assets/wix.svg" alt="Wix" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="mx-auto h-15 w-15 object-contain" src="/assets/react.svg" alt="React" />
          </SwiperSlide>

        </Swiper>
       </div>
    </section>
  )
}

export default Banner
