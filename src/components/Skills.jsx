// import React from 'react'

import ProgressBar from "./progressBar"

function Skills({skills}) {
  return (
    <div className="my-32 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mt-12 tracking-widest">My skills</h2>
      <div className=" grid grid-cols-3 gap-x-6 gap-y-6 px-8 mt-8 w-full">
        {
          skills.map(skill => (
            <div key={skill._id} className="flex items-center justify-evenly mt-4 p-2 cursor-pointer transition-shadow duration-500 shadow hover:shadow-2xl">
              <img src={skill.image.url} className="w-12" alt={skill.name} />
              <p className="">{skill.name}</p>
              <div className="w-6/12">
                <ProgressBar percentage={skill.percentage}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills