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
    variables: { petId: '65db377ec78c694455e49944' }, // Placeholder, replace with actual pet ID
  });

  // Display Pet Profile Data
  useEffect(() => {
    const getPetData = async () => {
      try {
        if (!data) {
          return;
        }

        const activities = data.petProfile.myPets[0].activities;
        const petToDisplay = data.petProfile.myPets[0];
        setPetProfile(petToDisplay);
        setPetCareChecklist(activities);
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
    const updatedPetCareChecklist = petCareChecklist.map((item) =>
      item._id === id
        ? { ...item, isChecked: !item.isChecked, isComplete: !item.isComplete }
        : item
    );
    setPetCareChecklist(updatedPetCareChecklist);
  };

  const completedPetCareChecklist = petCareChecklist.filter((item) => item.isComplete);
  const yearlyNotCompletedPet = petCareChecklist.filter(
    (item) => !item.isComplete && (item.frequency === 'yearly' || item.frequency === 'everyThreeYears')
  );
  const monthlyToDoPet = petCareChecklist.filter((item) => !item.isComplete && item.frequency === 'monthly');
  const dailyToDoPet = petCareChecklist.filter((item) => !item.isComplete && item.frequency === 'daily');

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen">
        <div className="mt-32">
          <div>
            <h1 className="text-2xl">Name: {petProfile.petName}</h1>
            <img src={petProfile.image} alt="Pet Image" />
            <h3>Weight: {petProfile.weight}</h3>
            <h3>Age: {petProfile.age} Weeks</h3>
          </div>

          <h1>----- Pet Care Checklist -----</h1>

          <h3 className="text-2xl">- Daily- </h3>
          {dailyToDoPet.map((item) => (
            <ChecklistItem
              key={item.id}
              text={item.name}
              isChecked={item.isChecked}
              onChange={() => handleChecklistChange(item._id)}
            />
          ))}
          <br />

          <h3 className="text-2xl">- Monthly </h3>
          {monthlyToDoPet.map((item) => (
            <ChecklistItem
              key={item.id}
              text={item.name}
              isChecked={item.isChecked}
              onChange={() => handleChecklistChange(item._id)}
            />
          ))}
          <br />

          <h3 className="text-2xl">- Yearly- </h3>
          {yearlyNotCompletedPet.map((item) => (
            <ChecklistItem
              key={item.id}
              text={item.name}
              isChecked={item.isChecked}
              onChange={() => handleChecklistChange(item._id)}
            />
          ))}
          <br />

          <div>
            <h3 className="text-2xl">- Completed - </h3>
            {completedPetCareChecklist.map((item) => (
              <ChecklistItem
                key={item.id}
                text={item.name}
                isChecked={item.isChecked}
                onChange={() => handleChecklistChange(item._id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WellnessPage;