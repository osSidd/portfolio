// import React from 'react'

import Slider from 'react-slick'

function Testimonial({testimonials}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col overflow-hidden'>
      <h2 className='text-3xl text-center'>Testimonials</h2>
      <div className='mt-16 w-fit flex'>
        {
          testimonials.map(test => (
            <div key={test._id} style={{width: '100vw'}} className='px-32 flex items-center justify-evenly'>
              <img className='w-2/12' src={test.image.url} alt={test.name}/>
              <div className='w-9/12'>
                <p>{test.review}</p>
                <p className='font-bold mt-4'>{test.name}</p>
                <p>{test.position}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonial