import { useState, useEffect } from 'react';
import ChecklistItem from '../components/wellness/Checklist';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer'
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import {PET_PROFILE} from '../utils/queries'
import { useParams } from 'react-router-dom'; 


const WellnessPage = () => {



  const [petCareChecklist, setPetCareChecklist] = useState([])
  const { petId } = useParams();
  const [petProfile, setPetProfile] = useState({});
  const { loading, data, refetch } = useQuery(PET_PROFILE, {
    variables: { petId: '65db377ec78c694455e49944' }, //    PLACEHOLDER. NEEDS TO BE REPLACED WITH WHATEVER PET ID IS CLICKED ON IN THE USER PROFILE. 
  });                                                 //      IN THE MEANTIME REPLACE THIS WITH A PET ID YOU HAVE CREATED FOR TESTING


  // Display Pet Profile Data
  useEffect(() => {
    const getPetData = async () => {
       try {
 if (!data){
   return;
 }
      // Extract activities from the pet profile data
  const activities = data.petProfile.myPets[0].activities;
  const petToDisplay = data.petProfile.myPets[0]
 setPetProfile(petToDisplay);
 setPetCareChecklist(activities)
//  console.log("Pet Care Check List")
console.log("petCareChecklist: ", JSON.stringify(petCareChecklist));
console.log(petProfile)
 } catch (err) {
   console.error(err);
 }};
 getPetData();
   },
   [data]
   )
   useEffect(() => {
     refetch(); // Trigger refetch on initial render
     console.log("petCareChecklist: ", JSON.stringify(petCareChecklist));
console.log(petProfile)
   }, [refetch]);
 




const handleChecklistChange = (id) => {
  const updatedPetCareChecklist = petCareChecklist.map(item =>
    item._id === id ? { ...item, isChecked: !item.isChecked, isComplete: !item.isComplete } : item
  );
  setPetCareChecklist(updatedPetCareChecklist);
  //                                                              WILL NEED TO UPDATE THE PET ITEM IN THE DB


  
  console.log("handle Check List Change has been run")
};





  // const notCompletedDogCareChecklist = dogCareChecklist.filter(item => !item.isComplete);
  const completedPetCareChecklist = petCareChecklist.filter(item => item.isComplete);
  const yearlyNotCompletedPet = petCareChecklist.filter(item => !item.isComplete && item.frequency === 'yearly' || !item.isComplete && item.frequency=== "everyThreeYears");
  const  monthlyToDoPet = petCareChecklist.filter (item => !item.isComplete && item.frequency === 'monthly')
  var dailyToDoPet = petCareChecklist.filter (item => !item.isComplete && item.frequency === "daily")



  return (

    <div>
        <div className="flex flex-col items-center  min-h-screen">
      <br />
      <div className='mt-32'>
      <br />
      <br />


      <div>
    <h1 className="text-2xl" > Name: {petProfile.petName}      </h1>
    Pet Image:<img src={petProfile.image} alt="Alt Text, This will be whatever image is uploaded" />
    <h3>Weight: {petProfile.weight}</h3>
    <h3>Age: {petProfile.age} Weeks</h3>

    </div>



    <br />

    <h1>----- Pet Care Checklist -----</h1>


<br />

   <h3 className="text-2xl" >- Daily- </h3>


<br />


   {dailyToDoPet.map(item => (
          <ChecklistItem
          key={item.id}
          text={item.name}
          isChecked={item.isChecked}
          onChange={() => handleChecklistChange(item._id)}
        />
        ))}
          <br />

    <h3 className="text-2xl" >- Monthly </h3>
    {monthlyToDoPet.map(item => (
          <ChecklistItem
          key={item.id}
          text={item.name}
          isChecked={item.isChecked}
          onChange={() => handleChecklistChange(item._id)}
        />
        ))}
          <br />

      <h3 className="text-2xl" >- Yearly- </h3>
      {yearlyNotCompletedPet.map(item => (
          <ChecklistItem
          key={item.id}
          text={item.name}
          isChecked={item.isChecked}
          onChange={() => handleChecklistChange(item._id)}
        />
        ))}
                    <br />



      <br />
      <br />
      <br />
      <br />
      <div>    
        <h3 className="text-2xl" >- Completed - </h3>
        {completedPetCareChecklist.map(item => (
          <ChecklistItem
          key={item.id}
          text={item.name}
          isChecked={item.isChecked}
          onChange={() => handleChecklistChange(item._id)}
        />
        ))}
        </div>
<br /><br /><br />
 
 
<br />
<br />
<br />
<br />
<br />
</div>
      </div>
    </div>
  );
};

export default WellnessPage;