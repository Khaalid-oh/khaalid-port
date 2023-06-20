import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineCodepen } from "react-icons/ai";

function Left() {
  return (
    <div className="fixed w-10 bottom-0 left-12 flex-col items-center h-80 gap-y-6 hidden xl:flex">
      <a href="https://github.com/Khaalid-oh/" target="_blank">
        <TbBrandGithub
          size={20}
          className="text-midnight hover:text-pink h-5 w-5 transition-all delay-200 ease-in hover:h-6 hover:w-6 cursor-pointer"
        />
      </a>
      <a href="https://www.instagram.com/khaalid_oh/" target="_blank">
        <TbBrandInstagram
          size={20}
          className="text-midnight hover:text-pink h-5 w-5 transition-all delay-200 ease-in hover:h-6 hover:w-6 cursor-pointer"
        />
      </a>

      <a href="https://twitter.com/khaalid_oh" target="_blank">
        <TbBrandTwitter
          size={20}
          className="text-midnight hover:text-pink h-5 w-5 transition-all delay-200 ease-in hover:h-6 hover:w-6 cursor-pointer"
        />
      </a>

      <a href="https://www.linkedin.com/in/khaliid-oh/" target="_blank">
        <FiLinkedin
          size={20}
          className="text-midnight hover:text-pink h-5 w-5 transition-all delay-200 ease-in hover:h-6 hover:w-6 cursor-pointer"
        />
      </a>

      <a href="https://codepen.io/Khaliid-oh" target="_blank">
        <AiOutlineCodepen
          size={20}
          className="text-midnight hover:text-pink h-5 w-5 transition-all delay-200 ease-in hover:h-6 hover:w-6 cursor-pointer"
        />
      </a>

      <span className="bg-midnight w-[1.5px] flex-[1.2]"></span>
    </div>
  );
}

export default Left
