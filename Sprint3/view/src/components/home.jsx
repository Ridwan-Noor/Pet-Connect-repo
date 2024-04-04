import React from 'react';
import { useContext } from 'react';
import { UserContext } from "../App.jsx"
import { Link } from 'react-router-dom'

function Home() {
    const { u, setU } = useContext(UserContext);
    console.log("u:", u)

    return (

        <div className="body bg-white font-family-karla">

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
                            <Link to="/" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Veteranian</Link>
                            <Link to="/" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Adopt</Link>
                            <Link to="/resources" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Resources</Link>
                            <div className='nav-right  w-full flex flex-row justify-end ml-3'>
                                <Link to="/profile" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 ">Profile</Link>
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
                        <Link to="#" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Veteranian</Link>
                        <Link to="#" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Adopt</Link>
                        <Link to="/resources" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Resources</Link>
                        <div className='nav-right  w-full flex flex-row justify-end ml-3'>
                            <Link to="/Profile" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 ">Profile</Link>
                            <Link to="/Logout" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Logout</Link>
                        </div>

                    </div>
                </div>
            </nav>

            <div className='home-cont z-10 relative'>

                <div className="container mx-auto flex flex-wrap py-6">
                    {/* Input Bar */}
                    <div className="w-full bg-gray-200 py-4">
                        <div className="container mx-auto flex items-center justify-center">
                            <input type="file" id="imageUpload" accept="image/*" className="hidden" />
                            <label htmlFor="imageUpload" className="cursor-pointer mr-4">
                                <i className="fas fa-image"></i> Upload Image
                            </label>
                            <input type="text" placeholder="Write Something..." className="w-full md:w-2/3 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2">
                                Post
                            </button>
                        </div>
                    </div>

                </div>


            </div>

        </div>

    );
}

export default Home;
