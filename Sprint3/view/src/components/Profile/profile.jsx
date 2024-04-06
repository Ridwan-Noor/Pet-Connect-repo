import React from 'react'
//import { useState, useEffect } from 'react';
//import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from "../../App.jsx"
import { Link } from 'react-router-dom'

export const profile = ({ userEmail, onclose }) => {
    //const [userProfile, setUserProfile] = useState({
    //    useremail: '',
    //    address: '',
    //    bio: '',
    //    profileImage: '',
    //});

    //const [userInfo, setUserInfo] = useState({
    //    firstName: '',
    //    lastName: '',
    //    email: '',
    //});

    const { u, setU } = useContext(UserContext);
    console.log(u)


    return (
        <>

<div className='topSection z-30 relative'>
                <header className=" bg-sky-400  font-bold font-sans italic tracking-widest text-white">
                    <div className="flex flex-col items-center py-2">
                        <div className=" uppercase text-5xl " >
                            PET CONNECT
                        </div>
                        <p className="text-lg ">
                            Welcome to the Community of Pets!
                        </p>
                    </div>
                </header>

                <nav className="  w-full py-2 border-t border-b bg-gray-100" x-data="{ open: false } ">
                    <div className={`w-full ${open ? 'block' : 'hidden'}  text-orange-400 `}>
                        <div className=" w-full  flex flex-row items-center justify-left text-xl font-bold uppercase pt-2 ">
                            <Link to="/events" className=" border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ml-5">Events</Link>
                            <Link to="/services" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Services</Link>
                            <Link to="/petShop" className="min-w-32 border-r-2 border-gray-400 hover:bg-gray-300  py-2 pl-3 mb-2">Pet Shop</Link>
                            <Link to="/resources" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Resources</Link>
                            <div className='nav-right  w-full flex flex-row justify-end ml-3'>
                                <Link to="/home" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 ">Home</Link>
                                <Link to="/login" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Logout</Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

            <nav className="fixed z-20 top-0 w-full py-2 border-t border-b bg-gray-100" x-data="{ open: false }">
                <div className={`w-full ${open ? 'block' : 'hidden'}  text-orange-400 `}>
                    <div className=" w-full  flex flex-row items-center justify-left text-xl font-bold uppercase pt-2 ">
                        <Link to="/events" className=" border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ml-5">Events</Link>
                        <Link to="#" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Services</Link>
                        <Link to="/petShop" className="min-w-32 border-r-2 border-gray-400 hover:bg-gray-300  py-2 pl-3 mb-2">Pet Shop</Link>
                        <Link to="/resources" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Resources</Link>
                        <div className='nav-right  w-full flex flex-row justify-end ml-3'>
                            <Link to="/home" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 ">Home</Link>
                            <Link to="/login" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Logout</Link>
                        </div>

                    </div>
                </div>
            </nav>

            <div className='home-cont z-10 relative flex flex-col items-center'>
            

                <div className="w-100 flex justify-center mt-28">
                    <div className='relative w-96 bg-white overflow-hidden '>
                        <div className='bg-emerald-200 py-4 text-center text-black rounded-t-lg font-bold'>
                            <h1 className='text-xl px-6 text-black'>User Profile</h1>
                        </div>
                        <div className='flex flex-col p-4'>
                            <div className='flex flex-col items-center'>
                                {/* user er picture er ta dibo */}
                                <div className='w-full rounded-lg border-2 border-emerald-700 bg-white mt-4'>
                                    <div className='p-3 mx-auto'>
                                        <div>
                                            <div className='text-lg font-bold text-emerald-700 mb-2'>
                                                {/* userinfo er jinish pati */} Name:
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center mb-1'>
                                            <div className='text-sm font-medium text-slate-800'>
                                                Email:
                                            </div>
                                            <div className='text-sm font-semibold ml-1'>
                                                {/*userinfo,email*/}
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center mb-1'>
                                            <div className='text-sm font-medium text-slate-800'>
                                                Address:
                                            </div>
                                            <div className='text-sm font-semibold ml-1'>
                                                {/*user er address*/}
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center mb-1'>
                                            <div className='text-sm font-medium text-slate-800'>
                                                Bio:
                                            </div>
                                            <div className='text-sm font-semibold ml-1'>

                                            </div>
                                        </div>
                                        <div><button type='button' className='py-2 px-4 text-sm font-medium text-center text-white rounded-full bg-emerald-700 hover-bg-primary-700 focus-ring-4 focus-outline-none focus-ring-primary-300 mt-3'>Close</button></div>
                                        <div><button type='button' className='py-2 px-4 text-sm font-medium text-center text-white rounded-full bg-emerald-700 hover-bg-primary-700 focus-ring-4 focus-outline-none focus-ring-primary-300 mt-3'>Edit Profile</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>            
                </div>                   

            
            </div>
        
     
        
        </>



    )
}

export default profile;
