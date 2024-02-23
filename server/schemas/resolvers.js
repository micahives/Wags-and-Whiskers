const { dogCare, catCare } = require('../utils/careActivities');
const {newPetActivities} = require('../utils/helpers');
const { Profile } = require('../models');
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
                return Profile.findOne({ _id: context.profile._id });
              } else {
                return AuthenticationError;
              }
            } catch (error) {
                console.log(error);
            }
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });
      
            if (!profile) {
              throw AuthenticationError;
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
        addProfile: async (parent, {username, email, password}) => {
            try {
              const profile = await Profile.create({username, email, password});
              const token = signToken(profile);
            
              return { token, profile }
            } catch (err) {
                console.error(err);
            }
          },
        editProfile: async (parent, { email, password }, context) => {
            if (!context.profile) {
                return;
            }
        
            try {
                const updatedProfile = await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { 
                        email: email,
                        password: password
                    },
                    {
                        new: true,
                        runValidators: true
                    }
                );
        
                return updatedProfile;
            } catch (error) {
                console.error(error);
                throw AuthenticationError;
            }
        },
        addPet: async (parent, {petName, isDog, age, weight, image}, context) => {
            if (!context.profile) {
                return;
            }

            try {
                const activityList = isDog === true ? dogCare : catCare;
                                
                const activities = activityList.filter(item => item.category === (age < 52 ? 'young' : 'adult'));

                //the below commented out, would be used if more date logic were going to be applied to displayed activities
                //activities = newPetActivities(activities, age);

                const newPet = await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $addToSet: {
                        myPets: {
                            petName: petName,
                            isDog: isDog,
                            activities: activities,
                            age: age,
                            weight: weight,
                            image: image
                        },
                    }},
                    { 
                        new: true,
                        runValidators: true
                    },
                );

                return newPet;
            } catch (error) {
                console.error(error);
                throw error
            };
        },
        editPet: async (parent, {petId, petName, weight, image}, context) => {
            if (!context.profile) {
                return;
            } 

            try {
                const updatePet = await Profile.findOneAndUpdate(
                    { _id: context.profile._id, 'myPets._id': petId },
                    { $set: { 'myPets.$': {
                        petName: petName,
                        weight: weight,
                        image: image,
                    }}},
                    {
                        new: true,
                        runValidators: true,
                    }
                );

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
                const updateProfile = await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $pull: {myPets: { _id: petId}}},
                    { new: true },
                );

                return updateProfile;
            } catch (error) {
                console.log(error);
                throw error
            };
        }
    },
};

module.exports = resolvers;