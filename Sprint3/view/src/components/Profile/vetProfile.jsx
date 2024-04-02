import React, { useState, useEffect } from 'react';
import axios from 'axios';
import vetDP from '../../assets/vetprofile.png';
import { Link, useNavigate } from 'react-router-dom'; 

const VetProfile = () => {
  const navigate = useNavigate(); 
  const [vet, setVet] = useState(null);
  const [services, setServices] = useState([]);

  // nicher 2 ta login session theke ashbe, jodi user login kore taile vetEmail = "" rakhba, otherwise ekhn vet login korse jonne userEmail = "" rakhsi 
  const [vetEmail, setVetEmail] = useState("steve@gmail.com");
  const [vetName, setVetName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/getVetProfile/${vetEmail}`)
      .then(response => {
        setVet(response.data[0]);
      })
      .catch(error => {
        console.error('Error fetching vet profile:', error);
      });

    axios.get(`http://localhost:5000/getServicesByVetEmail/${vetEmail}`)
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching services provided by vet:', error);
      });
  }, [vetEmail]);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-2xl font-bold">Pet Connect</span>
        <button onClick={() => navigate("/logout")} className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out bg-red-500 hover:bg-red-600 rounded-md px-3 py-2 text-sm">Log Out</button>
      </div>
      </nav>
      <div className="container mx-auto mt-8">
        {vet ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="text-center mb-4">
              <img src={vetDP} alt="Vet Profile Image" className="rounded-full h-32 w-32 mx-auto mb-4" />
              <p className="text-xl font-bold">{vet.name}</p>
            </div>
            <div className="flex justify-between items-center mb-4"> 
              <h2 className="text-2xl font-bold">Profile</h2>
              {(userEmail === null || userEmail === "") && (
                <Link to="/editprofilevet" className="text-blue-500 hover:text-blue-700 font-semibold">Edit Profile</Link>
              )}
            </div>
            <p><span className="font-bold">Email: </span> {vet.email}</p>
            <p><span className="font-bold">Qualification: </span> {vet.qualification}</p>
            <p><span className="font-bold">Work: </span> {vet.workplace}</p>
            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">Services Provided</h2>
              {services.length > 0 ? (
                services.map(service => (
                  <div key={service._id} className="bg-gray-100 p-4 rounded-md mb-4">
                    <p><span className="font-bold">Title:</span> {service.title}</p>
                    <p><span className="font-bold">Type:</span> {service.type}</p>
                    <p><span className="font-bold">Description:</span> {service.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-700 font-bold">No services provided by vet.</p>
              )}
            </div>
            <Link to="/services" className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View All</Link>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-gray-700 font-bold">Loading vet profile...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VetProfile;
