import React from "react";

function Card() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="flex justify-center items-center gap-30 md:flex-row flex-col">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front flex flex-col items-center justify-center text-center">
                <img src="/src/assets/Wordpress.gif" alt="" className="w-15 h-15 mx-auto" />
                 <h1 className="title text-white">Wordpress & Woocomerence</h1>
            </div>
            <div className="flip-card-back">
              <p>Developing custom WordPress themes and WooCommerce stores with advanced functionality. Creating custom plugins, payment integrations, and optimizing database performance. Building secure, scalable e-commerce solutions with custom product variations.</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front flex flex-col items-center justify-center text-center">
              <img src="/src/assets/Shopify.gif" alt="" className="w-15 h-15 mx-auto"  />
              <h1 className="title text-white">Shopify</h1>
            </div>
            <div className="flip-card-back">
              <p>Building custom e-commerce stores using Shopify platform with Liquid templating. Creating responsive themes, integrating payment gateways, and optimizing for conversions. Developing custom apps and enhancing store functionality for better user experience.</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front flex flex-col items-center justify-center text-center">
                <img src="/src/assets/react-23c4d31a.gif" alt="" className="w-15 h-15 mx-auto"  />
              <h1 className="title text-white">React</h1>
            </div>
            <div className="flip-card-back">
              <p>Building modern web applications using React.js and related technologies. Implementing component-based architecture, state management, and optimizing performance for scalable user interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
