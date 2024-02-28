import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import Header from '../components/common/Header';
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from '../utils/queries';
import { ADD_PET, REMOVE_PET } from '../utils/mutations';
import AddPet from '../components/profile/AddPet';
import ConfirmationModal from '../components/common/ConfirmationModal';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const { loading, data, refetch } = useQuery(GET_ME);
  const [petList, setPetList] = useState([]);
  const [addPet] = useMutation(ADD_PET);
  const [removePet] = useMutation(REMOVE_PET);
  const [showAddPetModal, setShowAddPetModal] = useState(false); // State for showing the add pet modal
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [petToRemove, setPetToRemove] = useState(null);
  
  useEffect(() => {
    const getUserData = async () => {
      try {
        if (data && data.me) {
          setUserData(data.me);  //                      SETS USER DATA AND THE LIST OF PETS
          setPetList(data.me.myPets);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, [data]);

  useEffect(() => {
    refetch();  //                          Trigger refetch on initial render
  }, [refetch]);

  const myPets = petList;

  // Function to handle opening the add pet modal
  const handleAddPetClick = () => {
    setShowAddPetModal(true);
  };

  // Function to handle closing the add pet modal
  const handleCloseModal = () => {
    setShowAddPetModal(false);
  };

// Function to handle adding a new pet
const handleAddPet = async (formData) => {
  try {
    const { data } = await addPet({
      variables: formData
    });
    const newPet = data.addPet; 
    setPetList([...petList, newPet]);
    setShowAddPetModal(false);
  } catch (err) {
    console.error(err);
  }
};

const handleRemovePetClick = (petId) => {
  setPetToRemove(petId);
  setShowConfirmationModal(true);
};

const handleConfirmRemovePet = async () => {
  try {
    await removePet({
      variables: {
        petId: petToRemove
      }
    });
    setPetList(petList.filter(pet => pet._id !== petToRemove));
    setShowConfirmationModal(false);
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="h-full">
      <Header />
      <div className='flex flex-col sm:flex-row'>
        <div className="container px-4 py-12 mt-32 lg:w-1/2">
          <div className="max-w-xs mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <div className="p-4 h-full">
              <div className="h-64 flex items-center justify-center">
                <div className="h-32 w-32 bg-gray-500 rounded-full overflow-hidden justify-center items-center"></div>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl text-black font-semibold">{userData.username}</h2>
                <p className="text-sm text-black">{userData.petCount} Pets</p>
                <div><button onClick={handleAddPetClick} className='m-4 px-4 bg-gray-500 rounded-lg'>Add Pet</button></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12 mt-32 lg:w-1/2">
          {myPets && myPets.length > 0 && ( //                                      LIST OF PETS CARD CONDITINALLY RENDERED IF DATA EXISTS
            <div>

{myPets.map((pet) => (
  <div key={pet._id} className="bg-gray-700 p-4 rounded-lg shadow-md mx-4 mb-4 relative hover:bg-gray-600">
    <h2 className="text-xl font-semibold">{pet.petName}</h2>
    <p>{pet.isDog ? 'Dog' : 'Cat'}</p>
    <p>Age: {pet.age} Weeks</p>
    <p>Weight: {pet.weight} lbs</p>
    <div className="absolute inset-0">
      <Link to={`/Wellness/${pet._id}`} className="hover: text-purple-500"style={{ width: '75%', height: '100%', position: 'absolute' }}></Link>
    </div>
    <div className="absolute bottom-0 right-0">
      <button onClick={() => handleRemovePetClick(pet._id)} className="mr-4 mt-2 mb-2 text-red-500 hover:text-red-700 focus:outline-none">Remove</button>
    </div>
  </div>
))}

            </div>
          )}
        </div>
      </div>

      {/* AddPet modal */}
      {showAddPetModal && <AddPet showModal={showAddPetModal} setShowModal={setShowAddPetModal} />}

      {/* Confirmation modal for removing pets */}
      {showConfirmationModal && (
        <ConfirmationModal
          message="Are you sure you want to remove this pet? This action cannot be undone."
          onConfirm={handleConfirmRemovePet}
          onCancel={() => setShowConfirmationModal(false)}
        />
      )}
    </div>
  );
};

export default ProfilePage;