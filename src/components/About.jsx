import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 m:gap-20 py-20'>
      <div className='w-full md-w-6/12 '>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, esse nulla? Id doloremque sint sapiente animi unde, suscipit nemo inventore perspiciatis 
          culpa autem corporis iure accusamus deserunt illo explicabo ducimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, esse nulla? Id doloremque sint sapiente animi unde, suscipit nemo inventore perspiciatis 
          culpa autem corporis iure accusamus deserunt illo explicabo ducimus!
        </p>
        <a 
          href="mailto:miguellemes005@gmail.com"
          className='block mt-3 text-md md:text-lg
             text-gray-700 dark:text-gray-300 underline hover:text-indigo-500
            dark:hover:text-indigo-500' 
        >
          miguellemes005@gmail.com
        </a>
      </div>
      <img src={`https://avatars.githubusercontent.com/u/74062845?v=4`} 
        alt="Miguel Lemes" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About