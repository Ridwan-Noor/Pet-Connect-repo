import React from 'react'
//import { useState, useEffect } from 'react';
//import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from "../../App.jsx"

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
        <div className="w-100 flex justify-center">
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
                                <div><button type='button' className='py-2 px-4 text-sm font-medium text-center text-white rounded-full bg-emerald-700 hover-bg-primary-700 focus-ring-4 focus-outline-none focus-ring-primary-300 mt-3 '>Edit Profile</button></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>            
        </div>

    )
}

export default profile;
