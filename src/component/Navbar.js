import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-wrap justify-between items-center mt-10 px-28 lg:px-8">
      <a href='/' > <div className="flex items-center gap-2">
        <img src="logo.png" alt="logo" className="w-9 h-9 lg:w-7 lg:h-7" />
        <p className="text-5xl font-bold lg:text-3xl">Positivus</p>
      </div></a>

      <nav className="flex flex-wrap items-center gap-10 mt-4 text-xl sm:hidden">
        <a href="/about" className="hover:underline">About us</a>
        <a href="/service" className="hover:underline">Services</a>
        <a href="/usecase" className="hover:underline">Use Cases</a>
        <a href="/price" className="hover:underline">Pricing</a>
        <a href="/blog" className="hover:underline">Blog</a>
        <button className="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white lg:px-5 lg:py-2">
          Request a quote
        </button>
      </nav>

      <div className="hidden sm:flex">
        <MenuIcon className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-lime-300 text-white z-50 p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-black">Menu</p>
            <CloseIcon className="cursor-pointer text-black" onClick={toggleSidebar} />
          </div>
          <a href="/about" className="text-black hover:underline">About us</a>
          <a href="/service" className="text-black hover:underline">Services</a>
          <a href="/usecase" className="text-black hover:underline">Use Cases</a>
          <a href="/price" className="text-black hover:underline">Pricing</a>
          <a href="/blog" className="text-black hover:underline">Blog</a>
          <button className="text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white">
            Request a quote
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
