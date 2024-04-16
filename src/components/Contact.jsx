// import React from 'react'

import location from '../assets/location.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'

function Contact({about}) {
  return (
    <div className='px-8 py-24 min-h-screen flex items-center justify-between bg-gray-200'>
      <form action="" className='w-6/12 bg-white p-8'>
        <h2 className='text-2xl font-semibold'>Get in touch</h2>
        <p className='mt-2'>I look forward to hear from you</p>
        <div className='mt-6'>
          <div className='flex items-center justify-between gap-x-2 my-4'>
            <div className='w-6/12'> 
              <label htmlFor="name">Name</label>
              <input type="text" name='name' className='border border-gray-500 block w-full mt-2 p-2' placeholder='Name'/>
            </div>
            <div className='w-6/12'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className='border border-gray-500 block w-full p-2 mt-2' placeholder='Email'/>
            </div>
          </div>
          <div className='my-4'>
            <label htmlFor="subject">Subject</label>
            <input type="text" name='subject' className='border border-gray-500 block w-full mt-2 p-2' placeholder='Subject'/>
          </div>
          <div className='my-4'>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="4" className='border border-gray-500 block p-2 w-full mt-2' placeholder='Message'></textarea>
          </div>
          <button type='submit' className='bg-orange-200 px-8 py-3 mt-8 uppercase'>Send message</button>
        </div>
      </form>
      <div className='w-4/12'>
        <ContactDetails img={phone} label='Phone' value={about.phoneNumber}/>
        <ContactDetails img={mail} label='Email' value={about.contactEmail}/>
        <ContactDetails img={location} label='My Location' value={about.address}/>
      </div>
    </div>
  )
}

function ContactDetails({img, label, value}){
  return (
    <div className='flex items-center my-8'>
      <img src={img} alt="phone" className='w-12 p-2 mr-4 bg-red-300'/>
      <div>
        <p>{label}</p>
        <p className='font-semibold'>{value}</p>
      </div>
    </div>
  )
}

export default Contact