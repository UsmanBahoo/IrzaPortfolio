import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mx-auto flex justify-between items-center h-16 bg-gray-900 text-white px-4 relative">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Frontend Develoepr</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Skill</li>
          <li className="cursor-pointer hover:text-gray-300">Project</li>
          <li className="cursor-pointer hover:text-gray-300">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white px-4 py-4 md:hidden">

            <ul className="flex flex-col gap-4">
              <li onClick={() => setIsOpen(false)}>Home</li>
              <li onClick={() => setIsOpen(false)}>About</li>
              <li onClick={() => setIsOpen(false)}>Skill</li>
              <li onClick={() => setIsOpen(false)}>Project</li>
              <li onClick={() => setIsOpen(false)}>Testimonials</li>
              <li onClick={() => setIsOpen(false)}>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;