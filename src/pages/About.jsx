import React from 'react'
import photo from "../assets/photo.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-2 sm:gap-6 dark:bg-darkk dark:text-white"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="text-start mt-20 md:mt-32 flex flex-wrap sm:w-3/4">
          <p className="text-pink">01.</p>
          <h1 className="text-3xl font-semibold mt-2">About Me</h1>
          <div className="w-36 sm:w-60 border-t border-midnight mt-7 mx-4 sm:mx-8 "></div>
          <motion.p
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="text-midnight mt-2"
          >
            Hello! My name is Khalid and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I've had the privilege of working at
            <a href="#" className="text-pink mx-2">
              an advertising agency,
            </a>
            <a href="#" className="text-pink mx-2">
              a start-up,
            </a>
            <a href="#" className="text-pink mx-2">
              a huge corporation,
            </a>
            <a href="#" className="text-pinkmx-2">
              and a student-led design studio.
            </a>
            My main focus these days is building accessible, inclusive products
            and digital experiences at
            <a href="#" className="text-pink mx-2">
              &lt;BlackBird/&gt;
            </a>
            for a variety of clients.
          </motion.p>
        </div>

        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          className="flex-1 self-end sm:self-center relative top-2 md:top-20 p-2 xl:ml-6"
        >
          <img
            src={photo}
            alt="hoto"
            className="w-32 z-10 object-cover absolute hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300"
          />
          <div className="border-pink border-[2px] h-36 w-32 rounded-xl self-center translate-x-2 translate-y-4 "></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 sm:mt-6 max-w-[250px] flex-wrap">
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">01.</span>Figma+
        </motion.a>
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">02.</span>Javscript(E6+)
        </motion.a>
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">03.</span>Typscript
        </motion.a>
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">04.</span>React
        </motion.a>
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">05.</span>Java
        </motion.a>
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.0 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">06.</span>NodeJS
        </motion.a>
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.2 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">07.</span>MongoDB
        </motion.a>
        <motion.a
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.4 }}
          href="#"
          className="hover:text-pink"
        >
          <span className="text-pink">08.</span>WordPress
        </motion.a>
      </div>
    </section>
  );
}

export default About;
