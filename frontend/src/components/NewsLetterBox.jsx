import React from 'react'

const NewsLetterBox = () => {

    const onSubmithandler = (event) => {
        event.preventDefault()
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-bold text-gray-700'>Subscribe now & get 20% off</p>
        <p className='text-gray-600 mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, veritatis!
        </p>
        <form onClick={onSubmithandler} className='w-full sm:w-1/2 m-auto my-6 border border-gray-200 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0'>
            <input type="email" className='w-full pl-4 sm:flex-1 outline-none ' placeholder='Enter your email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer '>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
