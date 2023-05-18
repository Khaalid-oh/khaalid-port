import React from 'react'
 import { TfiNewWindow } from "react-icons/tfi";
import { CiFolderOn } from "react-icons/ci";


const AchieveCards =({title, description, listItem}) => {
  return (
    <div className="w-full h-80 bg-fuchsia-100 dark:bg-midnight rounded-lg p-5 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center">
       <TfiNewWindow className="text-3xl text-midnight dark:text-white hover:text-pink" />
        <CiFolderOn className="text-4xl text-pink" />
      </div>
      <div className=''>
        <h2 className="text-pink text-2xl">{title}</h2>
        <p className=''> 
          {description}
        </p>
      </div>
      <ul className='flex text-midnight dark:text-fuchsia-300 gap-4 text-wrap'>
       {
        listItem.map((item,i) =>(
          <li key={i}>{item}</li>
        ))
       }
      </ul>
    </div>
  );  
}
 
export default AchieveCards
