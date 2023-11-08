import React, { useState } from 'react'
import BlackBird from './works/BlackBird';
import Combinator from './works/Combinator';
import Kabu from './works/Kabu';
import Service from './works/Service';
import { delay, motion } from "framer-motion";
import Tedbree from './works/Tedbree';

function Experience() {
  const [tedbree, setTedbree] = useState(true);
  const [blackBird, setBlackBird] = useState(false)
  const [combinator, setCombinator] = useState(false);
  const [kabu, setKabu] = useState(false);
  const [service, setService] = useState(false);
  
  
  const handleTedbree = () => {
    setTedbree(true);
    setBlackBird(false);
    setCombinator(false);
    setKabu(false);
    setService(false);
  };

  const handleBlackBird = () => {
    setTedbree(false);
    setBlackBird(true);
    setCombinator(false);
    setKabu(false);
    setService(false);
  };

    const handleCombinator = () => {
      setTedbree(false);
      setBlackBird(false);
      setCombinator(true);
      setKabu(false);
      setService(false);
    };

      const handleKabu = () => {
        setTedbree(false);
        setBlackBird(false);
        setCombinator(false);
        setKabu(true);
        setService(false);
      };


         const handleService = () => {
           setTedbree(false);
           setBlackBird(false);
           setCombinator(false);
           setKabu(false);
           setService(true);
           
         };

  return (
    <motion.section
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      //viewport = {{once: true}}
      id="experience"
      className="dark:bg-darkk dark:text-white"
    >
      <div className="mt-16">
        <div className="flex">
          <p className="text-pink">02.</p>
          <h1 className="text-3xl font-semibold mt-2">Experience</h1>
          <div className="w-36 sm:w-60 border-t border-midnight mt-7 mx-4 sm:mx-8 "></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-self-start self-center mt-6">
          <ul className="flex flex-row sm:flex-col">
            <li
              onClick={handleTedbree}
              className={`${
                tedbree
                  ? "border-b-pink sm:border-b-0 sm:border-l-pink text-pink rounded-sm"
                  : "border-b-gray-300 sm:border-b-0 sm:border-l-gray-300 text-midnight"
              }
                border-b-2 sm:border-l-2 bg-transparent hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white py-3 cursor-pointer transition-all duration-300 px-2 sm:px-8`}
            >
              Tedbree
            </li>
            <li
              onClick={handleBlackBird}
              className={`${
                blackBird
                  ? "border-b-pink sm:border-b-0 sm:border-l-pink text-pink rounded-sm"
                  : "border-b-gray-300 sm:border-b-0 sm:border-l-gray-300 text-midnight"
              }
                border-b-2 sm:border-l-2 bg-transparent hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white py-3 cursor-pointer transition-all duration-300 px-2 sm:px-8`}
            >
              BlackBird
            </li>
            <li
              onClick={handleCombinator}
              className={`${
                combinator
                  ? "border-b-pink sm:border-b-0 sm:border-l-pink text-pink rounded-sm"
                  : "border-b-gray-300 sm:border-b-0 sm:border-l-gray-300 text-midnight"
              }
                border-b-2 sm:border-l-2 bg-transparent hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white py-3 cursor-pointer transition-all duration-300 px-2 sm:px-8`}
            >
              YCombinator
            </li>
            <li
              onClick={handleKabu}
              className={`${
                kabu
                  ? "border-b-pink sm:border-b-0 sm:border-l-pink text-pink rounded-sm"
                  : "border-b-gray-300 sm:border-b-0 sm:border-l-gray-300 text-midnight"
              }
                border-b-2 sm:border-l-2 bg-transparent hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white py-3 cursor-pointer transition-all duration-300 px-2 sm:px-8`}
            >
              Kabu
            </li>

            <li
              onClick={handleService}
              className={`${
                service
                  ? "border-b-pink sm:border-b-0 sm:border-l-pink text-pink rounded-sm"
                  : "border-b-gray-300 sm:border-b-0 sm:border-l-gray-300 text-midnight"
              }
                border-b-2 sm:border-l-2 bg-transparent hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white pt-3 sm:pt-0 sm:py-3 cursor-pointer transition-all duration-300 px-2 sm:px-8`}
            >
              A'services
            </li>
          </ul>
          {blackBird && <BlackBird />}
          {combinator && <Combinator />}
          {kabu && <Kabu />}
          {tedbree && <Tedbree />}
          {service && <Service />}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience
