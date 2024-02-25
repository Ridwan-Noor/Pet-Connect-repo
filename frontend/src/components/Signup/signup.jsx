import React from 'react'
import SignupImg from '../../assets/login.png';
import background from '../../assets/animal-background-vector-with-cute-pets-illustration_53876-127698.png'
import {Link} from 'react-router-dom'

const signup = () => {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{backgroundImage: `url(${background})`}}>
        <div className='flex justify-center items-center'>
            <div className='w-full md:w-3/4 lg:w-1/2 xl:w-2/5'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md: w-1/2 bg-white rounded-tl-lg md:rounded-bl-lg p-8 flex flex-col items-center justify-center'>
                      <h1 className='text-3x1 font-bold mb-4'>Welcome to PetConnect</h1>
                      <img src={SignupImg} alt='Signup' className='w-64 mb-8'/>
                      <Link to='/login'>
                        <button type='button' className='bg-white rounded-lg w-96 p-3 font-semibold text-medium'></button>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default signup