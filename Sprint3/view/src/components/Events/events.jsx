import React, {useState,useEffect} from 'react';
// import {useEvents} from '../../hooks/useEvents';
import axios from 'axios';

const events = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const[selectedCategory, setSelectedCategory] = useState('');
  const[startDate, setStartDate] = useState('');
  
  const[events,setEvents] = useState([]);
  const[interestedEvents, setInterestedEvents] = useState([]);
  const[participatingEvents, setParticipatingEvents] = useState([]);

    
  return (
    <div className='flex'>
      <div className='w-1/4 px-4 py-4 rounded-lg ml-10 mt-8 bg-white min-h-0'>
        <div className='mb-4'>
          <label htmlFor='categoryFilter' className='blovk mb-2 text-md font-semibold text-gray-900'>Filter by Category</label>
          <select id='categoryFilter' name='categoryfilter' value={selectedCategory} className='block w-full py-2.5 px-4 text-sm font-semibold text-gray-900 bg-white border-2 border-cyan-700 rounded-md focus:outline-none focus:border-cyan-700'>
            <option value=''>All Categories</option>
            <option value='Online'>Online Pet show</option>
            <option value='Physical'>Physical Pet show</option>
          </select>
        </div>
        <div className='mb-4 flex space-x-4 m-2 justify-center'>
          <div className='flex-1'>
            <label htmlFor='startDateFilter' className='block mb-2 text-md font-semibold text-gray-900'>Start Date:</label>
            <input type='date' id='startDateFilter' value={startDate} className='w-full py-2.5 px-4 text-sm font-semibold text-gray-900 bg-white border-2 border-cyan-700 rounded-md focus:outline-none focus:border-cyan-700'/>
          </div>
        </div>
        <button /*ei khn e ekta handlefilterevents hobe */ className='w-full py-2.5 px-4 text-md font-semibold text-white bg-cyan-950 hover:bg-teal-400 hover:text-black active:bg-green-700 rounded-md focus:outline-none'>Apply Filter</button>
        <div className='flex flex-col'>
          <div className='flex items-center mb-2'>
            <p className='font-semibold text-black text-lg mr-2'>Nafisa</p>
            <p className='text-gray-800 font-semibold text-md'>Posted an event</p>
          </div>
          <h2 className='font-bold text-2xl mb-2'>Event title</h2>

          <div className='rounded bg-teal-500 text-black px-2 py-1 text-md inline-flex items-center mr-2'>
            <span className='whitespace-no-wrap font-semibold'>Event type</span>
          </div>

          <div className='rounded bg-teal-500 text-black px-2 py-1 text-md inline-flex items-center mr-2'>
            <span className='whitespace-no-wrap font-semibold'>Event date</span>
          </div>

          <div className='rounded bg-teal-500 text-black px-2 py-1 text-md inline-flex items-center mr-2'>
            <span className='whitespace-no-wrap font-semibold'>Time</span>
          </div>

          <p className='text-teal-900 font-bold text-lg mt-4'>Event Description:</p>
          <div className='overflow-hidden transition-max-h duration-700 ease-in-out'>
            <p className='text-gray-700 font-semibold text-md'></p>
            {/* <img src={} alt='event' className='mb-2 rounded-2x1 w-3/5 h-3/5 mx-auto object-cover mt-6'/> */}
          </div><div className='flex items-center justify-center mt-6'>
            <button /*onclick handleIntesterest stuff*/ className=/*backend stuff*/ 'text-black rounded-full w-48 p-3 font-semibold text-medium cursor-pointer font-sans transition duration-300 ease-in-out hover:text-black mt-6 mr-10'>Already interested?  Interested?</button>
            <button /*onclick stuff*/ className='text-white rounded-full w-48 p-3 font-semibold text-medium cursor-pointer font-sans transition duration-300 ease-in-out mt-6'>Already going?  Going</button>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-lg border-2 border-red-500 shadow p-6 mb-4 mt-10 flex items-center justify-center'>
        <p className='text-gray-700 font-bold'>No events available/</p>
      </div>
    </div>
  )
};

export default events;