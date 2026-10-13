import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentStaate] = useState('Sign Up')

  const onSubmitHandlerFunction = (event)=> {
    event.preventDefault()

  }

  return (
    <form onSubmit={onSubmitHandlerFunction} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 h-full md:h-95'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl font-extrabold '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
      </div>
        {
          currentState === 'Login' ? 
          '' 
          : <input type="text" className='w-full px-3 py-2 border border-b-gray-800 ' placeholder='Name' required autoComplete='false' />
        }
        
        <input type="email" className='w-full px-3 py-2 border border-b-gray-800 ' placeholder='Email' required autoComplete='false' />
        <input type="password" className='w-full px-3 py-2 border border-b-gray-800 ' placeholder='Password' required  autoComplete ='false' />

        <div className='w-full flex justify-between text-sm '>
          <p className='cursor-pointer text-blue-500'>Forgot your password?</p>
          {
            currentState === 'Login' ? 
            <p onClick={()=> setCurrentStaate('Sign Up')} className='cursor-pointer'>Create account</p> 
            : 
            <p onClick={()=> setCurrentStaate("Login")} className='cursor-pointer'>Login here</p>
          }
        </div>

        <button type='submit' className='bg-black text-white font-light py-2 px-8 cursor-pointer mt-4 '>{ currentState === "Login" ? "Sign In" : "Sign Up" }</button>

    </form>
  )
}

export default Login
