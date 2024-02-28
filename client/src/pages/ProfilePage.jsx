import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from '../utils/queries';
import { ADD_PET } from '../utils/mutations';
import AddPet from '../components/profile/AddPet';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const { loading, data, refetch } = useQuery(GET_ME);
  const [petList, setPetList] = useState({});
  const [addPet] = useMutation(ADD_PET);
  const [showAddPetModal, setShowAddPetModal] = useState(false); // State for showing the add pet modal
  
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


  return (
    <div className="h-full">
      <Header />
      <div className="container px-4 py-12 mt-32">
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

      <div className="m-8 grid grid-cols-3 gap-4">
        {myPets && myPets.length > 0 && ( //                                      LIST OF PETS CARD CONDITINALLY RENDERED IF DATA EXISTS
          <div>
            {myPets.map((pet) => (
              <div key={pet._id} className="bg-gray-700 p-4 rounded-lg shadow-md m-4">
                <h2 className="text-xl font-semibold">{pet.petName}</h2>
                <p>{pet.isDog ? 'Dog' : 'Cat'}</p>
                <p>Age: {pet.age} Weeks</p>
                <p>Weight: {pet.weight} lbs</p>
              </div>
                          //                             ----------------TODO: NEEDS to LINK TO WELLNESS PAGE---------------------
            ))}
          </div>
        )}
      </div>

      {/* AddPet modal */}
      {showAddPetModal && <AddPet showModal={showAddPetModal} setShowModal={setShowAddPetModal} />}
    </div>
  );
};

export default ProfilePage;