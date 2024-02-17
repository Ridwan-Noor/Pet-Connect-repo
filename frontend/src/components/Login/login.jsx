//import {useState} from 'react';
import SignupImg from '../../assets/login.png';
import background from '../../assets/SignUpWp.png'


function Login() {

    return (
        <>
           <div className='bg-cover bg-center bg-gray-100 min-h-screen w-full flex-col px-10 pb-5' style={{backgroundImage: `url(${background})`}}>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' >
                        <h1 className='text-3x1 font-bold mb-6'>Log In to your account</h1>
                        <input type='email' placeholder='Email' name='email' className='shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'/>
                        <div className='relative mb-4'>
                            <input type='password' placeholder='Password' name='password' required className='shadow apppearance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-none focus: shadow-outline'/>

                        </div>
                    </form>
                </div>
            </div>
            <div className=''>

            </div>
           </div>
        </>
    );
}

export default Login;