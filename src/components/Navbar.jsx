import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-10">
      
      {/* Logo */}
      <div className="logo">
        <img className="h-10" src="/images/nike-logo.png" alt="Nike Logo" />
      </div>

      {/* Nav Links */}
      <div className="navlinks bg-black/10 flex backdrop-blur-md px-10 py-3 rounded-full  border border-white/10 items-center gap-8">
        <a 
          href="#" 
          className="bg-white text-black py-2 px-5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
        >
          Home
        </a>
        <a 
          href="#" 
          className="text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
        >
          About
        </a>
        <a 
          href="#" 
          className="text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
        >
          Pricing
        </a>
        <a 
          href="#" 
          className="text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
        >
          Contact
        </a>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="text-white text-xl bg-white/10 hover:bg-white/20 py-2 px-3 rounded-full transition-all duration-300 hover:scale-110">
          <i className="ri-search-line"></i>
        </button>
        <button className="text-white text-xl bg-white/10 hover:bg-white/20 py-2 px-3 rounded-full transition-all duration-300 hover:scale-110">
          <i className="ri-shopping-bag-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
