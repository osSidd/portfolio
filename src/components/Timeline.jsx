import React from 'react'

function Timeline({type, timeline}) {
  return (
    <div className='px-8 mt-24 w-6/12'>
      <h2 className='uppercase'>{type}</h2>
      <div className=' border-l border-gray-500'>
        {
          timeline.map(item => (
            <Events
              key={item._id}
              companyName={item.company_name}
              jobTitle={type === 'experience' ? item.jobTitle : ''}
              startDate={item.startDate}
              endDate={item.endDate}
              summary={item.summary}
            />
          ))
        }
      </div>
    </div>
  )
}

function formatDate(dt){
  return new Date(dt).toLocaleDateString('en-IN', {year:'2-digit', month:'long'})
}

function Events({companyName, jobTitle='', startDate, endDate, summary}){
  return (
    <div className='relative my-8'>
      <div className='absolute -left-2 top-2 w-4 h-4 flex items-center justify-center bg-gray-300 rounded-full'>
        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
      </div>
      <div className='ml-8'>
        <h3 className='font-semibold'>{companyName}</h3>
        <p>{jobTitle}</p>
        <p className='mt-2'>{formatDate(startDate)} - {formatDate(endDate)}</p>
        <p className='mt-4'>{summary}</p>
      </div>
    </div>
  )
}

export default Timeline