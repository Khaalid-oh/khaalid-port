import React from 'react'
import AchieveCards from './AchieveCards';
import { motion } from "framer-motion";




function Achieve() {
  return (
    <motion.section
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      id="work"
      className="dark:bg-darkk dark:text-white"
    >
      <div className="flex flex-col items-center justify-center mt-14">
        <div className="flex ">
          <span className="text-pink">03.</span>
          <h1 className="text-3xl font-semibold mt-2">Featured projects</h1>
        </div>
        <a
          href="https://github.com/Khaalid-oh/"
          className="text-pink hover:text-midnight"
        >
          view the source
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <a href="https://nft-explorer-v-2-1-0.onrender.com/" target="_blank">
          <AchieveCards
            title="NFT X"
            description="Developed an app that fetches the NFT  of a giving address using the Alchemy API. This Project was a technical assestment for Web3 Frontend Engineer role at Altura."
            listItem={["React", "Tailwind", "Alchemy"]}
          />
        </a>
        <a href="https://airbnb-clone-lvb6.vercel.app/" target="_blank">
          <AchieveCards
            title="Airbnb Clone"
            description="A clone of the Airbnb webiste that show lists of apartments on the home page. This is a mock project for a frontend developer role at a listing company."
            listItem={["Next", "Tailwind", "MUI"]}
          />
        </a>

        <a href="https://ats-frontend-challenge2.vercel.app/" target="_blank">
          <AchieveCards
            title="ATS"
            description="An intuitive Frontend design for ATS (Applicant Tracking System)  platform, seamlessly merging talent acquisition with advanced analytics for optimized hiring decisions "
            listItem={["Next", "Tailwind", "Recharts"]}
          />
        </a>

        <a
          href="https://www.figma.com/file/zYFfi3kHAWG11BTgUC7Ggn/HAKATHON?t=90p2LoJrzidur0bx-6"
          target="_blank"
        >
          <AchieveCards
            title="CTS"
            description="Developed a Correspondence Tracking System for an E-Goverment Hackathon with the rest of my team, working majorly on the design and loging page."
            listItem={["Figma", "React", "Node.js"]}
          />
        </a>

        <a
          href="https://www.figma.com/file/CFNCyDfgzlQOHRotwFdffo/NFT-Landing-Page?node-id=0%3A1&t=YFHmCpr65DpgnvSL-1"
          target="_blank"
        >
          <AchieveCards
            title="Alaga NFT"
            description="Designed and developed a responsive NFT landing page for indigenous NFT art collection ERC-721 (a smart contract standard) on Ethereum's blockchain. "
            listItem={["Figma", "Next", "Chakra UI"]}
          />
        </a>
        <a href="https://github.com/Khaliid-oh/screencastmario" target="_blank">
          <AchieveCards
            title="Mario"
            description="Developed, debugged and Tested a Typescript version of the Mario running example code base on the complete UBCx Software Engineering course."
            listItem={["Next", "Node.js", "Enzyme"]}
          />
        </a>
      </div>
    </motion.section>
  );
}



//code village 
export default Achieve
