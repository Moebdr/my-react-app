import banner from "../assets/tiger.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 p-4 sticky top-0 z-50 lg:shadow-lg lg:shadow-blue-700/20">
      <button className="fixed  rounded-[10px] top-[50%] right-[-5px]  p-3 bg-white text-center"><i className="fas fa-gear animate-spin"></i></button>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-white text-3xl md:text-4xl">
          <i className="fab fa-angrycreative"></i>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center font-bold text-white">
          {["Home", "Services", "Profile", "Contact", "News"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-blue-500 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none hover:text-blue-500"
        >
          <i className={isOpen ? "fas fa-times hover:text-red-600" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? " opacity-100" : "max-h-0 opacity-0"
        } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-2 mt-4 text-white">
          {["Home", "Services", "Profile", "Contact","News"].map((item) => (
            <li key={item} className="border-b border-white/10">
              <a
                href="#"
                className="block py-3 px-4 hover:bg-blue-600 transition-colors text-center"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="relative w-full">
      <Nav />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[520px] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 z-20 flex items-center px-6 md:px-12">
          <div className="w-1/2 md:w-1/2 lg:w-1/3 ">
            <motion.h1
              className="font-extrabold text-white text-3xl md:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              WALK ALONE AND DON'T LOOK AROUND
            </motion.h1>
            <p className="text-blue-400 mt-4 font-bold tracking-widest text-sm md:text-base">
              SEARCH FOR COMPANY
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          src={banner}
          alt="Banner"
          className=" aspect-video object-cover w-full h-full"
        />
      </section>
    </header>
  );
}

export default Header;
