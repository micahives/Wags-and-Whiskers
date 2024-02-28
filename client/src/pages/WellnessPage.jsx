import React, { useState, useEffect } from 'react';
import ChecklistItem from '../components/wellness/Checklist';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { PET_PROFILE } from '../utils/queries';
import { useParams } from 'react-router-dom';

const WellnessPage = () => {
  const [petCareChecklist, setPetCareChecklist] = useState([]);
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
        // console.log("PET CARE CHECKLIST STATE", JSON.stringify(petCareChecklist))
        console.log("Activities", JSON.stringify(activities))


      } catch (err) {
        console.error(err);
      }
    };
    getPetData();
  }, [data]);

  useEffect(() => {
    refetch(); // Trigger refetch on initial render
  }, [refetch]);

  const handleChecklistChange = (id) => {
    // const currentDate = date.now
    const updatedPetCareChecklist = petCareChecklist.map((item) =>
      item.id === id
        ? { ...item, isChecked: !item.isChecked, isComplete: !item.isComplete, }
        : item
    );
    setPetCareChecklist(updatedPetCareChecklist);
  };

  //                                                                                  FILTERING LISTS TO SORT THEM
  const completedPetCareChecklist = petCareChecklist.filter((item) => item.isComplete);
  const notCompletedPetCareChecklist= petCareChecklist.filter((item => !item.isComplete))
  // const yearlyNotCompletedPet = petCareChecklist.filter(
  //   (item) => !item.isComplete && (item.frequency === 'yearly' || item.frequency === 'everyThreeYears'));
  // const monthlyToDoPet = petCareChecklist.filter((item) => !item.isComplete && item.frequency === 'monthly');
  // const dailyToDoPet = petCareChecklist.filter((item) => !item.isComplete && item.frequency === 'daily');


  return (
    <div>
      {/* this controls the margin o */}
      <div className= "mb-32">
      <Header />
      </div>
      <div className=" flex flex-col items-center min-h-screen">
        <div>


<div className="bg-gray-700 p-4 rounded-lg">
            <h1 className="text-2xl">Name: {petProfile.petName}</h1>
            <img  src={petProfile.image} alt="Pet Image" />
              <p>{petProfile.isDog ? 'Dog' : 'Cat'}</p>
            <h3>Weight: {petProfile.weight}</h3>
            <h3>Age: {petProfile.age} Weeks</h3>

</div>


{/* CHECKLIST */}
<div className="bg-gray-700 mt-8 mb-32 p-4 rounded-lg ">

          <h1></h1>
          <h3 className="text-2xl">--------- Pet Care Checklist ---------</h3>

<br />
          {notCompletedPetCareChecklist.map((item) => (
            <ChecklistItem 
              key={item.id}
              text={` ${item.name} - ${item.frequency}`}
              isChecked={item.isChecked}
              onChange={() => handleChecklistChange(item.id)}
            />
          ))}
          </div>

          <div className="mb-32 bg-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl">--------- Completed ---------</h3>
            {completedPetCareChecklist.map((item) => (
              <ChecklistItem
                key={item.id}
                text={` ${item.name}: Completed (date)${item.lastCompleted}`}
                isChecked={item.isChecked}
                onChange={() => handleChecklistChange(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessPage;