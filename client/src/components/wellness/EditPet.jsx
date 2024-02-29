import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_PET } from '../../utils/mutations'
import { X } from "lucide-react"; // Import the X icon from lucide-react

const EditPet = ({ showModal, setShowModal, petInfo }) => {
  const [petId] = useState(petInfo._id);
  const [petName, setPetName] = useState(petInfo.petName);
  const [isDog, setIsDog] = useState(petInfo.isDog); // Default to Dog?
  const [age, setAge] = useState();
  const [weight, setWeight] = useState(petInfo.weight); // New state for pet weight
  const [editPet, { error }] = useMutation(EDIT_PET);
  // state to store the age input from the user
  const [ageInfo, setAgeInfo] = useState({
    ageYear: 0,
    ageMonth: 0,
    ageWeek: petInfo.age
  })
  
  const updateAgeInfo = (e) => {
    const { name, value } = e.target;
    
    setAgeInfo(ageInfo => ({
      ...ageInfo,
      [name]: value
    }));
  }
  
  // converts years and months into weeks and updates age state whenever ageInfo is updated
  useEffect(() => {
    const weekValues = []
    weekValues.push(ageInfo.ageYear * 52);
    weekValues.push(ageInfo.ageMonth * 4);
    weekValues.push(parseInt(ageInfo.ageWeek));

    const ageEntry = weekValues.reduce((acc, value) => acc + value, 0)

    if (ageEntry) {
      setAge(ageEntry);
    };

    console.log(age);
  }, [ageInfo])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editPet({
        variables: {
          petId,
          petName,
          isDog,
          age: parseInt(age),
          weight: parseFloat(weight) // Include weight in the mutation variables
        }
      });
      // Close the modal after successful submission
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const placeholder = `${age} weeks` 
  
  let i = 0-1;
  let j = 0-1;
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
              <select name='ageYear' value={ageInfo.ageYear} onChange={updateAgeInfo} className="text-gray-700 border border-gray-300 rounded-md w-20">
                { yearOptions }
              </select> Yr
            </div>
            <div>
              <select name='ageMonth' value={ageInfo.ageMonth} onChange={updateAgeInfo} className="text-gray-700 border border-gray-300 rounded-md w-20">
                { monthOptions }
              </select> Mo
            </div>
            <div>
              <input type="number" name="ageWeek" value={ageInfo.ageWeek} onChange={updateAgeInfo} placeholder={placeholder} className="text-gray-700 border border-gray-300 rounded-md w-20"/> Wk
            </div>
          </div>


          {/* New input field for pet weight */}
          <label htmlFor="weight" className="block mb-2">Weight (in pounds):</label>
          <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight in pounds" className="text-gray-700 block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />

          <button type="submit" className="bg-white text-green-700 rounded-md px-4 py-2">Update Pet</button>
        </form>
        {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default EditPet;