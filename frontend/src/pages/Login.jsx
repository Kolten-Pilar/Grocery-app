import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Login() {
  // Set initial state of form inputs to empty strings
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData // Destructure formData into individual variables

  const onChange = (e) => { // onChange function to update state as user types into form
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
    }))
  } 

  const onSubmit = (e) => { // onSubmit function to send form data to backend
    e.preventDefault()
  }

  return (
    <>
    {/* heading */}
    <section className=' text-5xl mb-14 pt-6'>
        <h1 className=' font-bold mb-6'>
          <FaUser className=' m-auto'/> Login
        </h1>
        <p className=' text-slate-500 text-4xl'>Login to see your grocery list</p>
      </section>
      {/* form */}
      <section className=' w-2/3 m-auto'> 
        <form onSubmit={onSubmit} >
          
          <div className=' mb-3'>
            <input
              type='email'
              className=' w-full p-3 border-2 border-black rounded-xl mb-3'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className=' mb-3'>
            <input
              type='password'
              className=' w-full p-3 border-2 border-black rounded-xl mb-3'
              id='password'
              name='password'
              value={password}
              placeholder='Enter your password'
              onChange={onChange}
            />
          </div>
          
          <div className=" mb-3 flex items-center justify-center">
            <button type='submit' className=" px-3 py-5 border-2 border-black rounded-xl bg-black text-white font-bold cursor-pointer w-1/2">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login