

const newPetActivities = (activities, age) => {
    const ageThreshold = 52;

    return activities.map(activity => ({
        ...activity,
        isComplete: activity.category === (age > ageThreshold ? 'young' : 'adult'),
    })
  );
};

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const Pet = mongoose.model('Pet', petSchema);

// // Assuming you have the _id of the pet and the activity name you want to update
// const petId = 'yourPetId'; // Replace with the actual petId
// const activityNameToUpdate = 'Microchip'; // Replace with the actual activity name

// // Update the dateComplete for the specified activity
// Pet.findOneAndUpdate(
//   { _id: petId, 'activities.name': activityNameToUpdate },
//   { $set: { 'activities.$.dateComplete': new Date() } },
//   { new: true } // To get the updated document as a result
// )
//   .then(updatedPet => {
//     if (updatedPet) {
//       console.log('Pet updated:', updatedPet);
//     } else {
//       console.log('Pet not found');
//     }
//   })
//   .catch(error => {
//     console.error('Error updating pet:', error);
//   });

module.exports = {
    newPetActivities
}