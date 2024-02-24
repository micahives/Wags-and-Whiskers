const { newPetActivities, activityUpdate } = require('./helpers');

// test('newPetActivities should set isComplete to true for young activities when age is less than 52 weeks', () => {
//     const activities = [
//         { name: 'DHPP Vaccine', category: 'young', isComplete: true },
//         { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
//     ];

//     const updatedActivities = newPetActivities(activities, 30);

//     expect(updatedActivities).toEqual([
//         { name: 'DHPP Vaccine', category: 'young', isComplete: false },
//         { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
//     ]);
// });

// // Test case for adult with age greater than or equal to 52 weeks
// test('updateIsCompleteBasedOnAge should set isComplete to true for adult activities when age is greater than or equal to 52 weeks', () => {
//     const activities = [
//         { name: 'DHPP Vaccine', category: 'young', isComplete: true },
//         { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
//     ];

//     const updatedActivities = newPetActivities(activities, 60);

//     expect(updatedActivities).toEqual([
//         { name: 'DHPP Vaccine', category: 'young', isComplete: true },
//         { name: 'DHPP Vaccine', category: 'adult', isComplete: false },
//     ]);
// });

// // Test case for mixed activities with different categories
// test('updateIsCompleteBasedOnAge should update isComplete based on age for mixed activities', () => {
//     const activities = [
//         { name: 'DHPP Vaccine', category: 'young', isComplete: true },
//         { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
//         { name: 'Bordetella Vaccine', category: 'young', isComplete: true },
//     ];

//     const updatedActivities = newPetActivities(activities, 30);

//     expect(updatedActivities).toEqual([
//         { name: 'DHPP Vaccine', category: 'young', isComplete: false },
//         { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
//         { name: 'Bordetella Vaccine', category: 'young', isComplete: false },
//     ]);
// });

describe('activityUpdate', () => {
    test('should not update activities if currentAge is less than 52', async () => {
        const profile = {
            username: 'justind',
            email: 'justin@email.com',
            password: 'password',
            myPets: [
                {
                    petname: 'Riley',
                    isDog: true,
                    currentAge: 30,
                    activities: [
                        { name: "New Puppy Visit", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
                        { name: "Dewormer Medication", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
                        { name: 'Microchip', frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
                    ]
                }
            ]
        };

        const updatedProfile = await activityUpdate(profile);
        expect(updatedProfile).toEqual(profile);
    });

    test('should update activities if currentAge is greater than 52 and category is young', async () => {
        const profile = {
            username: 'justind',
            email: 'justin@email.com',
            password: 'password',
            myPets: [
                {
                    petname: 'Riley',
                    isDog: true,
                    currentAge: 54,
                    activities: [
                        { name: "New Puppy Visit", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
                        { name: "Dewormer Medication", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
                        { name: 'Microchip', frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
                    ]
                }
            ]
        };

        const updatedProfile = await activityUpdate(profile);
        // Add your expectations for the updatedProfile based on your function logic
        expect(updatedProfile).toEqual({
            username: 'justind',
            email: 'justin@email.com',
            password: 'password',
            myPets: [
                {
                    petname: 'Riley',
                    isDog: true,
                    currentAge: 54,
                    activities: [
                        { name: "New Puppy Visit", frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
                        { name: "Dewormer Medication", frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
                        { name: 'Microchip', frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
                    ]
                }
            ]
        });
    });

    test('should update activities if currentAge is greater than 52 and category is young', async () => {
        const profile = {
            username: 'justind',
            email: 'justin@email.com',
            password: 'password',
            myPets: [
                {
                    petname: 'Riley',
                    isDog: true,
                    currentAge: 54,
                    activities: [
                        { name: "New Puppy Visit", frequency: '12weeks', category: 'adult', isComplete: false, lastCompleted: ''  },
                        { name: "Dewormer Medication", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
                        { name: 'Microchip', frequency: '12weeks', category: 'adult', isComplete: false, lastCompleted: ''  },
                    ]
                }
            ]
        };

        const updatedProfile = await activityUpdate(profile);
        // Add your expectations for the updatedProfile based on your function logic
        expect(updatedProfile).toEqual(profile);
    });
});