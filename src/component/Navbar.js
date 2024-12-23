import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menu, setMenu] = useState("/");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setMenu(window.location.pathname);

    const handleScroll = () => {
      setScroll(window.scrollY > 125);
    };
    	
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => (menu === path ? "bg-customLime px-4 py-1 " : "");

  return (
    <div className="flex flex-wrap justify-between items-center mt-10 px-28 lg:px-8">
      <a href="/">
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="logo" className="w-9 h-9 lg:w-7 lg:h-7" />
          <p className="text-5xl font-bold lg:text-3xl">Positivus</p>
        </div>
      </a>

      <nav className="flex flex-wrap items-center mt-4 gap-8 text-xl xl:gap-4 md:hidden">
        <a href="/about" onClick={() => setMenu("/about")} className={`hover:underline rounded-lg ${isActive("/about")}`}>
          About us
        </a>
        <a href="/service" onClick={() => setMenu("/service")} className={`hover:underline rounded-lg ${isActive("/service")}`}>
          Services
        </a>
        <a href="/usecase" onClick={() => setMenu("/usecase")} className={`hover:underline rounded-lg ${isActive("/usecase")}`}>
          Use Cases
        </a>
        <a href="/price" onClick={() => setMenu("/price")} className={`hover:underline rounded-lg ${isActive("/price")}`}>
          Pricing
        </a>
        <a href="/blog" onClick={() => setMenu("/blog")} className={`hover:underline rounded-lg ${isActive("/blog")}`}>
          Blog
        </a>

        <button className="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white lg:px-5 lg:py-2">
          Request a quote
        </button>
      </nav>

      <div className="hidden md:flex">
        <GiHamburgerMenu className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-customLime text-white z-50 p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-black">Menu</p>
            <IoMdClose className="cursor-pointer text-black" onClick={toggleSidebar} />
          </div>
          <a
            href="/about"
            onClick={() => setMenu("/about")}
            className={`text-black hover:underline text-xl font-semibold ${isActive("/about")}`}
          >
            About us
          </a>
          <a
            href="/service"
            onClick={() => setMenu("/service")}
            className={`text-black hover:underline text-xl font-semibold ${isActive("/service")}`}
          >
            Services
          </a>
          <a
            href="/usecase"
            onClick={() => setMenu("/usecase")}
            className={`text-black hover:underline text-xl font-semibold ${isActive("/usecase")}`}
          >
            Use Cases
          </a>
          <a
            href="/price"
            onClick={() => setMenu("/price")}
            className={`text-black hover:underline text-xl font-semibold ${isActive("/price")}`}
          >
            Pricing
          </a>
          <a
            href="/blog"
            onClick={() => setMenu("/blog")}
            className={`text-black hover:underline text-xl font-semibold ${isActive("/blog")}`}
          >
            Blog
          </a>
          <button className="text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white">
            Request a quote
          </button>
        </div>
      )}

      <IoIosArrowUp
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={`${
          scroll ? "flex" : "hidden"
        }  fixed bottom-10 right-5 p-1 cursor-pointer h-[40px] w-[40px] rounded-full bg-customLime md:right-px md:h-[30px] md:w-[30px]`}
      />
    </div>
  );
};

export default Navbar;
