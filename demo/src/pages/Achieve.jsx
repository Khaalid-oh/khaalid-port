import React from 'react'
import AchieveCards from './AchieveCards';




function Achieve() {
  return (
    <section id="work" className="dark:bg-darkk dark:text-white">
      <div className="flex flex-col items-center justify-center mt-14">
        <div className="flex ">
          <span className="text-pink">03.</span>
          <h1 className="text-3xl font-semibold mt-2">Featured projects</h1>
        </div>
        <a
          href="https://github.com/Khaliid-oh/"
          className="text-pink hover:text-midnight"
        >
          view the source
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <a href="https://github.com/Khaliid-oh/Altura-NFTs" target="_blank">
          <AchieveCards
            title="Altura NFT"
            description="Developed an app that fetches the NFT  of a giving address using the Alchemy API. This Project was a technical assestment for Web3 Frontend Engineer role at Altura."
            listItem={["React", "Tailwind", "Alchemy"]}
          />
        </a>

        <a href="https://github.com/Khaliid-oh/Forex-2.0" target="_blank">
          <AchieveCards
            title="Forex Trading 2.0"
            description="Developed a comprehensive forex trading course website with interactive lessons and quizzes to enhance users understanding of the forex market."
            listItem={["Next JS", "Tailwind", "Recharts"]}
          />
        </a>

        <a
          href="https://github.com/Khaliid-oh/blackbird-harrison-ai"
          target="_blank"
        >
          <AchieveCards
            title="Harrison AI"
            description="Developed and tested a secure login page for Harrison AI, a subsidiary of BlackBird Australia using the Jest framework and Enzyme testing utility."
            listItem={["Next JS", "Jest", "Enzyme"]}
          />
        </a>

        <a
          href="https://www.figma.com/file/zYFfi3kHAWG11BTgUC7Ggn/HAKATHON?t=90p2LoJrzidur0bx-6"
          target="_blank"
        >
          <AchieveCards
            title="CTS"
            description="Developed a Correspondence Tracking System for an E-Goverment Hackathon with the rest of my team, working majorly on the design and loging page."
            listItem={["Figma", "React", "Node JS"]}
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
            description="Developed and debugged a Typescript version of the Mario running example code base on the UBCx Software Engineering: Introduction course on edX."
            listItem={["Webpack", "Next", "Node JS"]}
          />
        </a>
      </div>
    </section>
  );
}

export default Achieve
