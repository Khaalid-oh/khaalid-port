import React from "react";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import light from "../assets/light.png";
import dark from "../assets/dark.png";
import { motion } from "framer-motion";

function Header() {
  // const [hover, setHover] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { path: "#about", name: "About" },
    { path: "#experience", name: "Experience" },
    { path: "#work", name: "Work" },
    { path: "#contact", name: "Contact" },
  ];
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  // const handleHover = (val) => {
  //   setHover(val);
  // };

  const handleMobileNavToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMobileNavLinkClick = (path) => {
    window.location.href = path;
    setMobileMenuOpen(false);
  };

  return (
    <header className="">
      <nav
        className="flex items-center justify-between mt-2 p-6 md:p-6 md:mt-0 dark:bg-darkk dark:text-white"
        aria-label="Global"
      >
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          href="#"
          className="lg:flex-[0.4] ml-4"
        >
          <a href="#hero" className="h-8 w-auto xl:h-10 hover:shadow-2xl">
            <img src={logo} alt="logo" />
          </a>
        </motion.a>
        <div className="hidden md:block space-x-8 ml-12">
          {navLinks.map((link, i) => (
            <motion.a
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.3 }}
              href={link.path}
              onMouseEnter={() => handleHover(i)}
              className={` hover:text-pink transition-all delay-50 ease-in-out`}
              key={"navlinks-" + i}
            >
              <span className="text-pink">0{i + 1}.</span> {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-x-4 lg:flex-[0.2] justify-between">
          <motion.img
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            src={isDarkMode ? dark : light}
            alt="dark mode"
            className="h-5 w-auto cursor-pointer"
            onClick={handleDarkModeToggle}
          ></motion.img>
          <a
            href="https://docs.google.com/document/d/1FWBr2aD5qe4wglTmhqI_2grVTQCNrabCTftdAaM1ztc/edit?usp=sharing"
            target="_blank"
          >
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.8 }}
              className="hidden md:block border border-pink px-4 py-1 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-600 transition-all delay-75 ease-in"
            >
              Resume
            </motion.button>
          </a>

          <span className="md:hidden">
            <Bars3Icon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={handleMobileNavToggle}
            />
          </span>
        </div>
        {/*Mobile slide*/}
        <div
          className={`bg-white dark:bg-darkk h-full z-20 w-full fixed overflow-hidden bottom-0 p-7 pt-8 flex flex-col gap-18 md:hidden ${
            mobileMenuOpen ? "right-0" : "right-[-50rem]"
          } transition-all delay-300`}
        >
          <div className="flex justify-between mt-1">
            <a href="#hero" className="lg:flex-[0.4]">
              <img className="h-8 w-auto" src={logo} alt="logo" />
            </a>
            <XMarkIcon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={handleMobileNavToggle}
            />
          </div>
          <div className="flex flex-col gap-y-16 flex-1 items-start mt-12">
            <div className="flex flex-col justify-evenly flex-[0.5] gap-12">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.5 }}
                  href={link.path}
                  className="hover:text-pink transition-all delay-75 ease-in"
                  key={"navlinks-" + i}
                  onClick={() => handleMobileNavLinkClick(link.path)}
                >
                  <span className="text-pink">0{i + 1}.</span> {link.name}
                </motion.a>
              ))}
            </div>
            <motion.a
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
              href="https://docs.google.com/document/d/1ooEUmsNJ4pMZ4jRyLbVykJ6qFp3pTZb5QjGsxJ98RN4/edit?usp=sharing"
              target="_blank"
              className="max-w-min border border-pink px-4 py-1 self-start hover:bg-fuchsia-600 transition-all delay-75 ease-in"
            >
              Resume
            </motion.a>
          </div>
          <a
            href="#"
            className="max-w-min flex self-start whitespace-nowrap gap-x-2 mb-3"
          >
            <span className="hover:text-fuchsia-300 dark:hover:text-fuchsia-200 dark:text-white text-pink">
              Khalid
            </span>
            <span className="dark:text-pink hover:text-midnight dark:hover:text-midnight">
              Sulyman 👨🏽‍💻
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
