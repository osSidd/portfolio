// import React from 'react'

function About({about}) {
  return (
    <div className='pr-8 bg-teal-50 h-screen flex items-center justify-between flex-col lg:flex-row-reverse overflow-hidden'>
      <div className='w-6/12'>
        {/* <p><span className='text-xl'>Hello</span>, <span className='text-2xl font-semibold'>my name is {about.name}</span></p> */}
        <p className='text-4xl leading-tight font-bold mt-8'>I am a {about.title} with over {about.exp_year} years of experience</p>
        <p className='text-xl mt-8'>{about.description}</p>
        <div className="mt-12 flex">
          <div className="mr-16">
            <p className="text-3xl">{about.exp_year} years</p>
            <p>of experience</p>
          </div>
          <div className="">
            <p className="text-3xl">{about.some_total} projects</p>
            <p>completed</p>
          </div>
        </div>
      </div>
      <div className='w-5/12'>
        <img src={about.alternateAvatars[0].url} alt="" />
      </div>
    </div>
  )
}

export default About