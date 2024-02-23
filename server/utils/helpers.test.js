const { newPetActivities } = require('./helpers');

test('newPetActivities should set isComplete to true for young activities when age is less than 52 weeks', () => {
    const activities = [
        { name: 'DHPP Vaccine', category: 'young', isComplete: true },
        { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
    ];

    const updatedActivities = newPetActivities(activities, 30);

    expect(updatedActivities).toEqual([
        { name: 'DHPP Vaccine', category: 'young', isComplete: false },
        { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
    ]);
});

// Test case for adult with age greater than or equal to 52 weeks
test('updateIsCompleteBasedOnAge should set isComplete to true for adult activities when age is greater than or equal to 52 weeks', () => {
    const activities = [
        { name: 'DHPP Vaccine', category: 'young', isComplete: true },
        { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
    ];

    const updatedActivities = newPetActivities(activities, 60);

    expect(updatedActivities).toEqual([
        { name: 'DHPP Vaccine', category: 'young', isComplete: true },
        { name: 'DHPP Vaccine', category: 'adult', isComplete: false },
    ]);
});

// Test case for mixed activities with different categories
test('updateIsCompleteBasedOnAge should update isComplete based on age for mixed activities', () => {
    const activities = [
        { name: 'DHPP Vaccine', category: 'young', isComplete: true },
        { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
        { name: 'Bordetella Vaccine', category: 'young', isComplete: true },
    ];

    const updatedActivities = newPetActivities(activities, 30);

    expect(updatedActivities).toEqual([
        { name: 'DHPP Vaccine', category: 'young', isComplete: false },
        { name: 'DHPP Vaccine', category: 'adult', isComplete: true },
        { name: 'Bordetella Vaccine', category: 'young', isComplete: false },
    ]);
});