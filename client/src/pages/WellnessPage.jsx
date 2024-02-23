import React, { useState } from 'react';
import ChecklistItem from '../components/wellness/Checklist';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer'
import { dogCare, catCare } from '../../utils/careActivities';



const WellnessPage = () => {

const [dogCareChecklist, setDogCareChecklist] = useState([
  { id: 1, name: " New Puppy Visit", frequency: 'Once', category: 'vetAppt', isComplete: false, dateComplete: ''  },
  { id: 2, name: " Dewormer Medication", frequency: 'Once', category: 'prevent', isComplete: false, dateComplete: ''  },
  { id: 3, name: " Vacination Visit", frequency: 'Once', category: 'vetAppt', isComplete: false, dateComplete: ''  },
  { id: 4, name: ' Microchip', frequency: 'Once', category: 'prevent', isComplete: false, dateComplete: ''  },
  { id: 5, name: ' Heartworm', frequency: 'Once', category: 'prevent', isComplete: false, dateComplete: ''  },
  { id: 6, name: ' Flea & Tick Preventative', frequency: 'Monthly', category: 'prevent', isComplete: false, dateComplete: '' },
  { id: 7, name: ' DHPP Vaccine', frequency: 'everyThree', isComplete: false, dateComplete: '' },
  { id: 8, name: ' Leptospirosis', frequency: 'Once', category: 'vaccine', isComplete: false, dateComplete: '' }, 
  { id: 9, name: ' Lyme', frequency: 'Once', category: 'vaccine', isComplete: false, dateComplete: '' },
  { id: 10, name: ' Bordetella', frequency: 'Once', category: 'vaccine', isComplete: false, dateComplete: ''  },
  { id: 11, name: ' Spay/Neuter', frequency: 'Once', category: 'vetAppt', isComplete: false, dateComplete: ''  }, 
  { id: 12, name: ' Rabies Vaccine', frequency: 'everyThree', isComplete: false, dateComplete: '' },
  { id: 13, name: ' Vet Appointment: Wellness Visit', frequency: 'Yearly', isComplete: false, dateComplete: '' },
  { id: 14, name: ' Heartworm Test', frequency: 'Yearly', isComplete: false, dateComplete: '' },
])


const handleChecklistChange = (id) => {
  const updatedDogCareChecklist = dogCareChecklist.map(item =>
    item.id === id ? { ...item, isChecked: !item.isChecked, isComplete: !item.isComplete } : item
  );
  setDogCareChecklist(updatedDogCareChecklist);
};

  const notCompletedDogCareChecklist = dogCareChecklist.filter(item => !item.isComplete);
  const completedDogCareChecklist = dogCareChecklist.filter(item => item.isComplete);

  return (
    <div>
      <Header/>
        <div className="flex flex-col items-center  min-h-screen">
      <br />
      <div className='mt-32'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
        <h3 className="text-2xl" >- Completed - </h3>
        {completedDogCareChecklist.map(item => (
          <ChecklistItem
          key={item.id}
          text={item.name}
          isChecked={item.isChecked}
          onChange={() => handleChecklistChange(item.id)}
        />
        ))}
<br /><br /><br />
 
      <h3 className="text-2xl" >- Upcoming - </h3>
        {notCompletedDogCareChecklist.map(item => (
          <ChecklistItem
          key={item.id}
          text={item.name}
          isChecked={item.isChecked}
          onChange={() => handleChecklistChange(item.id)}
        />
        ))}

<br />
<br />
<br />
<br />
<br />
</div>
      </div>
      <Footer/>
    </div>
  );
};

export default WellnessPage;
