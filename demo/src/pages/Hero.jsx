import React from 'react'
import { delay, motion } from "framer-motion";



function Hero() {
  return (
    <section id='hero' className="text-start mt-24 md:mt-32">
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="text-pink"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="text-4xl sm:text-6xl font-semibold mt-2 xl:mt-3"
      >
        Khalid Sulyman.
      </motion.h1>
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="text-4xl sm:text-6xl font-semibold text-midnight mt-2 xl:mt-3"
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="text-midnight mt-2 xl:mt-3 sm:w-3/4"
      >
        I’m a Lagos-based software engineer who specializes in building (and
        occasionally designing) exceptional digital experiences. Currently, I’m
        an engineer at
        <a
          href="#"
          className="text-pink hover:text-darkk dark:hover:text-white mx-2"
        >
          &lt;BlackBird/&gt;
        </a>
        focused on building accessible, human-centered products.
      </motion.p>
      <a href="https://www.linkedin.com/in/khaliid-oh/" target="_blank">
        <motion.button className="border border-pink items-center w-36 h-8 mt-4 xl:mt-6 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-600 transition-all delay-75 ease-in">
          Get In touch
        </motion.button>
      </a>
    </section>
  );
}

export default Hero
