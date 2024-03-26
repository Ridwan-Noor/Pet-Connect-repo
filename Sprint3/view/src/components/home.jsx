import React from 'react';
import { useContext } from 'react';
import { UserContext } from "../App.jsx"
import { Link } from 'react-router-dom'

function Home() {
    const { u, setU } = useContext(UserContext);
    console.log(u)

    return (


        <div className=" bg-white font-family-karla">

            {/* Top Bar Nav */}
            {/*<nav className="w-full py-4 bg-blue-800 shadow">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between">

                    <nav>
                        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                            <li><a className="hover:text-gray-200 hover:underline px-4" href="/profile">Profile</a></li>
                            <li><a className="hover:text-gray-200 hover:underline px-4" href="#">Settings</a></li>
                        </ul>
                    </nav>

                    <div className="flex items-center text-lg no-underline text-white pr-6">
                        <a className="" href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="pl-6" href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="pl-6" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="pl-6" href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </nav>*/}

            {/* Text Header */}
            <header className="bg-sky-400  font-bold font-sans italic tracking-widest text-white">
                <div className="flex flex-col items-center py-2">
                    <div className=" uppercase text-5xl " >
                        PET CONNECT
                    </div>
                    <p className="text-lg ">
                        Welcome to the Community of Pets!
                    </p>
                </div>
            </header>

            {/* Topic Nav */}
            <nav id="navbar" className="  w-full py-2 border-t border-b bg-gray-100" x-data="{ open: false }">
                {/*<div className="block sm:hidden">
                    <a
                        href="#"
                        className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                        onClick={() => open = !open}
                    >
                        <i className={`fas ${open ? 'fa-chevron-down' : 'fa-chevron-up'} ml-2`}></i>
                    </a>

                </div>*/}
                <div className={`w-full ${open ? 'block' : 'hidden'} flex-grow sm:flex sm:items-center sm:w-auto text-white`}>

                    <div className=" w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-lg font-bold uppercase pt-2">
                        <Link to="/events" className="bg-orange-400 hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Events</Link>
                        <Link to="#" className="bg-orange-400 hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Services</Link>
                        <Link to="/petShop" className="bg-orange-400 hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Pet Shop</Link>
                        <Link to="#" className="bg-orange-400 hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Veteranian</Link>
                        <Link to="#" className="bg-orange-400 hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Adopt</Link>
                        <Link to="/resources" className="bg-orange-400 hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Resources</Link>
                    </div>
                </div>
            </nav>
            


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
        


    );
}

export default Home;
