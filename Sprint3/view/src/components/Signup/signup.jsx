import React from 'react'
import SignupImg from '../../assets/login.png';
import background from '../../assets/animal-background-vector-with-cute-pets-illustration_53876-127698.png'
import {Link} from 'react-router-dom'

const signup = () => {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{backgroundImage: `url(${background})`}}>
        <div className='flex justify-center items-center'>
            <div className='w-full h-500 md:w-3/4 lg:w-1/2 xl:w-2/5'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md: w-1/2 bg-white rounded-tl-lg md:rounded-bl-lg p-8 flex flex-col items-center justify-center'>
                      <h1 className='text-3x1 font-bold mb-4'>Welcome to PetConnect</h1>
                      <img src={SignupImg} alt='Signup' className='w-64 mb-8'/>
                      <Link to='/login'>
                        <button type='button' className='bg-white hover:bg-amber-300 text-lime-800 rounded-lg w-full py-3 font-semibold text-medium cursor-pointer'>Log in</button>
                      </Link>
                    </div>
                    <div className="md: w-1/2 bg-white rounded-br-lg md:rounded-br-none p-8 flex items-center justify-center">
                      <form className='w-full'>
                        <h1 className='text-3x1 font-bold mb-6 text-black'>Create Account</h1>
                        <input type='text' placeholder='First name' name='firstname' required className='border border-amber-300 rounded py-2 px-4 mb-4 w-full'/>
                        <input type='text' placeholder='Last name' name='lastname' required className='border border-amber-300 rounded py-2 px-4 mb-4 w-full'/>
                        <input type='email' placeholder='Email' name='email' required className='border border-amber-300 rounded py-2 px-4 mb-4 w-full'/>
                        <input type='password' placeholder='Password' name='password' required className='border border-amber-300 rounded py-2 px-4 mb-4 w-full' id='passwordInput'/>
                        <div className='mb-4 text-black'>
                          <input type='checkbox' className='mr-2 leading-tight'/>
                          <label htmlFor='passwordInput'>Show Password</label>
                        </div>
                        <div className='text-white mb-4'>

                        </div>
                        <button type='submit' className='big-white hover:bg-amber-300 text-lime-800 rounded-lg w-full py-3 font-semibold text-medium cursor-pointer font-sans transition duration-300 ease-in-out hover:text-black'>Sign Up</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default signup