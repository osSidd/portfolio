// import React from 'react'

import ProgressBar from "./progressBar"

function Skills({skills}) {
  return (
    <div className="my-32 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mt-12 tracking-widest">My skills</h2>
      <div className="px-8 mt-8 mx-auto w-full grid grid-cols-3">
        {
          skills.map(skill => (
            <div key={skill._id} className=" mt-4 p-2">
              <div className="flex items-center mb-2">
                <p className="mr-2">{skill.name}</p>
                <img src={skill.image.url} className="w-5 mr-4" alt={skill.name} />
                <p>{skill.percentage}%</p>
              </div>
              <div className="w-9/12">
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