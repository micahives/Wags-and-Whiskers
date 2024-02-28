import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../../utils/mutations';
import { X } from "lucide-react"; // Import the X icon from lucide-react

const AddPet = ({ showModal, setShowModal }) => {
  const [petName, setPetName] = useState('');
  const [isDog, setIsDog] = useState(true); // Default to Dog?
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState(''); // New state for pet weight
  const [addPet, { error }] = useMutation(ADD_PET);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPet({
        variables: {
          petName,
          isDog,
          age: parseInt(age),
          weight: parseFloat(weight) // Include weight in the mutation variables
        }
      });
      // Close the modal after successful submission
      setShowModal(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  let i = 0;
  let j = 0;
  const yearOptions = [];
  const monthOptions = []
  while (i < 25) {
    yearOptions.push(
      <option value={i+1}>{i+1}</option>
    );
    i++;
  };

  while (j < 11) {
    monthOptions.push(
      <option value={j+1}>{j+1}</option>
    );
    j++;
  }  

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${showModal ? '' : 'hidden'}`}>
      <div className="bg-green-700 w-full max-w-md p-8 rounded-lg shadow-lg relative">
        <button className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 focus:outline-none" onClick={() => setShowModal(false)}>
          <X size={32} /> {/* X icon from lucide-react */}
        </button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="petName" className="block mb-2">Pet Name:</label>
          <input type="text" id="petName" value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="Enter pet name" className="text-gray-700 block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />

          <label htmlFor="petType" className="block mb-2">Pet Type:</label>
          <select id="petType" value={isDog} onChange={(e) => setIsDog(e.target.value === 'true')} className="text-gray-700 block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required>
            <option value={true}>Dog</option>
            <option value={false}>Cat</option>
          </select>

          <label htmlFor="age" className="block mb-2">Age:</label>
          <div className="flex justify-between mb-2">
            <div>
              <select id='ageyear' value='' className="text-gray-700 border border-gray-300 rounded-md w-20">
                { yearOptions }
              </select> Year(s)
            </div>
            <div>
              <select id='agemonth' value='' className="text-gray-700 border border-gray-300 rounded-md w-20">
                { monthOptions }
              </select> Month(s)
            </div>
            <div>
              <input type="number" id="ageweek" placeholder=" weeks" className="text-gray-700 border border-gray-300 rounded-md w-20"/>
            </div>
          </div>


          {/* New input field for pet weight */}
          <label htmlFor="weight" className="block mb-2">Weight (in pounds):</label>
          <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight in pounds" className="text-gray-700 block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />

          <button type="submit" className="bg-white text-green-700 rounded-md px-4 py-2">Add Pet</button>
        </form>
        {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default AddPet;