import React, { useState, useEffect, useRef } from "react";
import Clock from "./Clock";
import logo from "../../assets/images/logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-full fixed px-5 flex justify-between items-center bg-black text-white z-50">
      <img src={logo} alt="Logo" className="w-12 md:w-20 lg:w-24" />{" "}
      {/* visible on small devices*/}
      <button
        className="sm:hidden text-3xl text-white absolute right-5"
        onClick={toggleMenu}
      >
        ☰
      </button>
      {/* Navbar for Desktop */}
      <div className="flex justify-between items-center gap-5 md:text-xl text-xs">
        <ul className="hidden sm:flex gap-2 md:gap-5">
          <li>
            <a
              href="#header"
              className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
        <Clock />
      </div>
      {/* Navbar for Mobile */}
      <div
        ref={menuRef}
        className={`sm:hidden absolute top-0 right-0 w-3/5 h-screen bg-[#262626] p-5 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "transform-none" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-5xl text-[#ff004f]"
          onClick={closeMenu}
        >
          × {/* Close button */}
        </button>
        <div className="mt-25 mx-2 text-2xl  ">
          <ul className="flex flex-col gap-4 ">
            <li>
              <a
                href="#header"
                className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
                onClick={closeMenu} 
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
                onClick={closeMenu} 
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
                onClick={closeMenu} 
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="no-underline relative after:block after:w-0 after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-1.5 transition-all duration-500 hover:after:w-full"
                onClick={closeMenu} 
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
