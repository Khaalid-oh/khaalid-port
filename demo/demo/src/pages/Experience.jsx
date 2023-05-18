import React, { useState } from 'react'
import BlackBird from './works/BlackBird';
import Combinator from './works/Combinator';
import Kabu from './works/Kabu';
import Service from './works/Service';
import Byc from './works/Byc';

function Experience() {
  const [blackBird, setBlackBird] = useState(true)
  const [combinator, setCombinator] = useState(false);
  const [kabu, setKabu] = useState(false);
  const [byc, setByc] = useState(false);
  const [service, setService] = useState(false);
   

  const handleBlackBird = () => {
    setBlackBird(true);
    setCombinator(false);
    setKabu(false);
    setByc(false);
    setService(false);
  };

    const handleCombinator = () => {
      setBlackBird(false);
      setCombinator(true);
      setKabu(false);
      setByc(false);
      setService(false);
    };

      const handleKabu = () => {
        setBlackBird(false);
        setCombinator(false);
        setKabu(true);
        setByc(false);
        setService(false);
      };

        const handleByc = () => {
          setBlackBird(false);
          setCombinator(false);
          setKabu(false);
          setByc(true);
          setService(false);
        };

         const handleService = () => {
           setBlackBird(false);
           setCombinator(false);
           setKabu(false);
           setByc(false);
           setService(true);
           
         };

  return (
    <section id="experience" className="dark:bg-darkk dark:text-white">
      <div className="mt-16">
        <div className="flex">
          <p className="text-pink">02.</p>
          <h1 className="text-3xl font-semibold mt-2">Experience</h1>
          <div className="w-36 sm:w-60 border-t border-midnight mt-7 mx-4 sm:mx-8 "></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-self-start self-center mt-6">
          <ul className="flex flex-row sm:flex-col">
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
              Combinators
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
              onClick={handleByc}
              className={`${
                byc
                  ? "border-b-pink sm:border-b-0 sm:border-l-pink text-pink rounded-sm"
                  : "border-b-gray-300 sm:border-b-0 sm:border-l-gray-300 text-midnight"
              }
                border-b-2 sm:border-l-2 bg-transparent hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white py-3 cursor-pointer transition-all duration-300 px-2 sm:px-8`}
            >
              BYC
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
          {byc && <Byc />}
          {service && <Service />}
        </div>
      </div>
    </section>
  );
}

export default Experience
