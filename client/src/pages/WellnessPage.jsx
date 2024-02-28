import React, { useState, useEffect } from 'react';
import ChecklistItem from '../components/wellness/Checklist';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { PET_PROFILE } from '../utils/queries';
import { EDIT_ACTIVITY } from '../utils/mutations';
import { useParams } from 'react-router-dom';
import greendog from '../assets/greendog.svg'
import greencat from '../assets/greencat.svg'



const WellnessPage = () => {
  const[editActivity] = useMutation(EDIT_ACTIVITY);
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
        const mappedActivities = activities.map(activity => ({
          id: activity._id, // Assuming you want to use the activity ID as the unique identifier
          name: activity.name,
          frequency: activity.frequency,
          category: activity.category,
          isComplete: activity.isComplete,
          lastCompleted: activity.lastCompleted
        }));
        const petToDisplay = data.petProfile;
    
        setPetProfile(petToDisplay);//                                  SETTING STATES
        setPetCareChecklist(mappedActivities)
    

        // console.log(petCareChecklist)//                                  CONSOLE LOGS

        console.log(activities)


      } catch (err) {
        console.error(err);
      }
    };
    getPetData();
  }, [data]);

  useEffect(() => {
    refetch();
  }, [refetch]);

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
      console.log(data);
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
      console.log(data); 
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
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// const formattedDate = formatDate(1709148504087);
// console.log(formattedDate); // Output will be something like "February 27, 2024"



  return (
    <div>
      {/* this controls the margin o */}
      <div className= "mb-32">
      <Header />
      </div>
      <div className=" flex flex-col items-center min-h-screen">
        <div>

<img src="" alt="" />

<div className="bg-gray-700 p-4 rounded-lg">
            <h1 className="text-2xl">Name: {petProfile.petName}</h1>
            {/* <img  src={petProfile.image} alt="Pet Image" /> */}
            {petProfile.isDog ? <img  src={greendog} alt="Dog Image" /> : <img  src={greencat} alt="Cat Image" />}
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
              text={` ${item.name} -${item.frequency}`}
              isChecked={item.isComplete}
              onChange={() => handleChecklistChangeTrue(item.id, item.isComplete)}
            />
          ))}
          </div>

          <div className="mb-32 bg-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl">--------- Completed ---------</h3>
            {completedPetCareChecklist.map((item) => (
              <ChecklistItem
                key={item.id}
                text={` ${item.name}        (${formatDate(item.lastCompleted[1])})`}
                isChecked={item.isComplete}
                onChange={() => handleChecklistChangeFalse(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessPage;