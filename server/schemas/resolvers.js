const { dogCare, catCare } = require('../utils/careActivities');
const { activityUpdate, checkAge } = require('../utils/helpers');
const { Profile, Pet } = require('../models');
const { signToken, AuthenticationError } = require ('../utils/auth');


const resolvers = {
    Query: {
        profiles: async(parent, args) => {
            return Profile.find();
        },
        profile: async( parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
        },
        me: async (parent, args, context) => {
            try {
              if (context.profile) {
                return await Profile.findOne({ _id: context.profile._id });
              } else {
                return AuthenticationError;
              }
            } catch (error) {
                console.log(error);
            }
        },
        petProfile: async (parent, { petId }, context) => {
            try {
                if (!petId) {
                    return AuthenticationError;
                } else {
                    let petProfile = await Pet.findOne({ _id: petId });

                    // checks age against activity list.  If over 52 weeks, all 'young' activities are marked isComplete and 'adult' activities are added to Pet object
                    petProfile = await checkAge(petProfile);

                    // updates the activity to false if it has been longer than the frequency would dictate
                    petProfile = await activityUpdate(petProfile);

                    // saves any changes to the Pet object to the database before being sent to the user
                    petProfile.save();

                    return petProfile;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },

    Mutation: {
        login: async (parent, { email, password, image }) => {
            let profile = await Profile.findOne({ email })
      
            if (!profile) {
              throw AuthenticationError;
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            };

            const token = signToken(profile);      
            return { token, profile };
          },
        addProfile: async (parent, {username, email, password, image}) => {
            try {
              const profile = await Profile.create({username, email, password, image});
              const token = signToken(profile);
            
              return { token, profile }
            } catch (err) {
                console.error(err);
            }
          },
        editProfile: async (parent, { email, password, image }, context) => {
            if (!context.profile) {
                return;
            }
        
            try {
                const updatedProfile = await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { email: email, password: password, image: image },
                    { new: true,  runValidators: true }
                );
        
                return updatedProfile;
            } catch (error) {
                console.error(error);
                throw AuthenticationError;
            }
        },
        addPet: async (parent, { petName, isDog, age, weight, image}, context) => {
            if (!context.profile) {
                return;
            }

            try {
                // populates dog or cat activities based on user input
                const activityList = isDog === true ? dogCare : catCare;
                                
                // filters activities based on age listed by user
                const activities = activityList.filter(item => item.category === (age < 52 ? 'young' : 'adult'));

                const newPet = await Pet.create({
                        petName: petName,
                        isDog: isDog,
                        activities: activities,
                        age: age,
                        weight: weight,
                        image: image
                });
                
                // pushes new Pet object to the user's Profile to be referenced later
                const addPetToProfile = await Profile.findOneAndUpdate( {_id: context.profile._id}, { $push: {myPets: newPet}});

                return newPet;
            } catch (error) {
                console.error(error);
                throw error
            };
        },
        devAddPet: async (parent, {profileId, petName, isDog, age, weight, image}, context) => {
            
            try {
                // populates dog or cat activities based on user input
                const activityList = isDog === true ? dogCare : catCare;
                                
                // filters activities based on age listed by user
                const activities = activityList.filter(item => item.category === (age < 52 ? 'young' : 'adult'));

                const newPet = await Pet.create({
                        petName: petName,
                        isDog: isDog,
                        activities: activities,
                        age: age,
                        weight: weight,
                        image: image
                });
                
                // pushes new Pet object to the user's Profile to be referenced later
                const addPetToProfile = await Profile.findOneAndUpdate( {_id: profileId}, { $push: {myPets: newPet}});

                return newPet;
            } catch (error) {
                console.error(error);
                throw error
            };
        },
        editPet: async (parent, args, context) => {
            if (!context.profile) {
                return;
            } 

            try {
                const updatePet = await Pet.findOneAndUpdate( 
                    {_id: args.petId}, 
                    { $set: args}, 
                    {new: true });

                return updatePet;
            } catch (error) {
                console.log(error);
                throw error
            };
        }, 
        removePet: async (parent, {petId}, context) => {
            if (!context.profile) {
                return;
            }

            try {
                // removes reference object from Profile
                const updateProfile = await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $pull: {myPets: { _id: petId}}},
                    { new: true },
                );

                // deletes Pet object from database
                await Pet.deleteOne({ _id: petId })

                return updateProfile;
            } catch (error) {
                console.log(error);
                throw error
            };
        },
        editActivity: async (parent, {petId, activityId, isComplete}, context) => {
            if (!context.profile) {
                return;
            }
            
            try {
                // changes isComplete to true and adds date of completion to the activity object
                if (isComplete) {
                    const updateActivity = await Pet.findOneAndUpdate(
                        { _id: petId, 'activities._id': activityId },
                        { 
                            $set: { 'activities.$.isComplete': isComplete } ,
                            $push: { 'activities.$.lastCompleted': Date.now() } 
                        },
                        { new: true}
                    );

                    return updateActivity;
                } else {
                    // user can manually change isComplete to false and remove the most recent 'lastCompleted' entry
                    const updateActivity = await Pet.findOneAndUpdate(
                        { _id: petId, 'activities._id': activityId },
                        { 
                            $set: { 'activities.$.isComplete': isComplete } ,
                            $pop: { 'activities.$.lastCompleted': 1 } 
                        },
                        { new: true}
                    );

                    return updateActivity;
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    },
};

module.exports = resolvers;