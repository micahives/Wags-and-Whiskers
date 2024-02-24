

const newPetActivities = (activities, age) => {
    const ageThreshold = 52;

    return activities.map(activity => ({
        ...activity,
        isComplete: activity.category === (age > ageThreshold ? 'young' : 'adult'),
    })
  );
};

// helper function to compare current age to wellness activities listed.  
// If younger than a year old, nothing happens
// if older than a year old and activites are 'young', it will set all isComplete to true for that set
// if older than a year old and activities are 'adult', nothing happens.
const activityUpdate = async ( profile ) => {;

    for (i=0; i< profile.myPets.length; i++) {
        const currentAge = profile.myPets[i].currentAge;
        const activitySet = profile.myPets[i].activities.reduce((result, item) => {
            return result || item.category;
        }, null);

        if (currentAge < 52) {
            return profile;
        } else if (currentAge > 52 && activitySet === 'young') {
            profile.myPets[i].activities.map(activity => activity.isComplete = true);
        }
    }

    return profile;
};

/** for each pet
 * if currentAge is less that
 */



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
    newPetActivities,
    activityUpdate,
}