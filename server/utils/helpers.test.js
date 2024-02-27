const { activityUpdate } = require('./helpers');
const { mockDeep } = require('jest-mock-extended'); // Using jest-mock-extended to create deep mock objects

// Mocking the Pet model
const Pet = mockDeep(['findOne']);

describe('activityUpdate function', () => {
    it('should update isComplete status based on frequency and lastCompleted date', async () => {
        // Mock data for the petProfile
        const mockPetProfile = {
            _id: 'mockPetId',
            activities: [
                {
                    frequency: 'monthly',
                    lastCompleted: [new Date('2022-01-01')], // Assuming last completion was in January 2022
                    isComplete: true,
                },
                {
                    frequency: 'yearly',
                    lastCompleted: [new Date('2021-01-01')], // Assuming last completion was in January 2021
                    isComplete: true,
                },
                {
                    frequency: 'everyThreeYears',
                    lastCompleted: [new Date('2018-01-01')], // Assuming last completion was in January 2018
                    isComplete: true,
                },
            ],
        };

        // Mocking the findOne method of the Pet model to return the mockPetProfile
        Pet.findOne.mockResolvedValueOnce(mockPetProfile);

        // Calling the function with the mocked Pet model
        const updatedPetProfile = await activityUpdate(mockPetProfile);

        // Assertions
        expect(updatedPetProfile).toEqual({
            _id: 'mockPetId',
            activities: [
                {
                    frequency: 'monthly',
                    lastCompleted: [new Date('2022-01-01')],
                    isComplete: false, // Expecting isComplete to be updated based on the condition
                },
                {
                    frequency: 'yearly',
                    lastCompleted: [new Date('2021-01-01')],
                    isComplete: false, // Expecting isComplete to be updated based on the condition
                },
                {
                    frequency: 'everyThreeYears',
                    lastCompleted: [new Date('2018-01-01')],
                    isComplete: false, // Expecting isComplete to be updated based on the condition
                },
            ],
        });
    });
});
