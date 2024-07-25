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
        <a href="https://tech1m.com/" target="_blank">
          <AchieveCards
            title="Tech1M Web"
            description="Tech1M is a cutting-edge recruitment intelligence platform leveraging AI and data to automates recruitment, from applications to hiring."
            listItem={["React", "Tailwind", "UUI"]}
          />
        </a>
        <a href="https://sphinx.chat/" target="_blank">
          <AchieveCards
            title="Sphinx Chat"
            description="Sphinx Chat is a decentralize social media platform that leverage on the bitcoin lightning network to offer fast secure, free and fast communication."
            listItem={["Next", "Tailwind", "MUI"]}
          />
        </a>

        <a href="https://www.stakwork.com/" target="_blank">
          <AchieveCards
            title="Stakwork Web"
            description="Stakwork is intuitive upwork-like website with business process automation that integrates an always-on network of cloudsourced workers. "
            listItem={["Next", "Tailwind", "Recharts"]}
          />
        </a>

        <a
          href="https://www.figma.com/design/6EWH2YqySkCAbTpGl1GQjH/Khaalid's-Portfolio?node-id=0-1&t=byGXNL2GAJGaa0cs-0"
          target="_blank"
        >
          <AchieveCards
            title="Identiti Design"
            description="Identiti is an intutive design of a clothing brand concept with classic, minimalistic, comfortable design and style for African Men in diaspora."
            listItem={["Figma", "Adode PS", "Adobe I"]}
          />
        </a>

        <a
          href="https://www.figma.com/design/6EWH2YqySkCAbTpGl1GQjH/Khaalid's-Portfolio?node-id=1-3814&t=byGXNL2GAJGaa0cs-0"
          target="_blank"
        >
          <AchieveCards
            title="Rgxta Design"
            description="Rgxta is a Fintech design concept of a digital mobile banking app that brings easy and fast financial services to the bankless accross the globe. "
            listItem={["Figma", "Adobe PS", "TWUI"]}
          />
        </a>
        <a href="https://www.figma.com/design/6EWH2YqySkCAbTpGl1GQjH/Khaalid's-Portfolio?node-id=67-11003&t=byGXNL2GAJGaa0cs-0" target="_blank">
          <AchieveCards
            title="Nexus Design"
            description="Nexus is a white-label customer relationship management design that is adaptable for any business looking to manage and keep track of client-customer relationship."
            listItem={["Next", "Node.js", "Enzyme"]}
          />
        </a>
      </div>
    </motion.section>
  );
}



//code village 
export default Achieve
