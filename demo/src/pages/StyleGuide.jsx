import React from 'react'

function StyleGuide() {
  return (
    <section className="dark:bg-darkk dark:text-white">
      <div className="flex flex-col mt-16 items-center justify-center">
        <h3 className="text-2xl font-bold">Style Guide</h3>
        <p className="text-pink">Colors</p>
      </div>
      <div className="flex flex-col mt-2 md:mt-4 items-center justify-cente">
        <p className="md:w-3/4">
          A style guide is a document that a UX designer creates to document a
          growing and ever-evolving set of design guidelines that arise from the
          design process.
        </p>
        <div className="md:flex gap-10 md:mt-4">
          <div className="flex flex-col gap-y-3 self-start mt-8 items-center">
            <div className="bg-[#200937] w-24 h-24 rounded-full shadow-2xl dark:border border-midnight hover:-translate-y-2 transition-transform duration-300"></div>
            <p className="text-midnight ">#200937</p>
          </div>
          <div className="flex flex-col gap-y-3 self-start mt-8 items-center">
            <div className="bg-pink w-24 h-24 rounded-full shadow-2xl hover:-translate-y-2 transition-transform duration-300"></div>
            <p className="text-midnight">#9C27B0</p>
          </div>
          <div className="flex flex-col gap-y-3 self-start mt-8 items-center">
            <div className="bg-midnight w-24 h-24 rounded-full shadow-2xl hover:-translate-y-2 transition-transform duration-300"></div>
            <p className="text-midnight">#9C27B0</p>
          </div>
          <div className="flex flex-col gap-y-3 self-start mt-8 items-center">
            <div className="bg-white w-24 h-24 rounded-full shadow-2xl hover:-translate-y-2 transition-transform duration-300"></div>
            <p className="text-midnight">#FFFFF</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <p className="text-pink mt-4 self-center text-xl">Typography</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex self-start flex-col gap-[5px] mt-4">
            <p className="text-xl">Name</p>
            <p className="text-5xl">Heading 1</p>
            <p className="text-4xl">Heading 1</p>
            <p className="text-3xl">Heading 1</p>
            <p className="text-2xl">Heading 1</p>
            <p className="text-xl">Heading 1</p>
          </div>

          <div className="flex self-start flex-col gap-[5px] mt-4 md:ml-20">
            <div className="flex flex-col gap-4">
              <p className="text-xl ">Size</p>
              <p className="text-xl">48px</p>
              <p className="text-xl">36px</p>
              <p className="text-xl">30px</p>
              <p className="text-xl">24px</p>
              <p className="text-xl">20px</p>
            </div>
          </div>
          <div className="flex self-start flex-col gap-[5px] mt-4 md:ml-28">
            <div className="flex flex-col gap-4">
              <p className="text-xl ">Height</p>
              <p className="text-xl">140%</p>
              <p className="text-xl">140%</p>
              <p className="text-xl">140%</p>
              <p className="text-xl">140%</p>
              <p className="text-xl">140%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StyleGuide
