import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-8 border-t border-gray-400 ">
        <Title text_1={"Contact"} text_2={"US"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 '>
        <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="image" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-xl text-gr'>Our Store</p>
          <p className='text-gray-500'>145 A / 137 A, <br /> Fatehpur Bichuwa, Tagore Town, Allahabad</p>
          <p className='text-gray-500'>Tel: (+91) 9628332027 <br /> Email: shailesh.achiever@gmail.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job opening.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300 '>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default Contact
