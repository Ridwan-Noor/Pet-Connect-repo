const mongoose = require('mongoose');
const vet_model = require("../model/models/vet_model.js");
const services_model = require("../model/models/services_model.js");

/*
const getVetProfile = (req, res) => {
    const vetEmail = req.params.email;
    vet_model.findOne({ email: vetEmail }, (err, vetProfile) => {
      if (err) {
        console.error('Error finding vet profile:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(vetProfile);
    });
  };
*/


const getVetProfile = (req, res) => {
    
    const vetEmail = req.params.email;
    //console.log(vetEmail)
    vet_model.find({ email: vetEmail })
        .then(vetProfile => res.json(vetProfile))
        .catch(err => res.json(err))
};

const getServicesByVetEmail = (req, res) => {
  const vetEmail = req.params.email;
  console.log(vetEmail)

  // Find services provided by the vet with the specified email
  services_model.find({ providerEmail: vetEmail })
    .then(vetProfile => res.json(vetProfile))
    .catch(err => res.json(err))
};



const updateVetProfile = async (req, res) => {
  const { id } = req.params;
  const { name, email, qualification, workplace } = req.body;
  console.log(id)

  // Create an object to store only non-null and non-empty fields
  const updatedFields = {};

  // Check and update each field
  if (name !== null && name !== "") {
      updatedFields.name = name;
  }

  if (email !== null && email !== "") {
      updatedFields.email = email;
  }

  if (qualification !== null && qualification !== "") {
      updatedFields.qualification = qualification;
  }

  if (workplace !== null && workplace !== "") {
      updatedFields.workplace = workplace;
  }

  try {
      // Update the vet's profile information with non-null and non-empty fields
      const updatedVet = await vet_model.findByIdAndUpdate(id, { $set: updatedFields }, { new: true });

      if (!updatedVet) {
          return res.status(404).json({ message: 'Vet not found' });
      }

      res.json(updatedVet);
  } catch (error) {
      console.error('Error updating vet profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  getVetProfile,
  getServicesByVetEmail,
  updateVetProfile
};