// import React from 'react'

function Services({services}) {
  return (
    <div className="my-32 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mt-12 tracking-widest">Services</h2>
      <div className="px-8 mt-8 w-full grid grid-cols-2 gap-x-14 gap-y-8">
        {
          services.map((service, index) => (
            <div key={service._id} className={`px-4 py-8 cursor-pointer transition-shadow duration-500 flex items-center justify-between shadow-lg`}>
              <img src={service.image.url} className="w-4/12" alt={service.name} />
              <div className="w-7/12">
                <h2 className="text-3xl mb-4">{service.name}</h2>
                <p>{service.desc}</p>
                <p className="text-2xl mt-6">Charge - {service.charge}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services