import React, { useState, useEffect } from 'react';
import ChecklistItem from '../components/wellness/Checklist';
import { handleFrequency } from '../utils/helpers'
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { PET_PROFILE } from '../utils/queries';
import { EDIT_ACTIVITY } from '../utils/mutations';
import { useParams } from 'react-router-dom';
import EditPet from '../components/wellness/EditPet';
import greendog from '../assets/greendog.svg';
import greencat from '../assets/greencat.svg';



const WellnessPage = () => {
  const[editActivity] = useMutation(EDIT_ACTIVITY);
  const [petCareChecklist, setPetCareChecklist] = useState([]);
  const [showEditPetModal, setShowEditPetModal] = useState(false);
  const { petId } = useParams();
  const [petProfile, setPetProfile] = useState({});
  const { loading, data, refetch } = useQuery(PET_PROFILE, {
    variables: { petId }, //  <---------------Pulls in petId from url Params----------------------<<<
  });


  useEffect(() => {
    const getPetData = async () => {
      try {
        if (!data) {
          return;
        }

        const activities = data.petProfile.activities;            // MAPPING ACTIVITIES OUT OF THE RETURNED DATA OBJECT
        // mappedActivities is redundant. It's the same thing as the above activities array
        const mappedActivities = activities.map(activity => ({
          id: activity._id, // Assuming you want to use the activity ID as the unique identifier
          name: activity.name,
          frequency: activity.frequency,
          category: activity.category,
          isComplete: activity.isComplete,
          lastCompleted: activity.lastCompleted
        }));
        const petToDisplay = data.petProfile;
        const frequencyArray = activities.reduce((acc, item) => [...acc, item.frequency], []);
    
        setPetProfile(petToDisplay);//                                  SETTING STATES
        setPetCareChecklist(mappedActivities)
    

        // console.log(petCareChecklist)//                                  CONSOLE LOGS



      } catch (err) {
        console.error(err);
      }
    };
    getPetData();
  }, [data]);

  useEffect(() => {
    refetch();
  }, [refetch]);
  
  const handleEditPetClick = () => {
    setShowEditPetModal(true);
  };
  //                                                              MAKES ISCOMPLETE TRUE
  const handleChecklistChangeTrue = async (id,isComplete) => {
    // const currentDate = date.now
    const updatedPetCareChecklist = petCareChecklist.map((item) =>
      item.id === id
        ? { ...item, isChecked: !item.isChecked, isComplete: !item.isComplete, }
        : item
    );
    try {
      const { data } = await editActivity({
        variables: {
          petId: petId,
          activityId: id,
          isComplete: true // Toggle the completion status
        }
      });
    } catch (error) {
      console.error(error);
    }
    setPetCareChecklist(updatedPetCareChecklist);
  };

//                                                                   MAKES ISCOMPLETE FALSE
    const handleChecklistChangeFalse = async (id,isComplete) => {
    // const currentDate = date.now
    const updatedPetCareChecklist = petCareChecklist.map((item) =>
      item.id === id
        ? { ...item, isChecked: !item.isChecked, isComplete: !item.isComplete, }
        : item
    );
    try {
      const { data } = await editActivity({
        variables: {
          petId: petId,
          activityId: id,
          isComplete: false 
        }
      }); 
    } catch (error) {
      console.error(error);
    }
    setPetCareChecklist(updatedPetCareChecklist);
  };
  
  //                                                                                  FILTERING LISTS TO SORT THEM
  const completedPetCareChecklist = petCareChecklist.filter((item) => item.isComplete);
  const notCompletedPetCareChecklist= petCareChecklist.filter((item => !item.isComplete))




//                                                                                DATE FORMATING
const formatDate = (timestampString) => {
  const timestamp = parseInt(timestampString, 10);
  const date = new Date(timestamp);
  // Format the date as desired, for example: "Month Day, Year"
  const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('en-US', options);
};

// const formattedDate = formatDate(1709148504087);
// console.log(formattedDate); // Output will be something like "February 27, 2024"
const newDate = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  return formattedDate;
};



  return (
    <div>
      <div className=" flex flex-col items-center mt-32">
        <div className="w-1/3">



<div className="bg-gray-700 p-4 rounded-lg">
            <h1 className="text-4xl flex justify-center">{petProfile.petName} {notCompletedPetCareChecklist.length > 0 ? (<></>):(<div className="text-green-600 text-4xl font-bold">+</div>)}</h1>
            {/* <img  src={petProfile.image} alt="Pet Image" /> */}
            <div className= "flex justify-center">
            {petProfile.isDog ? <img  src={greendog} alt="Dog Image" /> : <img  src={greencat} alt="Cat Image" />}
            </div>
              {/* <h3 className="flex justify-center">{petProfile.isDog ? 'Dog' : 'Cat'}</h3> */}
            <h3 className="flex justify-center">Weight: {petProfile.weight} lb</h3>
            <h3 className="flex justify-center">Age: {petProfile.currentAge} Weeks</h3>
            <button onClick={handleEditPetClick} className="mr-4 mt-2 mb-2 text-green-500 hover:text-green-700 focus:outline-none">Edit Pet</button>
            <div className='absolute top-0 right-0'>
              
            </div>
            <br />
            {/* <h3 className="text-xl text-white">--------- Completed ---------</h3> */}
          
            <hr />
            <br />
            {completedPetCareChecklist.map((item) => (
              <ChecklistItem
                key={item.id}
                text={` ${item.name}        (${formatDate(item.lastCompleted[item.lastCompleted.length - 1]) === 'Invalid Date' ? newDate() : formatDate(item.lastCompleted[item.lastCompleted.length - 1])})`}
                isChecked={item.isComplete}
                onChange={() => handleChecklistChangeFalse(item.id)}
              />
            ))}
</div>

{/* CHECKLIST */}
<div className="bg-gray-700 mt-8 mb-8 p-4 rounded-lg ">

         
          {/* <h3 className="text-2xl flex justify-center">Pet Care Checklist </h3>
          <br />
          <hr />
          <br />
          {notCompletedPetCareChecklist.map((item) => (
            <ChecklistItem 
              key={item.id}
              text={` ${item.name} -${item.frequency}`}
              isChecked={item.isComplete}
              onChange={() => handleChecklistChangeTrue(item.id, item.isComplete)}
            />
          ))} */}
  {notCompletedPetCareChecklist.length > 0 ? (
    <>
      <h3 className="text-2xl flex justify-center">Pet Care Checklist</h3>
      <br />
      <hr />
      <br />
      {notCompletedPetCareChecklist.map((item) => (
        <ChecklistItem 
          key={item.id}
          text={` ${item.name} - ${handleFrequency(item.frequency)}`}
          isChecked={item.isComplete}
          onChange={() => handleChecklistChangeTrue(item.id, item.isComplete)}
        />
      ))}
    </>
  ) : (
    <div className="text-center text-green-600 text-2xl">{petProfile.petName} is up to Date!</div>
  )}

{/* <div>
{notCompletedPetCareChecklist.length > 0 ? (<></>):(<div className="text-green-500 text-3xl">+</div>
)}
</div> */}

          </div>
        </div>
      </div>
      {showEditPetModal && <EditPet showModal={showEditPetModal} setShowModal={setShowEditPetModal} petInfo={petProfile} />}
    </div>
  );
};

export default WellnessPage;