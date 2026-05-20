import React from 'react'

function Skills() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          My Skills
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <img src="/src/assets/html.png" alt="HTML" className="w-20 h-20" />
          <img src="/src/assets/css.png" alt="CSS" className="w-20 h-20" />
          <img src="/src/assets/scss.png" alt="SCSS" className="w-20 h-20" />
          <img src="/src/assets/Bootstrap.svg" alt="Bootstrap" className="w-20 h-20" />
          <img src="/src/assets/tailwind.png" alt="Tailwind CSS" className="w-20 h-20" />
          <img src="/src/assets/javascript.png" alt="JavaScript" className="w-20 h-20" />
          <img src="/src/assets/reactjs.png" alt="React" className="w-20 h-20" />
          <img src="/src/assets/wordpress.svg" alt="WordPress" className="w-20 h-20" />
          <img src="/src/assets/woocommerce.svg" alt="WooCommerce" className="w-20 h-20" />
          <img src="/src/assets/shopify.svg" alt="Shopify " className="w-20 h-20" />
        </div>
      </div>
    </section>
  )
}

export default Skills
