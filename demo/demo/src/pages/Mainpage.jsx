import React from 'react';
import Experience from "./Experience";
import Achieve from "./Achieve";
import Chart from "./Chart";
import StyleGuide from "./StyleGuide";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Left from "./Left";
import Right from "./Right";
import BG from "./BG";
import BG2 from "./BG2";
import About from './About';
import Contact from './Contact';
import { delay, motion } from "framer-motion";

function Mainpage() {
  return (
    <div className="h-screen flex flex-col  dark:bg-darkk dark:text-white">
      <main className="flex-1  dark:bg-darkk dark:text-white">
        <Header />
        <Left />
        <Right />
        <BG />

        <div className="mx-auto max-w-4xl px-4 dark:bg-darkk dark:text-white">
          <Hero />
          <About />
          <Experience />
          <Achieve />
          <Chart />
          <StyleGuide />
          <Contact/>
          <Footer />
        </div>
        <BG2 />
      </main>
    </div>
  );
}

export default Mainpage;
