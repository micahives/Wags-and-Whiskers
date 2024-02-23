const dogCare = [
    { name: "New Puppy Visit", frequency: 'sixWeeksOld', category: 'puppy', isComplete: true, dateComplete: ''  },
    { name: "Dewormer Medication", frequency: 'sixWeeksOld', category: 'young', isComplete: true, dateComplete: ''  },
    { name: 'Microchip', frequency: 'Once', category: 'young', isComplete: true, dateComplete: ''  },
    { name: 'Heartworm', frequency: 'Once', category: 'young', isComplete: true, dateComplete: ''  },
    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'young', isComplete: true, dateComplete: '' },
    { name: 'DHPP Vaccine', frequency: 'everyThree', category: 'young', isComplete: true, dateComplete: '' },
    { name: 'Leptospirosis Vaccine', frequency: 'Once', category: 'young', isComplete: true, dateComplete: '' }, 
    { name: 'Lyme Vaccine', frequency: 'Once', category: 'young', isComplete: true, dateComplete: '' },
    { name: 'Bordetella Vaccine', frequency: 'Once', category: 'young', dateComplete: ''  },
    { name: 'Spay/Neuter', frequency: 'Once', category: 'young', isComplete: true, dateComplete: ''  }, 
    { name: 'Rabies Vaccine', frequency: 'once', category: 'young', isComplete: true, dateComplete: '' },

    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'adult', isComplete: true, dateComplete: '' },
    { name: 'Vet Appointment: Wellness Visit', frequency: 'yearly', category: 'adult', isComplete: true, dateComplete: '' },
    { name: 'Heartworm Test', frequency: 'yearly', category: 'adult', isComplete: true, dateComplete: '' },
    { name: 'Leptospirosis Vaccine', frequency: 'yearly', category: 'adult', isComplete: true, dateComplete: '' }, 
    { name: 'Lyme Vaccine', frequency: 'yearly', category: 'adult', isComplete: true, dateComplete: '' },
    { name: 'Bordetella Vaccine', frequency: 'yearly', category: 'adult', dateComplete: ''  },
    { name: 'DHPP Vaccine', frequency: 'everyThreeYears', category: 'adult', isComplete: true, dateComplete: ''},
    { name: 'Rabies Vaccine', frequency: 'everyThreeYears', category: 'adult', isComplete: true, dateComplete: ''}
];

const catCare = [
    { name: "New Kitten VisNit", frequency: '12 Weeks Old', category: 'kitten', isComplete: true, dateComplete: ''  },
    { name: "Dewormer Medication", frequency: '12 Weeks Old', category: 'kitten', isComplete: true, dateComplete: ''  },
    { name: "FVRCP Vaccine", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: "Feline Veukemia Vaccine", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: "Rabies Vaccine", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
];


module.exports = { dogCare, catCare };