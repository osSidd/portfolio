// import React from 'react'

function Hero({about}) {
  return (
    <div className='pl-8 bg-orange-50 min-h-screen flex items-center justify-between flex-col lg:flex-row overflow-hidden'>
      <div className='w-6/12'>
        <p><span className='text-xl'>Hello</span>, <span className='text-2xl font-semibold'>my name is {about.name}</span></p>
        <p className='text-6xl leading-tight font-bold mt-8'>I am a {about.title}</p>
        <p className='text-xl mt-8'>{about.subTitle}</p>
      </div>
      <div className='w-5/12'>
        <img src={about.avatar.url} alt="" />
      </div>
    </div>
  )
}

export default Hero