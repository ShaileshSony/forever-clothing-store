import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')

  const navigate = useNavigate()

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
      
      {/* **********************Left Side*********************** */}
      <div className='flex flex-col gap-4 w-full sm:max-w-120' >
        <div className='text-xl sm:text-2xl my-3 '>
          <Title text_1={'Delivery'} text_2={'information'} />
        </div>
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='text' placeholder='First Name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='text' placeholder='Last Name'/>
        </div>
         <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='email' placeholder='Email Address'/>
         <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='text' placeholder='Street'/>
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='text' placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='number' placeholder='Zip Code'/>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='text' placeholder='Country'/>
        </div> 
        <input className='border border-gray-300 rounded py-1.5 px-3 w-full outline-none ' type='number' placeholder='Phone Number'/>

        {/* Button */}
        {/* <div className="w-full">
        <button onClick={()=> navigate("/order")} className="bg-black text-white w-full uppercase font-medium text-sm px-4 py-3 cursor-pointer ">Proceed to Pay</button>
      </div> */}
      </div>

      {/* ************************Right Side****************************** */}
      <div className='mt-8 '>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-15'>
          <Title text_1={'payment'} text_2={'method'}/>
          {/* **********Payment Methos Selection*********** */}
          <div className='flex gap-3 flex-col lg:flex-row '>
            <div onClick={()=> setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${method === 'stripe' ? 'bg-green-400 border border-green-400' : ''} `}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="image" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${method === 'razorpay' ? 'bg-green-400 border border-green-400' : ''} `}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="image" />
            </div>
            <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${method === 'cod' ? 'bg-green-400 border border-green-400' : ''} `}></p>
              <p className='text-gray-500 text-sm font-medium mx-4 uppercase '>cash on delivery</p>
            </div>
          </div>
        </div>
        {/* **********************Place Order Button***************** */}
        <div className='w-full mt-5 text-right '>
          <button onClick={()=> navigate('/orders')} className='bg-black text-white text-sm py-3 px-5 uppercase'>Place order</button>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
