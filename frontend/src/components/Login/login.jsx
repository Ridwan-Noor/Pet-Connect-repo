//import {useState} from 'react';
import SignupImg from '../../assets/login.png';
import background from '../../assets/animal-background-vector-with-cute-pets-illustration_53876-127698.png'


function Login() {
  return (
    <div className="bg-dcfce7 min-h-screen flex items-center justify-center" style = {{backgroundImage: `url(${background})`}}>
      <div className="w-96 h-500 flex rounded-10 shadow-md font-sans">
        <div className="flex-4 flex flex-col items-center justify-center bg-white rounded-l-10">
          <form className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-0 mb-8">Log In to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              // onChange={handleChange}
              // value={data.email}
              required
              className="border border-gray-500 rounded py-3 px-4 mb-4 w-72"
            />
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                name="password"
                // onChange={handleChange}
                // value={data.password}
                required
                className="border border-gray-500 rounded py-3 px-4 w-72"
              />
              <label className="absolute top-0 right-0 mt-2 mr-2 flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  // checked={showPassword}
                  // onChange={toggleShowPassword}
                />
                <span>Show Password</span>
              </label>
            </div>
             <div className="w-96 h-500 flex rounded-10 shadow-md font-sans"></div>
            <button
              type="submit"
              className="bg-#57534e-500 hover:bg-#57534e-700 text-black font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-72 transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex-4 flex flex-col bg-006778 rounded-r-10">
          <div className='h-full bg-white'>
            <h1 className="bg-white rounded-l-10 text-3xl font-bold top-0 mt-0 text-black">New to PetConnect?</h1>
          <img src={SignupImg} alt="Signup" className="w-90 object-fill" />
          {/* <Link to="/signup"> */}
          <div className='w-full items-center justify-center flex'>
          <button type="button"
              className="bg-white hover:bg-blue-200 text-#57534e-800 font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          {/* </Link> */}
          </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
  }

export default Login;